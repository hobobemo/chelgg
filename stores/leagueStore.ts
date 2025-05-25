import { defineStore } from 'pinia'

export const useLeagueStore = defineStore('league', {
  state: () => {
    return {
      leagueSet: false,
      leagueId: '',
      name: null,
    }
  },
  getters: {
    getLeague(state){
      return state.leagueSet;
    },
    getLeagueId(state){
      return state.leagueId
    }
  },
  actions: {
    setLeague(index: string, item: object){
      this.leagueId = index;
      this.name = item.name;
      this.leagueSet = true;
    },
    unSetLeague(){
      this.leagueId = '',
      this.name = null,
      this.leagueSet = false;
    }
  },
})