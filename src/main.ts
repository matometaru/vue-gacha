import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from 'vue-notification'

Vue.config.productionTip = false;

Vue.use(Notifications)

Vue.config.errorHandler = (err, vm, info) => {
  Vue.notify({
    group: 'errorHandler',
    type: 'warn',
    text: err.message
  })
};
window.addEventListener("error", event => {
  console.log("Captured in error EventListener", event.error);
});
window.addEventListener("unhandledrejection", event => {
  console.log("Captured in unhandledrejection EventListener", event.reason);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
