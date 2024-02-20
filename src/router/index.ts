import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    // 异步加载，打包时代码分割，性能优化
    component: () => import("../views/home/index.vue"),
    children: [
      {
        path: "/",
        name: "Introduction",
        // 异步加载，打包时代码分割，性能优化
        component: () => import("../views/introduction/index.vue"),
        meta: { title: "首页" },
      },
      {
        path: "/article",
        name: "Article",
        // 异步加载，打包时代码分割，性能优化
        component: () => import("../views/article/index.vue"),
        meta: { title: "文章" },
      },
      {
        path: "/project",
        name: "Project",
        // 异步加载，打包时代码分割，性能优化
        component: () => import("../views/project/index.vue"),
        meta: { title: "项目" },
      },
      {
        path: "/leave",
        name: "Leave",
        // 异步加载，打包时代码分割，性能优化
        component: () => import("../views/leave/index.vue"),
        meta: { title: "留言" },
      },
      {
        path: "/about",
        name: "About",
        // 异步加载，打包时代码分割，性能优化
        component: () => import("../views/about/index.vue"),
        meta: { title: "关于" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(), // 路由模式：history模式
  routes,
});

export default router;
