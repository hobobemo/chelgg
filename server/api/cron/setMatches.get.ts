import { serverGetData, serverPostData } from '~/server/utils/firebaseRtdb';

export default defineEventHandler(async (event) => {
  const leaguesData = await serverGetData('leagues/active');
  if (!leaguesData) return [];

  const leagues = Object.entries(leaguesData);

  for (const [leagueId, league] of leagues) {
    const seasons = league.seasons || {};
    const teams = league.teams || {};
    const rawMatches = league.rawMatches || {};

    // Map teamId -> clubId for quick lookup
    const teamToClubId = {};
    for (const [teamId, teamData] of Object.entries(teams)) {
      if (teamData && teamData.clubId) {
        teamToClubId[teamId] = teamData.clubId.toString();
      }
    }

    for (const [seasonId, scheduleArray] of Object.entries(seasons)) {
      if (!Array.isArray(scheduleArray)) continue;

      for (let i = 0; i < scheduleArray.length; i++) {
        const game = scheduleArray[i];

        // Skip if match already assigned
        if (game.match) continue;

        const homeClubId = teamToClubId[game.homeTeam];
        const awayClubId = teamToClubId[game.awayTeam];
        const gameTime = game.timestamp;

        if (!homeClubId || !awayClubId || !gameTime) continue;

        // Search rawMatches within ±40 min window
        const matched = Object.values(rawMatches).find((match) => {
          const matchTime = match.timestamp * 1000; // Firebase stores it in seconds
          const timeDiff = Math.abs(matchTime - gameTime);
          if (timeDiff > 2400000) return false;

          const clubs = match.clubs || {};
          const matchClubIds = Object.keys(clubs);

          return (
            matchClubIds.includes(homeClubId) &&
            matchClubIds.includes(awayClubId)
          );
        });

        if (matched) {
          // Update the game with match
          scheduleArray[i] = {
            ...game,
            match: matched
          };
        }
      }

      // Push updated season schedule with matches
      await serverPostData(`leagues/active/${leagueId}/seasons/${seasonId}`, scheduleArray);
    }
  }

  return { success: true };
});
