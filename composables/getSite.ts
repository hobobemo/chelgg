export function getNavigation(){
    return [
        {
            title: 'Home',
            path: '/',
            icon: 'mdi-home',
        }, {
            title: 'About',
            path: '/about',
            icon: 'mdi-information',
        }, {
            title: 'Leagues',
            path: '/leagues',
            icon: 'mdi-shield'
        }, {
            title: 'Pricing',
            path: '/pricing',
            icon: 'mdi-cash'
        }
    ]
}

export function getSidebar(){
    return [
        {
            title: 'Seasons',
            path: '/dashboard/seasons',
            icon: 'mdi-snowflake',
        }, {
            title: 'Divisions',
            path: '/dashboard/divisions',
            icon: 'mdi-ab-testing'
        }, {
            title: 'Teams',
            path: '/dashboard/teams',
            icon: 'mdi-shield'
        }, {
            title: 'Schedule',
            path: '/dashboard/schedule',
            icon: 'mdi-calendar-check'
        }, {
            title: 'Match Management',
            path: '/dashboard/match-management',
            icon: 'mdi-auto-fix'
        }
    ]
}

export function getPaymentType(type: string){
    switch (type) {
        case 'recurring':
            return '/mo';
            break;
    }
}

export function getTotal(total: number){
    return (total / 100).toFixed(2);
}

export function formatDate(dateStr: string){
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear().toString().slice(-2)}`;
};

export function getGameTimes() {
  const times = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min += 15) {
      const h = hour.toString().padStart(2, '0');
      const m = min.toString().padStart(2, '0');
      const value = `${h}${m}`;       // e.g. "0830"
      const title = `${h}:${m}`;      // e.g. "08:30"
      times.push({ value, title });
    }
  }

  return times;
}

export function getWeekCount(start: number, end: number): number {
  const millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  const duration = end - start;
  return Math.ceil(duration / millisecondsPerWeek);
}

export function getDaysOfTheWeek(){
    return [
        { title: "Sunday", value: 'Sun' },
        { title: "Monday", value: 'Mon' },
        { title: "Tuesday", value: 'Tue' },
        { title: "Wednesday", value: 'Wed' },
        { title: "Thursday", value: 'Thur' },
        { title: "Friday", value: 'Fri' },
        { title: "Saturday", value: 'Sat' },
    ]
}