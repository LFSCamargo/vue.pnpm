import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "vue-connect-wallet/dist/style.css";
import "./style.css";

createApp(App).use(router).mount("#app");
