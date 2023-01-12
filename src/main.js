import { createApp } from "vue";
import App from "./App.vue";

import routes from "@/routes";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VuePaginate from "vue-pagination-2";
import store from "./store";

createApp(App)
  .use(routes)
  .use(VueSweetalert2)
  .use(store)
  .use(VuePaginate)
  .mount("#app");
