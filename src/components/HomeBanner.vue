<template>
	<!-- Home Banner -->
		<section class="section section-search">
			<div class="container">
				<div class="banner-wrapper">
					<div class="banner-header">
						<h6>We work to take care of your smile</h6>
						<h1>Great Smile For Healthy Lifestyle!</h1>
						<div v-for="posts in APIData" :key="posts.id" class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://via.placeholder.com/150x100" alt="Card image cap">
                  <div class="card-body">
                      <h4 class=""><a class="text-secondary" href="">{{posts.title}}</a></h4>
                      <p class="card-text">{{posts.content}}</p>
                      <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a href="" class="btn btn-sm btn-outline-primary" role="button" aria-pressed="true">View</a>
                      <a href="" class="btn btn-sm btn-outline-secondary" role="button" aria-pressed="true">Edit</a>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
						<a href="#" class="btn-yellow">Make an Appointment</a>
					</div>
				</div>
			</div>
		</section>
	<!-- /Home Banner -->
</template>

<script>
import { getAPI } from '../axios-api'
import { mapState } from 'vuex'
export default {
  name: 'Users',
	mounted() {
		if($('.pharmacy-home-slider .swiper-container').length > 0) {
		 	var swiper = new Swiper('.pharmacy-home-slider .swiper-container', {
		 	loop: true,
		 	speed: 1000,
	      	pagination: {
	        	el: '.pharmacy-home-slider .swiper-pagination',
	        	dynamicBullets: true,
	        	clickable: true,
	      	},
	      	navigation: {
        		nextEl: '.pharmacy-home-slider .swiper-button-next',
        		prevEl: '.pharmacy-home-slider .swiper-button-prev',
      		},
	    });
	}
	},
	computed: mapState(['APIData']),
		currentpath() {
			return this.$route.name;
  },



	 methods: {
		searchPath() {
			this.$router.push('/doctor/search')
		}
    },

}
</script>
