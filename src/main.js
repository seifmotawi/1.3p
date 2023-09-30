import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/HomePage.vue";
import Contact from "./components/ContactPage.vue";
import Resume from "./components/ResumePage.vue";
import '@fortawesome/fontawesome-free/css/all.css'

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/contact", component: Contact },
  { path: "/resume", component: Resume },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

createApp(App).use(router).mount("#app");
