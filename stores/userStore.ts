import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      isAuth: true,
      id: null,
      avatar: null,
      email: null,
      globalName: null,
      username: null,
      connections: [],
      guilds: [],
      level: 0,
      customerId: null,
    }
  },
  getters: {
    getAuth(state){
      return state.isAuth;
    },
    getId(state){
      return state.id;
    },
    getAvatar(state){
      return state.avatar;
    },
    getEmail(state){
      return state.email;
    },
    getGlobalName(state){
      return state.globalName;
    },
    getUsername(state){
      return state.username;
    },
    getConnections(state){
      return state.connections;
    },
    getGuilds(state){
      return state.guilds;
    },
    getLevel(state){
      return state.level;
    },
    getCustomerId(state){
      return state.customerId;
    }
  },
  actions: {
    setUser(user: object, connections: object, guilds: object){
      this.id = user.id;
      this.avatar = user.avatar;
      this.email = user.email;
      this.globalName = user.global_name;
      this.username = user.username;

      connections.forEach(connection => {
        this.connections.push(connection);
      });

      guilds.forEach(guild => {
        this.guilds.push(guild);
      });

      if(this.id){
        this.isAuth = true;
      }
    },
    removeUser(){
      this.id = null;
      this.avatar = null;
      this.email = null;
      this.globalName = null;
      this.username = null;
      this.connections = [];
      this.guilds = [];
      this.isAuth = false;
      this.level = 0;
      this.customerId = null;
    },
    setCustomer(customer: string){
      this.customerId = customer;
    },
    removeCustomer(){
      this.customerId = null;
    }
  },
})