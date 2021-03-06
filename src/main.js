import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import "./plugins/maz-ui";

new Vue({
  render: h => h(App)
}).$mount("#app");
