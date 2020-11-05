import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Tabs from '../views/Tabs.vue'
import Registro from '../views/Registro.vue'
import firebase from 'firebase'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/tabs/',
    name:"Tabs",
    component: Tabs,
    meta:{
      requiresAuth: true
    },
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next )=>{
  if (to.matched.some(ruta=> ruta.meta.requiresAuth)) {
    const user= firebase.auth().currentUser;
    if (user) {
      next();
    } else{
      next({
        name: 'Login'
      }
      )
    }
  }else{
    next();
  }
})
export default router
