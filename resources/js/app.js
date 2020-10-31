import Vue from 'vue';
import routes from './router/index';
import { HasError, AlertError } from 'vform';

import CxltToastr from 'cxlt-vue2-toastr';
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
require('./bootstrap');

var toastrConfigs = {
    position: 'top right',
    showDuration: 1000,
    timeOut:5000,
    closeButton:true,
    showMethod:'fadeIn',
    hideMethod:'fadeOut',
}
Vue.use(CxltToastr, toastrConfigs)

// window.Vue = require('vue');
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.component('app-header', require('./components/Header.vue').default);
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

const app = new Vue({
    el: '#app',
    router: routes,
});
