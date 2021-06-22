import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import LayoutHeader from '@/components/layouts/Header'
import TopHeader from '@/components/layouts/TopHeader'
import SidebarAdmin from '@/components/layouts/SidebarAdmin'
import LayoutFooter from '@/components/layouts/Footer'
import Sidebar1 from '@/components/layouts/patient/SideBar'
import HomeBanner from '@/components/HomeBanner'
import NewsLetter from '@/components/NewsLetter'
import Loader from '@/components/Loader'
import SearchBar from '@/components/dentist/SearchBar'
import AdminIndex from '@/components/admin/Index'
import Datepicker from 'vuejs-datepicker';
import SearchFilter from '@/components/patient/SearchFilter'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import moment from 'moment'
import {Schedule} from './schedule'
/** Breadcrumbs **/

let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'

 if(window.location.pathname.includes("admin")) {
}else {
  require('./assets/css/style.css');
}


import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import Slick from 'vue-slick'
import '../node_modules/slick-carousel/slick/slick.css'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
Vue.config.productionTip = false

/*Global Components */
Vue.component('layout-header', LayoutHeader);
Vue.component('top-header', TopHeader);
Vue.component('sidebar-admin', SidebarAdmin);
Vue.component('sidebar1', Sidebar1);
Vue.component('layout-footer', LayoutFooter);
Vue.component('home-banner', HomeBanner);
Vue.component('news-letter', NewsLetter);
Vue.component('slick', Slick);
Vue.component('search-filter', SearchFilter);
Vue.component('search-bar', SearchBar);
Vue.component('loader', Loader);
Vue.component('datepicker', Datepicker);
Vue.component('vue-timepicker',VueTimepicker);
Vue.use(Schedule.default);
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});

Vue.filter('formatDateBeauty', function(value) {
  if (value) {
    return moment(String(value)).format('DD, MMM yyyy')
  }
});

new Vue({
  el: '#app',
  router,
  store,
  components: { App,BarChart,Datepicker,VueTimepicker,
    LineChart, },
  template: '<App/>'
})

