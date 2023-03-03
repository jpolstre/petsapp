import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/HomeCmp.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/CatsCmp.vue')
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DogsCmp.vue')
  },
  // {
  //   path: '/pets',
  //   name: 'Pets',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ './views/Pets.vue')
  // },
  {
    // option is edit o create
    path: '/:type/:option/:id?',
    name: 'Pet',
    component: () => import(/* webpackChunkName: "about" */ '../views/PetCmp.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
