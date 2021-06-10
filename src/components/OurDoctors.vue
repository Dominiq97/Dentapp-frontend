<template>
  <!-- Doctors Section -->
			<section class="doctors-col">
				<div class="container">					
					<div class="row justify-content-center">	
						<div class="doctors-title text-center">					
							<h6>MEET OUR DOCTORS</h6>
							<h2>Our Doctors</h2>
						</div>
					</div>
				   <div class="row">
						<div class="col-lg-12">
							<slick  class="doctor-slider slider" ref="slick" :options="slickOptions">
								
								<!-- Doctor Widget -->
								<div class="profile-widget" v-for="item in doctors" :key="item.id">
									<div class="doc-img">
										<router-link to="/doctor/profile">
											<img class="img-fluid" alt="User Image" :src="loadImg(item.image)">
										</router-link>
									</div>
									<div class="pro-content">
										<h3 class="title">
											<router-link to="/doctor/profile">{{item.name}}</router-link> 
										</h3>
										<p class="speciality">{{item.specialist}}</p>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">({{item.rating}})</span>
										</div>
										<ul class="available-info">
											<li>
												<i class="fas fa-map-marker-alt"></i> {{item.location}}
											</li>
											<li>
												<i class="fas fa-calendar-check"></i> {{item.availableOn}}
											</li>
											<li>
												<i class="fas fa-wallet"></i> {{item.fees}}
											</li>
										</ul>
									</div>									
									<div class="pro-footer">
										<ul class="policy-menu text-center">
											<li><a href="#">View Profile</a></li>
											<li><a href="#"> Book Now</a></li>
										</ul>
									</div>
								</div>
								<!-- /Doctor Widget -->
							</slick>
							<div class="col-12 col-md-12 text-center pt-4">
								<a href="#" class="view-all">View All</a>
							</div>
						</div>
				   </div>
				</div>
			</section>
			<!-- /Doctors Section -->

</template>

<script>
const images = require.context('@/assets/img/doctors', false, /\.png$|\.jpg$/)
import doctors from '../assets/json/doctors'

export default {
    data() {
        return {
			doctors: doctors,
			slickOptions: {
                slidesToShow: 4,
                arrows:true,
                dots: false,
				swipeToSlide: true,
				variableWidth: true,
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
        loadImg(imgPath) {
		   return images('./' + imgPath)
        },
    },
}
</script>