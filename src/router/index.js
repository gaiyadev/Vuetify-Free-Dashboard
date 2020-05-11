import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dashboard",
    // name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/dashboard/Index"),
    children: [
      {
        path: "/profile",
        name: "Profile",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/Profile"),
        meta: { transition: 'zoom' }

      },
      {
        path: "/tables",
        name: "Table",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/Tables"),
        meta: { transition: 'zoom' }

      },
      {
        path: "/user",
        name: "User",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/User"),
        meta: { transition: 'zoom' }

      },
      {
        path: "/change_password",
        name: "ChangePassword",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/ChangePassword"),
        meta: { transition: 'zoom' }

      },
      {
        path: "/chrome",
        name: "Chrome",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/Chrome"),
        meta: { transition: 'zoom' }

      },
      {
        path: "/webstorm",
        name: "Webstorm",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/Webstorm"),
        meta: { transition: 'zoom' }

      },
      {
        path: "/calender",
        name: "Calender",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/Calender"),
        meta: { transition: 'zoom' }

      },
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard/Profile")
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
