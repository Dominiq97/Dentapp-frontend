import Vue from 'vue'
import Router from 'vue-router'

/** For Home Pages **/
import Index from '@/components/Index'


/** For Doctor **/
import DoctorDashboard from '@/components/doctor/Index'
import Appointments from '@/components/doctor/Appointments'
import MyPatients from '@/components/doctor/MyPatients'
import ScheduleTimings from '@/components/doctor/ScheduleTimings'
import Invoices from '@/components/doctor/Invoices'
import Reviews from '@/components/doctor/Reviews'
import Messages from '@/components/doctor/Messages'
import ProfileSettings from '@/components/doctor/ProfileSettings'
import PatientProfile from '@/components/doctor/PatientProfile'
import SocialMedia from '@/components/doctor/SocialMedia'
import ChangePassword from '@/components/ChangePassword'
import DoctorRegister from '@/components/doctor/Register'
import DoctorProfile from '@/components/doctor/Profile'
import BlogDetails from '@/components/doctor/BlogDetails'
import BlogList from '@/components/doctor/BlogList'
import BlogGrid from '@/components/doctor/BlogGrid'
import MapGrid from '@/components/doctor/MapGrid'
import MapList from '@/components/doctor/MapList'
import AddPrescription from '@/components/doctor/AddPrescription'
import EditPrescription from '@/components/doctor/EditPrescription'
import AddBilling from '@/components/doctor/AddBilling'
import EditBilling from '@/components/doctor/EditBilling'


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
import Admin from '@/components/admin/index.vue'
import Appointmentlist from '@/components/admin/appointmentlist.vue'
import Specialities from '@/components/admin/specialities.vue'
import Doctorlist from '@/components/admin/doctorlist.vue'
import Patientlist from '@/components/admin/patientlist.vue'
import Reviewslist from '@/components/admin/reviews.vue'
import Transaction from '@/components/admin/transactionslist.vue'
import Settingslist from '@/components/admin/settings.vue'
import Invoicereportlist from '@/components/admin/invoicereport.vue'
import Profilelist from '@/components/admin/profile.vue'
import loginlist from '@/components/admin/login.vue'
import registerlist from '@/components/admin/register.vue'
import Forgotlist from '@/components/admin/forgotpassword.vue'
import Locklist from '@/components/admin/lockscreen.vue'
import Error from '@/components/admin/error404.vue'
import Errorlist from '@/components/admin/error500.vue'
import blank from '@/components/admin/blankpage.vue'
import Componentslist from '@/components/admin/components.vue'
import formlist from '@/components/admin/formbasicinputs.vue'
import forminput from '@/components/admin/forminputgroups.vue'
import formhorizontalist from '@/components/admin/formhorizontal.vue'
import formverticallist from '@/components/admin/formvertical.vue'
import formmasklist from '@/components/admin/formmask.vue'
import formvalidationlist from '@/components/admin/formvalidation.vue'
import tablesbasiclist from '@/components/admin/tablesbasic.vue'
import datatableslist from '@/components/admin/datatables.vue'
import invoicelist from '@/components/admin/invoice.vue'

