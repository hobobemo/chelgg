import { ref as dbRef, get } from 'firebase/database'

export function getTeamLogo(value: object) {
    switch (value?.useBaseAsset) {
      case '1':
        if(value?.crestAssetId > 1000){
          return 'https://media.contentapi.ea.com/content/dam/ea/nhl/nhl-20/common/pro-clubs/t1000.png'
        } else {
          return `https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/custom-crests/${value?.crestAssetId}.png`
        }
        break;
      case '0':
        return `https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/crests/t${value?.crestAssetId}.png`;
        break;
    }
}

export async function getDisplayAbbr(leagueId: string, clubId: string | number) {
  const { rtdb } = useFirebase();

  const teamsRef = dbRef(rtdb, `/leagues/active/${leagueId}/teams`);
  const teamsSnap = await get(teamsRef);
  if (!teamsSnap.exists()) return null;

  const teams = teamsSnap.val();
  for (const teamId in teams) {
    const team = teams[teamId];
    if (String(team.clubId) === String(clubId)) {
      return team.displayAbbr || null;
    }
  }

  return null;
}