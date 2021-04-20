import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EqList from "../views/EqList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/eqList",
    name: "EqList",
    component: EqList,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
