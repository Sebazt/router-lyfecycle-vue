import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: import(/*WebpackChunkName:"ListPage"*/  '../modules/pokemon/pages/ListPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/*WebpackChunkName:"AboutPage"*/  '../modules/pokemon/pages/AboutPage')
  },
  {
    path: '/pokemonid/:id',
    name: 'pokemon-id',
    component: import(/*WebpackChunkName:"PokemonPage"*/  '../modules/pokemon/pages/PokemonPage.vue'),
    props: (route) => {
      console.log(route);
      const id = Number(route.params.id);

      return isNaN(id) ? { id: 1 } : { id }
      // sino es numero le mando 1, si es numero le mando el id
    }
  },
  //DBZ layout
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [isAuthenticatedGuard],
    component: () => import(/*WebpackChunkName:"DragonBallLayout"*/ '@/modules/dbz/layouts/DragonBallLayout.vue'),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import(/*WebpackChunkName:"DragonBallLayout"*/ '@/modules/dbz/pages/CharactersDbz')
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import(/*WebpackChunkName:"DragonBallLayout"*/ '@/modules/dbz/pages/AboutDbz')
      },
      {
        path: '',
        redirect: {
          name: 'dbz-characters'
        }
      }
    ]
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

//Guard global -síncrono
// first form
/* router.beforeEach((to, from, next) =>{
  console.log({to, from, next});

  const random = Math.random()*100;
  console.log(random);
  if(random > 50){
    console.log(random);
    console.log("Autenticado");
    next() //deja pasar a la persona a la pantalla que quiere
  }else{
    console.log("Bloqueado por el beforeEach Guard");
    next({name:'pokemon-home'})
  }
}) */

// second form
const canAcces = () => {
  return new Promise(resolve => {
    const random = Math.random() * 100;
    console.log(random);
    if (random > 50) {
      console.log(random);
      console.log("Autenticado  -  can acces");
      resolve(true) //deja pasar a la persona a la pantalla que quiere
    } else {
      console.log("Bloqueado por el beforeEach Guard - can't acces");
      resolve(false)
    }
  })
}

router.beforeEach(async (to, from, next) => {
  const authorized = await canAcces()

  authorized ?
    next()
    : next({ name: 'pokemon-home' })
})

export default router