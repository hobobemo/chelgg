// composables/useScheduleGenerator.ts

function shuffleArray(array: any[]): any[] {
  return array.sort(() => Math.random() - 0.5);
}

function getWeekCount(start: number, end: number): number {
  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.ceil((end - start) / millisecondsPerWeek);
}

function getGameDates(seasonStart: number, seasonEnd: number, gameDays: string[]): Date[] {
  const validDates: Date[] = [];
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const allowedDays = gameDays.map(day => dayMap[day]);

  let current = new Date(seasonStart);
  current.setHours(0, 0, 0, 0);

  const end = new Date(seasonEnd);
  end.setHours(23, 59, 59, 999);

  while (current <= end) {
    if (allowedDays.includes(current.getDay())) {
      validDates.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }

  return validDates;
}

export function useScheduleGenerator(
  season: Record<string, any>,
  teams: string[] = [],
  gameTimes: string[] = [],
  gameDays: string[] = []
) {
  if (!season || !teams.length || !gameTimes.length || !gameDays.length) {
    console.warn('Missing required input.');
    return [];
  }

  if (teams.length < 2 || teams.length % 2 !== 0) {
    console.warn('Team count must be even and >= 2 to schedule matches properly.');
    return [];
  }

  const matchups = [];
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matchups.push({ homeTeam: teams[i], awayTeam: teams[j] });
    }
  }

  const totalGamesNeeded = matchups.length;
  let scheduledGames = [];
  while (scheduledGames.length < totalGamesNeeded * 2) {
    scheduledGames = scheduledGames.concat(shuffleArray([...matchups]));
  }

  const validDates = getGameDates(season.seasonStart, season.seasonEnd, gameDays);
  const schedule = [];
  let gameIndex = 0;
  const gamesPerSlot = teams.length / 2;

  for (const date of validDates) {
    for (const time of gameTimes) {
      for (let g = 0; g < gamesPerSlot; g++) {
        if (gameIndex >= scheduledGames.length) break;

        const { homeTeam, awayTeam } = scheduledGames[gameIndex];

        const hours = parseInt(time.slice(0, 2), 10);
        const minutes = parseInt(time.slice(2, 4), 10);

        const gameDate = new Date(date);
        gameDate.setHours(hours, minutes, 0, 0);

        schedule.push({
          seasonId: season.id,
          timestamp: gameDate.getTime(),
          homeTeam,
          awayTeam,
        });

        gameIndex++;
      }
    }
  }

  return schedule;
}
