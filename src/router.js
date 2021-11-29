import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("./views/login/Login.vue"),
  },
  {
    path: "/",
    alias: "/main",
    name: "main",
    component: () => import("./views/main/Main.vue"),
    children:[{
        path: "/",
        alias: "/home",
        name: "home",
        component: () => import("./views/home/Home.vue"),
      },{
        path: "/personal",
        alias: "/personal",
        name: "personal",
        component: () => import("./views/user/Personal.vue"),
      },{
        path: "/question_manage",
        alias: "/question_manage",
        name: "question_manage",
        component: () => import("./views/teacher/question/Index.vue"),
      },{
        path: "/exercise_manage",
        alias: "/exercise_manage",
        name: "exercise_manage",
        component: () => import("./views/teacher/exercise/Index.vue"),
      },{
        path: "/course_manage",
        alias: "/course_manage",
        name: "course_manage",
        component: () => import("./views/admin/course/Index.vue"),
      },{
        path: "/user_manage",
        alias: "/user_manage",
        name: "user_manage",
        component: () => import("./views/admin/user/index.vue"),
      },{        
        path: "/exercise_report",
        alias: "/exercise_report",
        name: "exercise_report",
        component: () => import("./views/admin/exercise/index.vue"),
      },{
        path: "/exercise",
        alias: "/exercise",
        name: "exercise",
        component: () => import("./views/student/exercise/index.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router