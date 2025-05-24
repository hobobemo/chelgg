export default defineEventHandler(async (event) => {
    const query = getQuery(event)
  
    const res = await $fetch('https://proclubs.ea.com/api/nhl/clubs/seasonalStats', {
      method: 'GET',
      query: {
        platform: 'common-gen5',
        clubIds: query.clubIds
      },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json'
      }
    })
  
    return res
  })
  