import Vue from "vue";
import Router from "vue-router";
import GachaCenter from "./pages/GachaCenter.vue";
import GachaPlay from "./pages/GachaPlay.vue";
import GachaResult from "./pages/GachaResult.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "gacha-center",
      component: GachaCenter
    },
    {
      path: "/gacha-play/:gachaId",
      name: "gacha-play",
      component: GachaPlay
    },
    {
      path: "/gacha-result/:itemsString",
      name: "gacha-result",
      component: GachaResult,
      props: true
    },
  ]
});
