<template>
    <!-- Testimonial -->
			<section class="testimonial">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-12">
							<!-- Slider -->
							<slick  class="testimonial-slider slider" ref="slick" :options="slickOptions">
							
								<!-- Slider Item -->
								<div class="testimonial-item">
									<div class="row">
										<div class="col-12 col-lg-9">
											<div class="left">
												<h6>Our Patient’s Stories</h6>
												<h2>Testimonials</h2>
												<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
												<p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e xplicabo.</p>
											</div>
										</div>
										<div class="col-12 col-lg-3">
											<div class="testimonial-profile text-center">
												<div>
													<div class="profile-icon">
														<img src="@/assets/img/profile1.jpg" alt="">
													</div>
													<h4>Jillan Smith</h4>
													<span>Business Organiser</span>
												</div>
											</div>
										</div>
									</div>
								</div>	
								<!-- /Slider Item -->
								
								<!-- Slider Item -->
								<div class="testimonial-item">
									<div class="row">
										<div class="col-12 col-lg-9">
											<div class="left">
												<h6>Our Patient’s Stories</h6>
												<h2>Testimonials</h2>
												<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
												<p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e xplicabo.</p>
											</div>
										</div>
										<div class="col-12 col-lg-3">
											<div class="testimonial-profile text-center">
												<div>
													<div class="profile-icon">
														<img src="@/assets/img/profile1.jpg" alt="">
													</div>
													<h4>Jillan Smith</h4>
													<span>Business Organiser</span>
												</div>
											</div>
										</div>
									</div>
								</div>						
								<!-- /Slider Item -->
								
								<!-- Slider Item -->
								<div class="testimonial-item">
									<div class="row">
										<div class="col-12 col-lg-9">
											<div class="left">
												<h6>Our Patient’s Stories</h6>
												<h2>Testimonials</h2>
												<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo, sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
												<p>Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo remque la udantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e xplicabo.</p>
											</div>
										</div>
										<div class="col-12 col-lg-3">
											<div class="testimonial-profile text-center">
												<div>
													<div class="profile-icon">
														<img src="@/assets/img/profile1.jpg" alt="">
													</div>
													<h4>Jillan Smith</h4>
													<span>Business Organiser</span>
												</div>
											</div>
										</div>
									</div>
								</div>						
								<!-- /Slider Item -->
								
							</slick>
							<!-- /Slider -->
							
						</div>
					</div>
				</div>   
			</section>	 
		<!-- /Testimonial -->
</template>

<script>
const specImages = require.context('@/assets/img/specialities', false, /\.png$|\.jpg$/)
const docImages = require.context('@/assets/img', false, /\.png$|\.jpg$/)
import popularsection from '../assets/json/popularsection'
export default {
    data() {
        return {
			popularsection: popularsection,
            slickOptions: {
                slidesToShow: 1,
                arrows:false,
                dots: true,
                swipeToSlide: true,
                responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                ]
            },
        };
    },

    methods: {
        next() {
            this.$refs.slick.next();
        },
        prev() {
            this.$refs.slick.prev();
        },
        reInit() {
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
		},
		 loadImg(imgPath, value) {
			 if(value == 1) {
				 return specImages('./' + imgPath)
			 } else {
				 return docImages('./' + imgPath)
			 }
            
        },
        
    },
}
</script>