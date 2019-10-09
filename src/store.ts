import Vue from "vue";
import Vuex from "vuex";
// service
import * as userService from '@/services/userService'
// model
import User from '@/models/User'
import Stone from '@/models/Stone'
import UserRepository from './repositories/userRepository';

Vue.use(Vuex);
const userRepository = new UserRepository();

export default new Vuex.Store({
  state: {
    user: new User(0, "", new Stone(300), []),
  },
  mutations: {
    addStone (state, amount: number) {
      state.user.stone.add(amount);
    },
    subStone (state, amount: number) {
      state.user.stone.sub(amount);
    },
    setUser (state, user: User) {
      state.user = user;
    }
  },
  actions: {
    async addStone ({ commit }, amount: number) {
      const storeStone = this.state.user.stone; 
      console.log("await");
      await userRepository.updateStone(new Stone(storeStone.amount + amount));
      commit('addStone', amount)
    },
    async subStone ({ commit }, amount: number) {
      const storeStone = this.state.user.stone; 
      console.log(`${amount} 減らします`);
      if(storeStone.canSubtract(amount)) {
        await userRepository.updateStone(new Stone(storeStone.amount - amount));
        commit('subStone', amount)
      } else {
        console.log(`${amount} 石が足りません!!`);
        throw new Error("石が足りません。");
      }
    },
    async loadUser ({ commit }, name: string) {
      const user = await userService.login(name);
      commit('setUser', user)
    },
  }
});
