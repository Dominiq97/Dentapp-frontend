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
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">Schedule </router-link>
                       </li>
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">Appointments </router-link>
                       </li>
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">Messages </router-link>
                       </li>
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">My patients </router-link>
                       </li>
                   </ul>
                    <ul v-else-if="getType=='admin'" class="main-nav">
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">Dashboard </router-link>
                       </li>
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">Clinic profile </router-link>
                       </li>

                       <li class="login-link">
                           <router-link to="/login">Logout</router-link>
                       </li>
                   </ul>
                   <ul v-else-if="getType=='patient'" class="main-nav">
                     <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/patient/search_dentist">Search dentist </router-link>
                       </li>
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">My Appointments </router-link>
                       </li>
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
                           <router-link to="/index">Profile </router-link>
                       </li>
                       <li class="has-submenu" :class=" homeMenu ? 'active' : 'notactive'">
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

export default {

   mounted() {
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
       doctorMenu() {
          return this.$route.name == 'doctor-index' || this.$route.name == 'doctor-appointments' || this.$route.name == 'schedule-timings' ||  this.$route.name == 'my-patients' ||  this.$route.name == 'messages' ||  this.$route.name == 'invoices' ||  this.$route.name == 'profile-settings' ||  this.$route.name == 'doctor-reviews' ||  this.$route.name == 'doctor-register' ||  this.$route.name == 'doctor-blogs' ||  this.$route.name == 'add-blog' ||  this.$route.name == 'edit-blog' ||  this.$route.name == 'add-prescription' ||  this.$route.name == 'edit-prescription' ||  this.$route.name == 'add-billing' ||  this.$route.name == 'edit-billing';
       },
       patientsMenu() {
           return this.$route.name == 'doctor-mapgrid' || this.$route.name == 'doctor-maplist' || this.$route.name == 'doctor-profile' || this.$route.name == 'search-doctor' ||  this.$route.name == 'booking' ||  this.$route.name == 'booking-success' ||  this.$route.name == 'checkout' ||  this.$route.name == 'patient-dashboard' ||  this.$route.name == 'favourites' ||  this.$route.name == 'chat' ||  this.$route.name == 'patient-profile-settings' ||  this.$route.name == 'patient-change-password';
       },
       pharmacyMenu() {
           return this.$route.name == 'pharmacy' || this.$route.name == 'pharmacy-details' || this.$route.name == 'pharmacy-search' || this.$route.name == 'pharmacy-product' ||  this.$route.name == 'pharmacy-product-description' ||  this.$route.name == 'pharmacy-cart' ||  this.$route.name == 'pharmacy-product-checkout' ||  this.$route.name == 'patient-dashboard' ||  this.$route.name == 'favourites' ||  this.$route.name == 'chat' ||  this.$route.name == 'pharmacy-payment-success';
       },
       pagesMenu() {
           return this.$route.name == 'voice-call' || this.$route.name == 'video-call' || this.$route.name == 'calendar' || this.$route.name == 'componentss' || this.$route.name == 'invoice-view' || this.$route.name == 'logins' || this.$route.name == 'blank' || this.$route.name == 'patient-register'  || this.$route.name == 'login' || this.$route.name == 'invoices' || this.$route.name == 'forgot-password';
       },
       blogMenu() {
           return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid' || this.$route.name == 'blog-details';
       }
   },
   methods: {
     logout(){
      this.$store.dispatch('userLogout');
      this.$router.replace('');
    },
       dashboard(value) {
           if(value == 1) {
               let router = this.$router.resolve({path: '/admin/index'});
               window.open(router.href, '_blank');
           } else {
               let router = this.$router.resolve({path: '/pharmacyadmin/index'});
               window.open(router.href, '_blank');
           }
       }
   },
}
</script>
