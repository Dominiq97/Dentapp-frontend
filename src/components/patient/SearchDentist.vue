<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
							<search-filter></search-filter>
						</div>

						<div class="col-md-12 col-lg-8 col-xl-9">

							<!-- Doctor Widget -->
							<div class="card" :class="{ active: ind == currentIndex }" v-for="(dentist, ind) in dentists" :key="ind" @click="setActiveDentist(dentist, ind)">
								<div class="card-body" >
									<div class="doctor-widget">
										<div class="doc-info-left">
											<div class="doc-info-cont">
												<h4 class="doc-name">Dr. {{dentist.firstname}} {{dentist.lastname}} </h4>
                        <div v-for="(clin, ind) in dentist.clinics" :key="'A'+ind">
												  <p class="doc-department">{{clin.city}} - {{clin.name}} </p>
                          <p class="doc-department">{{clin.address}}</p>
                        </div>
												<div class="rating">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
												</div>

												<div v-for="(dent,ind) in dentist.speciality" :key="'B'+ind" class="clinic-services">
													<span>{{dent.name}}</span>
												</div>
											</div>
										</div>
										<div v-if="currentDentist" class="doc-info-right">
                      <div  class="clinic-booking">
												<router-link class="view-pro-btn" to="/doctor/profile">View Profile</router-link>
												<router-link class="apt-btn" :to="'/patient/booking/'+ dentist.pk " >Book Appointment</router-link>
											</div>

										</div>
									</div>
								</div>
							</div>
							<!-- /Doctor Widget -->



						</div>
					</div>

				</div>

			</div>
			<!-- /Page Content -->
            <layout-footer></layout-footer>
    </div>
</template>

<script>
import DentistDataService from "../../services/DentistDataService";

export default {
	data() {
		return {
      currentDentist:null,
      dentists:[],
      currentIndex: -1,

		}
	},
  created(){
    this.retrieveDentists()
  },

	 methods: {
     setActiveDentist(dentist, pk) {
      this.currentDentist = dentist;
      console.log(this.currentDentist)
      this.currentIndex = pk;
      console.log(this.currentIndex)
    },

     keepDentist(){
       localStorage.setItem("dentistName",this.dentist.firstname+' '+this.dentist.lastname)
       localStorage.setItem("dentistClinic",this.dentist.clinics.city)
     },
        loadImg(imgPath, value) {
			if(value == 1) {
				return doctorImages('./' + imgPath)
			} else if(value == 2) {
				return specialityImages('./' + imgPath)
			} else {
				return featureImages('./' + imgPath)
			}
        },

    retrieveDentists() {
      DentistDataService.getDentists()
        .then(response => {
          this.dentists = response.data;
          console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });
    },
}
}

</script>
