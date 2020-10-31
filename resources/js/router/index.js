import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/pages/Home.vue';
import CategoryList from '../components/pages/category/index.vue';
import CreateCategory from '../components/pages/category/create.vue';
import EditCategory from '../components/pages/category/edit.vue';
Vue.use(VueRouter);

const routes = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:Home,
            name:'home',
        },

        {
            path:'/category',
            component:CategoryList,
            name:'category-list',
        },

        {
            path:'/category-create',
            component:CreateCategory,
            name:'category-create',
        },

        {
            path:'/category-edit/:id',
            component:EditCategory,
            name:'category-edit',
        },

       


    ]

});

export default routes;
