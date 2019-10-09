<template>
  <div id="app">
    <notifications group="errorHandler" />
    <div id="header">
      {{ user.stone.amount }}
      <button @click="subStone(200)">消費</button>
      <button @click="addStone(200)">∞課金</button>
      こんにちは、{{ user.name }}さん
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/gacha-play">回す</router-link> |
      <router-link to="/gacha-result">結果</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { mapState, mapActions } from 'vuex'
// model
import User from '@/models/User';
import Stone from '@/models/Stone';
// service
import * as userService from '@/services/userService'

export default Vue.extend({
  async mounted() {
    this.loadUser("めたる");
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'addStone',
      'subStone',
      'loadUser'
    ]),
  },
});
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
