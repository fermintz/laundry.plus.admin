import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EqList from "../views/eqList.vue";
import EqUseList from "../views/eqUseList.vue";
import Member from "../views/member.vue";
import MonthSales from "../views/monthSales";
import Calendar from "../views/calendar";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
  },
  {
    path: "/monthSales",
    name: "MonthSales",
    component: MonthSales,
  },
  {
    path: "/eqList",
    name: "EqList",
    component: EqList,
  },
  {
    path: "/eqUseList",
    name: "EqUseList",
    component: EqUseList,
  },
  {
    path: "/eqUseList",
    name: "EqUseList",
    component: EqUseList,
  },
  {
    path: "/member",
    name: "Member",
    component: Member,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
