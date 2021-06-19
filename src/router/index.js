import Vue from 'vue'
import Router from 'vue-router'

/** For Home Pages **/
import Index from '@/components/Index'


/** For Doctor **/
import DoctorDashboard from '@/components/dentist/Index'


/** For Patient **/
import PatientDashboard from '@/components/patient/Index'
import addBooking from '@/components/patient/Booking'
import BookingSuccess from '@/components/patient/BookingSuccess'
import SearchDentist from '@/components/patient/SearchDentist'
import Checkout from '@/components/patient/Checkout'
import Favourites from '@/components/patient/Favourites'
import Chat from '@/components/patient/Chat'
import PatientProfileSettings from '@/components/patient/Profile'
import AppointmentDetail from '@/components/patient/AppointmentDetail'



/** For Admin**/

import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Register from '@/components/Register'
import DentistRegister from '@/components/dentist/Register'
import AdminRegister from '@/components/admin/register'
import AdminIndex from '@/components/admin/index'
import DentistIndex from '@/components/dentist/Index'
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
      path: '/login',
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
        path: '/admin/index',
        name: 'adminIndex',
        component: AdminIndex,
      },
      {
        path: '/dentist/index',
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

  ],
  linkActiveClass: "active",
})


export default router
