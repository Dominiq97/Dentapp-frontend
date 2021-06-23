import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index.vue'
import DoctorDashboard from '@/components/dentist/Index'
import addBooking from '@/components/patient/Booking'
import BookingSuccess from '@/components/patient/BookingSuccess'
import SearchDentist from '@/components/patient/SearchDentist'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Register from '@/components/Register'
import DentistRegister from '@/components/dentist/Register'
import AdminRegister from '@/components/admin/Register'
import AdminIndex from '@/components/admin/Index'
import DentistIndex from '@/components/dentist/Index'
import Schedule from '@/components/dentist/Schedule'
import Profile from '@/components/Profile'
import store from '../store'


Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/patient/index',
      name: 'index',
      component: Index,

    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      },
      {
        path: '/patient/register',
        name: 'patientRegister',
        component: Register,
      }
      ,{
        path: '/dentist/register',
        name: 'dentistRegister',
        component: DentistRegister,
      },
      {
        path: '/admin/register',
        name: 'adminRegister',
        component: AdminRegister,
      },
      {
        path: '/admin/:id/index',
        name: 'adminIndex',
        component: AdminIndex,
      },
      {
        path: '/dentist/:id/index',
        name: 'dentistIndex',
        component: DentistIndex,
      },
      {
        path: '/patient/search_dentist',
        name: 'searchDentist',
        component: SearchDentist,
      },
      {
        path: '/patient/booking/:id',
        name: 'addBooking',
        component: addBooking,
      },
      {
        path: '/patient/booking_success',
        name: 'booking_success',
        component: BookingSuccess,
      },
      {
        path: '/dentist/:id/schedule',
        name: 'schedule',
        component: Schedule,
      },
      {
        path: '/profile/:id',
        name: 'profile',
        component: Profile,
      },


  ],
  linkActiveClass: "active",
})


export default router
