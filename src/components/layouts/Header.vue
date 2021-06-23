<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg header-nav">
      <div class="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);">
            <span class="bar-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </a>
        <router-link to="/" class="navbar-brand logo">
            <img src="@/assets/img/logo.png" class="img-fluid" alt="Logo">
        </router-link>
      </div>
        <div class="main-menu-wrapper">
            <div class="menu-header">
                <router-link to="/" class="menu-logo">
                    <img src="@/assets/img/logo.png" class="img-fluid" alt="Logo">
                </router-link>
                <a id="menu_close" class="menu-close" href="javascript:void(0);">
                    <i class="fas fa-times"></i>
                </a>
            </div>
              <ul class="main-nav" v-if="getType=='nimic'">

                <li class="login-link" v-if="isLoggedIn"  >
                  <router-link class="nav-link header-login" :to = "{ name:'logout' }">Logout </router-link>
                </li>
                <li class="login-link" v-else >
                  <router-link class="nav-link header-login" to='/'>login / Signup </router-link>
                </li>
              </ul>
            <ul v-else-if="getType=='dentist'" class="main-nav" >
                <li>
                    <router-link :to="{ name: 'schedule', params: {id: this.$route.params.id } }">Schedule </router-link>
                </li>
                <li class="has-submenu" >
                    <router-link :to="{ name: 'dentistIndex', params: {id: this.$route.params.id } }">Appointments </router-link>
                </li>
                <li class="has-submenu" >
                    <router-link :to="{ name: 'profileDentist', params: {id: this.$route.params.id } }">Profile </router-link>
                </li>
                <li class="has-submenu" >
                  <router-link :to="{ name:'myPatients', params: {id: this.$route.params.id}}">My patients </router-link>
                </li>
                <li class="login-link" v-if="isLoggedIn"  >
                  <router-link class="nav-link header-login" :to = "{ name:'logout' }">Logout </router-link>
                </li>
                <li class="login-link" v-else >
                  <router-link class="nav-link header-login" to='/'>login / Signup </router-link>
                </li>
            </ul>

            <ul v-else-if="getType=='admin'" class="main-nav">
                <li class="has-submenu" >
                    <router-link :to="{ name: 'adminIndex', params: {id: this.$route.params.id } }">Dashboard </router-link>
                </li>
                <li class="has-submenu" >
                    <router-link :to="{ name: 'profileClinic', params: {id: this.$route.params.id } }">Clinic profile </router-link>
                </li>
                <li class="login-link">
                    <router-link to="/login">Logout</router-link>
                </li>
                <li class="login-link" v-if="isLoggedIn"  >
                  <router-link class="nav-link header-login" :to = "{ name:'logout' }">Logout </router-link>
                </li>
                <li class="login-link" v-else >
                  <router-link class="nav-link header-login" to='/'>login / Signup </router-link>
                </li>
            </ul>
            <ul v-else-if="getType=='patient'" class="main-nav">
              <li class="has-submenu" >
                    <router-link to="/patient/search_dentist">Search dentist </router-link>
                </li>
                <li class="has-submenu" >
                    <router-link :to="{ name: 'profile', params: {id: this.$route.params.id } }">Profile </router-link>
                </li>
                <li class="login-link" v-if="isLoggedIn"  >
                  <router-link class="nav-link header-login" :to = "{ name:'logout' }">Logout </router-link>
                </li>
                <li class="login-link" v-else >
                  <router-link class="nav-link header-login" to='/'>login / Signup </router-link>
                </li>

            </ul>
        </div>

        <ul class="nav header-navbar-rht">
            <li v-if="isLoggedIn" class="nav-item" >
              <router-link class="nav-link header-login" :to = "{ name:'logout' }">Logout </router-link>
            </li>
            <li v-else class="nav-item">
                <router-link class="nav-link header-login" to='/'>login / Signup </router-link>
            </li>
        </ul>

    </nav>
  </header>
</template>

<script>
import DentistDataService from "../../services/DentistDataService";
export default {
  data() {
		return {
      currentDentist:'',
      currentPatient:'',
      id:null,
      idP:null,
      patients:[],
      apps:[],
      all:null,
      state:null
		}
	},
  created(){
    //this.getDentist(this.$route.params.id)
   // console.log(this.currentDentist)

  },
	 methods: {
    getDentist(id) {
      DentistDataService.getDentist(id)
        .then(response => {
          this.currentDentist = response.data;
          this.id = this.currentDentist.pk;
        })
        .catch(e => {
        });
    },
    getPatient(id) {
      DentistDataService.getPatient(id)
        .then(response => {
          this.currentPatient = response.data;
          this.idP = this.currentPatient.pk;
        })
        .catch(e => {
        });
    },

    logout(){
      this.$store.dispatch('userLogout');
      this.$route.replace('');
    },
   },
   mounted(){
       var $wrapper = $('.main-wrapper');
       $('.main-nav a').on('click', function(e) {
            if($(this).parent().hasClass('has-submenu')) {
                e.preventDefault();
            }
            if(!$(this).hasClass('submenu')) {
                $('ul', $(this).parents('ul:first')).slideUp(350);
                $('a', $(this).parents('ul:first')).removeClass('submenu');
                $(this).next('ul').slideDown(350);
                $(this).addClass('submenu');
            } else if($(this).hasClass('submenu')) {
                $(this).removeClass('submenu');
                $(this).next('ul').slideUp(350);
            }
        });
       $('body').append('<div class="sidebar-overlay"></div>');
       $(document).on('click', '#mobile_btn', function() {
           $wrapper.toggleClass('slide-nav');
           $('.sidebar-overlay').toggleClass('opened');
           $('html').addClass('menu-opened');
           $('#task_window').removeClass('opened');
           return false;
       });

    $(document).on('click', '#menu_close', function() {
        $('html').removeClass('menu-opened');
        $('.sidebar-overlay').removeClass('opened');
        $('main-wrapper').removeClass('slide-nav');
    });
    $('.main-nav ul li:not(.submenu) a').click(function(){
            $("html").removeClass('menu-opened');
            $(".sidebar-overlay").removeClass('opened');
        });

   },
   computed: {

       getType(){
         return localStorage.getItem('userType')
       },
       isLoggedIn(){
           return this.$store.getters.loggedIn;
       },
       getUser(){
         return this.$store.getters.getUser;
       },
       getUserType(){
         return this.$store.getters.getUserType;
       },
       currentPath() {
           return this.$route.name
       },
       homeMenu() {
           return this.$route.name == 'index';
       },
   },

}
</script>
