<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <!-- Page Content -->
			<div class="content">
				<div class="container">

					<div class="row">
						<div class="col-12">

							<div class="card">
								<div class="card-body">
									<div class="booking-doc-info">
										<router-link to="/doctor/profile" class="booking-doc-img">
											<img src="@/assets/img/doctors/doctor-thumb-02.jpg" alt="User Image">
										</router-link>
										<div class="booking-info">
											<h4><router-link to="/doctor/profile">Dr. {{currentDentist.firstname}} {{currentDentist.lastname}}</router-link></h4>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star"></i>
												<span class="d-inline-block average-rating">35</span>
											</div>
                      <div v-for="(clin, index) in currentDentist.clinics" :key="index">

											  <p class="text-muted mb-0"><i class="fas fa-map-marker-alt"></i>  {{clin.city}}</p>
                      </div>
										</div>
									</div ><br><br>
                <form v-on:submit.prevent="saveApp">
                  <datepicker :bootstrap-styling="true" :disabled-dates="disabledDates"
                  format="yyyy-MM-dd"
                  id="appDate"
                  required
                  v-model="app.date"
                  name="appDate"></datepicker><br>
                  <vue-timepicker
                  :minute-interval="30"
                  :hour-range="[[8, 18]]"
                  class="form-control"
                  id="appTime"
                  required
                  v-model="app.time"
                  name="appTime"></vue-timepicker>
                  <div class="submit-section proceed-btn text-right"><br>
								    <button type="submit" class="btn btn-primary submit-btn">Make the appointment offer</button>
                  </div>
                </form>
                </div>

							</div>
							<div class="row">

              </div>


							<!-- /Submit Section -->

						</div>
					</div>
				</div>

			</div>
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>
<script>
import moment from 'moment';
import DentistDataService from "../../services/DentistDataService";
export default {
  components: {
    },
    data(){
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)

      return {

        app: {
          date: tomorrow,
          time: "12:00",
        },
        disabledDates: { to: new Date(),},
        patId : DentistDataService.getPatient(localStorage.getItem('loggedId')),
        currentDentist:null,
        currentPatient:null,
        date: new Date(2016, 9,  16),
        value: '23:11:00'
      }
    },
  created(){
    this.getPatient();

  },

	methods: {
    format_date(value){
         if (value) {
           return moment(String(value)).format('yyyy-MM-DD')
          }
      },


     getDentist(id) {
      DentistDataService.get(id)
        .then(response => {
          this.currentDentist = response.data;

        })
        .catch(e => {
          console.log(e);
        });
    },
    saveApp() {
      // let time = this.app.time.getTime()
      var data = {
        date_time: this.format_date(this.app.date)+'T'+this.app.time+':00'+'Z',
        dentist: this.currentDentist.pk,
        patient: this.currentPatient,
        status:"pending"
      };
      DentistDataService.create(data)
        .then(response => {
          this.app.id = response.data.id;
          this.submitted = true;
          this.$router.push({ name: 'booking_success' })
        })
        .catch(e => {
          console.log(e);
        });
    },
    getPatient(id){
      DentistDataService.getPatient(localStorage.getItem('loggedId'))
        .then(response => {
          this.currentPatient = response.data.pk;
          console.log(this.currentPatient);
        })
        .catch(e => {
          console.log(e);
        });
    },


	},
  mounted() {
    this.getDentist(this.$route.params.id);
  }
}
</script>
