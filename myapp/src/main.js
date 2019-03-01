import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
Vue.use(iView);
import MetaInfo from "vue-meta-info";
Vue.use(MetaInfo);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
