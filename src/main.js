import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from './plugins/axios'
// import moment from './plugins/moment'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
    router,
    axios,
    // moment,
    vuetify,
    render: h => h(App),
}).$mount('#app')