import VoiceCall from '@/components/VoiceCall'
import VideoCall from '@/components/VideoCall'
import Calender from '@/components/Calender'
import Components from '@/components/Components'
import InvoiceView from '@/components/InvoiceView'
import Blank from '@/components/Blank'
import Login from '@/components/Login'
import PatientRegister from '@/components/patient/Register'
import ForgotPassword from '@/components/ForgotPassword'
import TermCondition from '@/components/TermCondition'
import PrivacyPolicy from '@/components/PrivacyPolicy'


Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: 'template-dental',
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: Index
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/doctor/index',
      name: 'doctor-index',
      component: DoctorDashboard
    },
    {
      path: '/doctor/appointments',
      name: 'doctor-appointments',
      component: Appointments
    },
    {
      path: '/doctor/patients',
      name: 'my-patients',
      component: MyPatients
    },
    {
      path: '/doctor/patient-profile',
      name: 'patient-profile',
      component: PatientProfile
    },
    {
      path: '/doctor/schedule-timings',
      name: 'schedule-timings',
      component: ScheduleTimings
    },
    {
      path: '/doctor/invoices',
      name: 'invoices',
      component: Invoices
    },
    {
      path: '/doctor/reviews',
      name: 'doctor-reviews',
      component: Reviews
    },
    {
      path: '/doctor/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/doctor/profile-settings',
      name: 'profile-settings',
      component: ProfileSettings
    },
    {
      path: '/doctor/social-media',
      name: 'social-media',
      component: SocialMedia
    },
    {
      path: '/doctor/change-password',
      name: 'change-password',
      component: ChangePassword
    },
    {
      path: '/doctor/register',
      name: 'doctor-register',
      component: DoctorRegister
    },
    {
      path: '/doctor/profile',
      name: 'doctor-profile',
      component: DoctorProfile
    },
    {
      path: '/doctor/map-grid',
      name: 'doctor-mapgrid',
      component: MapGrid
    },
    {
      path: '/doctor/map-list',
      name: 'doctor-maplist',
      component: MapList
    },
    {
      path: '/doctor/add-prescription',
      name: 'add-prescription',
      component: AddPrescription
    },
    {
      path: '/doctor/edit-prescription',
      name: 'edit-prescription',
      component: EditPrescription
    },
    {
      path: '/doctor/add-billing',
      name: 'add-billing',
      component: AddBilling
    },
    {
      path: '/doctor/edit-billing',
      name: 'edit-billing',
      component: EditBilling
    },
    {
      path: '/doctor/search',
      name: 'search-doctor',
      component: SearchDoctor
    },
    {
      path: '/doctor/blog-details',
      name: 'blog-details',
      component: BlogDetails
    },
    {
      path: '/doctor/blog-list',
      name: 'blog-list',
      component: BlogList
    },
    {
      path: '/doctor/blog-grid',
      name: 'blog-grid',
      component: BlogGrid
    },
    {
      path: '/patient/index',
      name: 'patient-dashboard',
      component: PatientDashboard
    },
    {
      path: '/patient/booking',
      name: 'booking',
      component: Booking
    },
    {
      path: '/patient/booking-success',
      name: 'booking-success',
      component: BookingSuccess
    },
    {
      path: '/patient/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/patient/favourites',
      name: 'favourites',
      component: Favourites
    },
    {
      path: '/patient/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/patient/profile',
      name: 'patient-profile-settings',
      component: PatientProfileSettings
    },
    {
      path: '/patient/appointment-detail',
      name: 'appointment-detail',
      component: AppointmentDetail
    },
    {
      path: '/patient/change-password',
      name: 'patient-change-password',
      component: ChangePassword
    },
    {
      path: '/admin/index',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/appointmentlist',
      name: 'appointmentlist',
      component: Appointmentlist
    },
    {
      path: '/admin/specialities',
      name: 'specialities',
      component: Specialities
    },
    {
      path: '/admin/doctorlist',
      name: 'doctorlist',
      component: Doctorlist
    },
    {
      path: '/admin/patientlist',
      name: 'patientlist',
      component: Patientlist
    },
    {
      path: '/admin/reviews',
      name: 'reviews',
      component: Reviewslist
    },
    {
      path: '/admin/transactionslist',
      name: 'transactionslist',
      component: Transaction
    },
    {
      path: '/admin/settings',
      name: 'settings',
      component: Settingslist
    },
    {
      path: '/admin/invoicereport',
      name: 'invoicereport',
      component: Invoicereportlist
    },
    {
      path: '/admin/profile',
      name: 'profile',
      component: Profilelist
    },
    {
      path: '/admin/login',
      name: 'login',
      component: loginlist
    },
    {
      path: '/admin/register',
      name: 'register',
      component: registerlist
    },
    {
      path: '/admin/forgotpassword',
      name: 'forgotpassword',
      component: Forgotlist
    },
    {
      path: '/admin/lockscreen',
      name: 'lockscreen',
      component: Locklist
    },
    {
      path: '/admin/error404',
      name: 'error404',
      component: Error
    },
    {
      path: '/admin/error500',
      name: 'error500',
      component: Errorlist
    },
    {
      path: '/admin/blankpage',
      name: 'blankpage',
      component: blank
    },
    {
      path: '/admin/components',
      name: 'components',
      component: Componentslist
    },
    {
      path: '/admin/formbasicinputs',
      name: 'formbasicinputs',
      component: formlist
    },
    {
      path: '/admin/forminputgroups',
      name: 'forminputgroups',
      component: forminput
    },
    {
      path: '/admin/formhorizontal',
      name: 'formhorizontal',
      component: formhorizontalist
    },
    {
      path: '/admin/formvertical',
      name: 'formvertical',
      component: formverticallist
    },
    {
      path: '/admin/formmask',
      name: 'formmask',
      component: formmasklist
    },
    {
      path: '/admin/formvalidation',
      name: 'formvalidation',
      component: formvalidationlist
    },
    {
      path: '/admin/tablesbasic',
      name: 'tablesbasic',
      component: tablesbasiclist
    },
    {
      path: '/admin/datatables',
      name: 'datatables',
      component: datatableslist
    },
    {
      path: '/admin/invoice',
      name: 'invoice',
      component: invoicelist
    },
    {
      path: '/voice-call',
      name: 'voice-call',
      component: VoiceCall
    },
    {
      path: '/video-call',
      name: 'video-call',
      component: VideoCall
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: Calender
    },
    {
      path: '/components',
      name: 'componentss',
      component: Components
    },
    {
      path: '/invoice-view',
      name: 'invoice-view',
      component: InvoiceView
    },
    {
      path: '/blank',
      name: 'blank',
      component: Blank
    },
    {
      path: '/login',
      name: 'logins',
      component: Login
    },
    {
      path: '/patient/register',
      name: 'patient-register',
      component: PatientRegister
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/term-condition',
      name: 'term-condition',
      component: TermCondition
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy
    },
  ],
  linkActiveClass: "active",
})
export default router
