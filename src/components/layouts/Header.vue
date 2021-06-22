<template>
        <!-- Header -->
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
                   <router-link to="/index" class="navbar-brand logo">
                       <img src="@/assets/img/logo.png" class="img-fluid" alt="Logo">
                   </router-link>
               </div>
               <div class="main-menu-wrapper">
                   <div class="menu-header">
                       <router-link to="/index" class="menu-logo">
                           <img src="@/assets/img/logo.png" class="img-fluid" alt="Logo">
                       </router-link>
                       <a id="menu_close" class="menu-close" href="javascript:void(0);">
                           <i class="fas fa-times"></i>
                       </a>
                   </div>
                   <ul v-if="getType=='nimic'" class="main-nav">
                    </ul>
                  <ul v-else-if="getType=='dentist'" class="main-nav">
                       <li class="has-submenu" >
                           <router-link :to="{ name: 'schedule', params: {id: currentDentist.pk } }">Schedule </router-link>
                       </li>
                       <li class="has-submenu" >
                           <router-link :to="{ name: 'dentistIndex', params: {id: currentDentist.pk } }">Appointments </router-link>
                       </li>
                       <li class="has-submenu" >
                           <router-link to="/index">Messages </router-link>
                       </li>
                       <li class="has-submenu" >
                          <router-link to="/index">My patients </router-link>
                       </li>
                   </ul>
                    <ul v-else-if="getType=='admin'" class="main-nav">
                       <li class="has-submenu" >
                           <router-link to="/admin/index">Dashboard </router-link>
                       </li>
                       <li class="has-submenu" >
                           <router-link to="/index">Clinic profile </router-link>
                       </li>

                       <li class="login-link">
                           <router-link to="/login">Logout</router-link>
                       </li>
                   </ul>
                   <ul v-else-if="getType=='patient'" class="main-nav">
                     <li class="has-submenu" >
                           <router-link to="/patient/search_dentist">Search dentist </router-link>
                       </li>
                       <li class="has-submenu" >
                           <router-link to="/index">My Appointments </router-link>
                       </li>
                       <li class="has-submenu" >
                           <router-link to="/index">Profile </router-link>
                       </li>
                       <li class="has-submenu" >
                           <router-link to="/index">Messages </router-link>
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
       <!-- /Header -->
</template>

<script>
import DentistDataService from "../../services/DentistDataService";
export default {
  data() {
		return {
      currentDentist:'',
      id:null,
      patients:[],
      apps:[],
      all:null,
      state:null
		}
	},
  created(){
    this.getDentist(localStorage.getItem('loggedId'))
    console.log(this.currentDentist)
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
    logout(){
      this.$store.dispatch('userLogout');
      this.$router.replace('');
    },
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
   },

}
</script>
