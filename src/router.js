
import Vue from "vue";
import VueRouter from "vue-router";
import Home from './views/Home.vue'
import Search from './views/Search.vue'


Vue.use(VueRouter);

const router = new VueRouter({
 routes: [
     {
         path : '/',  //主页地址
         name : 'Home',
         component :  Home   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
     },
     {
        path : '/search-page/:keyword',  //主页地址
        name : 'Search',
        component :  Search   // Home是组件的名字，这个路由对应跳转到的组件。。注意component没有加“s”.
    }
    ],
	// mode: "history"
});



export default router;