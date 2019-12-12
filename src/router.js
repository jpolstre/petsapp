import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
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
        import(/* webpackChunkName: "about" */ './views/Cats.vue')
    },
    {
      path: '/dogs',
      name: 'Dogs',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Dogs.vue')
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
      component: () => import(/* webpackChunkName: "about" */ './views/Pet.vue')
    }
  ]
})
