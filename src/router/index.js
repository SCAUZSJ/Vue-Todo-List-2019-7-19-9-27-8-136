import Vue from 'vue'
import Router from 'vue-router'
import ToDoList from '@/components/todolist/ToDoList'
import Welcome from '@/components/home/Welcome'
import Home from '@/components/home/Home'
import Info from '@/components/user/Info'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/welcome',
      name:'Welcome',
      component:Welcome
    },
    {
      path:'/home/:name',
      name:'Home',
      props:true,
      component:Home,
      children:[
        {
          path: 'todolist',
          name: 'ToDoList',
          component: ToDoList
        },
        {
          path:'info',
          name:'Info',
          props:true,
          component:Info
        }
      ]
    }
  ]
})
