import Vue from 'vue'
import Router from 'vue-router'

/** For Home Pages **/
import Index from '@/components/Index'


/** For Doctor **/
import DoctorDashboard from '@/components/doctor/Index'
import ChangePassword from '@/components/ChangePassword'


/** For Patient **/
import PatientDashboard from '@/components/patient/Index'
import Booking from '@/components/patient/Booking'
import BookingSuccess from '@/components/patient/BookingSuccess'
import SearchDoctor from '@/components/patient/SearchDoctor'
import Checkout from '@/components/patient/Checkout'
import Favourites from '@/components/patient/Favourites'
import Chat from '@/components/patient/Chat'
import PatientProfileSettings from '@/components/patient/Profile'
import AppointmentDetail from '@/components/patient/AppointmentDetail'



/** For Admin**/
import ForgotPassword from '@/components/ForgotPassword'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Register from '@/components/Register'


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
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      },
      {
        path: '/register',
        name: 'register',
        component: Register,
      }

  ],
  linkActiveClass: "active",
})
export default router
