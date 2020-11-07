import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Tabs from '../views/Tabs.vue'
import Registro from '../views/Registro.vue'
import firebase from 'firebase'
import tab1 from '../views/Tab1.vue'
import tab2 from '../views/Tab2.vue'
// import tab3 from '../views/Tab3.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      requiresAuth: true
    }
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
    children:[
      {
        path: '/tabs/tab1',
        name:"tab1",
        component: tab1
      },
      {
        path: '/tabs/tab2',
        name:"tab2",
        component: tab2
      }
      // ,
      // {
        // path: '/tabs/tab3',
        // name:"tab3",
        // component: tab3
      // }
    ]
  },
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
