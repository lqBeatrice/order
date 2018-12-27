import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Order from '@/components/pageComponent/Order'
import User from '@/components/pageComponent/User'
import Shop from '@/components/pageComponent/Shop'
import Pay from '@/components/pageComponent/Pay'
import Comment from '@/components/pageComponent/Comment'
import Menu from '@/components/pageComponent/Menu'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      
    },
    {
      path:'/login',
      component:Login,
      meta: {
        title: '登录入口'
      },
    },
    {
      path: '/home',
      component:Home,
      meta: {
        title: '首页入口'
      },
      children:[
        {
          path:'user',
          component:User,
          meta: {
            title: '用户管理'
          },
        },
        {
          path:'order',
          component:Order,
          meta: {
            title: '订单管理'
          },
        },
        {
          path:'pay',
          component:Pay,
          meta: {
            title: '支付管理'
          },
        },
        {
          path:'shop',
          component:Shop,
          meta: {
            title: '商户管理'
          },
        },
        {
          path:'comment',
          component:Comment,
          meta: {
            title: '评价管理'
          },
        },
        {
          path:'menu',
          component:Menu,
          meta: {
            title: '菜品管理'
          },
        },
      ],
      redirect:'/home/order'
    }
  ]
});

router.beforeEach((to,form,next) =>{
    /*路由变化修改title*/
    if(to.meta.title){
        document.title=to.meta.title
    }
    next();
});

export default router;