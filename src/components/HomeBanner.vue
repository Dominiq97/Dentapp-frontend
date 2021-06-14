<template>
	<!-- Home Banner -->
		<section class="section section-search">
			<div class="container">
				<div class="banner-wrapper">
					<div class="banner-header">
						<h6>We work to take care of your smile</h6>
						<h1>Great Smile For Healthy Lifestyle!</h1>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</p>
						<a href="#" class="btn-yellow">Make an Appointment</a>
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