<template>
	<!-- Home Banner -->
		<section class="section section-search">
			<div class="container">
				<div class="banner-wrapper">
					<div class="banner-header">
						<h1>Dentapp</h1>
						<p>A management application for dental clinics, dentist, but also for you</p>
						<a href="/patient/search_dentist" class="btn-yellow">Make an Appointment</a>
					</div>
				</div>
			</div>
		</section>
	<!-- /Home Banner -->
</template>

<script>
export default {
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
	computed: {
		currentpath() {
			return this.$route.name;
		}
	},
	 methods: {
		searchPath() {
			this.$router.push('/doctor/search')
		}
    },
}
</script>
