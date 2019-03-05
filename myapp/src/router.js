import Vue from "vue";
import Router from "vue-router";

// const Home = () => import("./views/Home.vue");//懒加载

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        title: "首页"
      },
      component: () => import("@/components/Layout"),
      children: [
        {
          path: "",
          name: "home",
          meta: {
            title: "首页"
          },
          component: () => import("@/views/Home")
        },
        {
          path: "/home",
          name: "test",
          meta: {
            title: "测试"
          },
          component: () => import("@/views/Home")
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登录"
      },
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //此处为路由懒加载
      component: () =>
        import(/* webpackChunkName: "login" */ "@/views/Login.vue")
    }
  ]
});
