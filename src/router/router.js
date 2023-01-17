import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: import(/*WebpackChunkName:"ListPage"*/  '../modules/pokemon/pages/ListPage.vue')
  },
  {
    path: '/about',
    component: () => import(/*WebpackChunkName:"AboutPage"*/  '../modules/pokemon/pages/AboutPage')
  },
  {
    path: '/:id',
    name: 'pokemon-id',
    component: import(/*WebpackChunkName:"PokemonPage"*/  '../modules/pokemon/pages/PokemonPage.vue'),
    props: (route) => {
      console.log(route);
    }
  },

  {
    path: '/:pathMatch(.*)*',
    component: import(/*WebpackChunkName:"NotFoundPage"*/  '../modules/shared/pages/NoPageFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router