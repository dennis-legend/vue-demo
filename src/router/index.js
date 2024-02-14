import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

//引入一级路由
import Index from '@/components/pages/index'
//引入二级路由（'/Index'是一级路由）
import Home from '@/components/views/home'
import Cart from '@/components/views/cart'
import Mine from '@/components/views/mine'
import Sort from '@/components/views/sort'

// 引入一级路由
import MovieList from '@/components/pages/movieList'
import MovieDetail from '@/components/pages/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: 'home',
          component: Home
        },
        {
          path: 'sort',
          component: Sort
        },
        {
          path: 'cart',
          component: Cart
        },
        {
          path: 'mine',
          component: Mine
        },
        {
          // 默认二级路由
          path: '',
          component: Home
        }
      ]
    },
    {
      path: '/movieList',
      component: MovieList
    },
    {
      path: '/movieDetail',
      component: MovieDetail
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})
