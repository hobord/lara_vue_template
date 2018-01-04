
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./vendor');

// Filters
Vue.filter('formatDate', function(value, format){
    if (value) {
        return moment(String(value)).format(format)
    }
});

// Shared Data store
// Vue.use(Vuex);
import { store } from './store/index'

//Event Bus
import { EventBus } from './eventBus'
window.EventBus = EventBus;

// Router
import  VueRouter from 'vue-router'
import { routes } from './routers'
let router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});
Vue.use(VueRouter);


// GUI
Vue.use(Vuetify);


// App
import App from './components/AdminMain.vue'

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
