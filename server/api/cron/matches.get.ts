import { serverGetData, serverPushData } from '~/server/utils/firebaseRtdb'; // Assuming you have this

export default defineEventHandler(async (event) => {
  const data = await serverGetData('leagues/active');

  if (!data) return [];

  const leagues = Object.entries(data).map(([id, league]) => ({
    id,
    ...league
  }));

  // Collect matches for all teams
  for (const league of leagues) {
    const teamData = league.teams;

    if (!teamData || typeof teamData !== 'object') continue;

    for (const [teamId, team] of Object.entries(teamData)) {
      if (!team || !team.clubId) continue;

      try {
        const matches = await $fetch(`/api/ea/club/matches`, {
          method: 'GET',
          query: {
            clubIds: team.clubId,
            matchType: 'gameType5'
          }
        });

        matches.forEach(async (match) => {
          await serverPostData(`leagues/active/${league.id}/rawMatches/${match.matchId}`, match);
        });

      } catch (error) {
        console.error(`Failed to fetch matches for club ${team.clubId}:`, error);
      }
    }
  }

  return leagues;
});
