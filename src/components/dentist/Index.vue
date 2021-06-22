<template>
<div class="main-wrapper">
    <layout-header></layout-header>
    <!-- Page Content -->

  <div class="content">
    <div class="container-fluid">

      <div class="row">
        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

        </div>

        <div class="col-md-7 col-lg-12 ">
          <div class="row">

            <div class="col-md-12">
              <div class="widget-profile pro-widget-content">
            <div class="profile-info-widget">
                <a href="#" class="booking-doc-img">
                  <div v-if="currentDentist">
                    <img :src="require('@/assets/img/dentists/avatars/'+currentDentist.avatar.split('/').slice(-1)[0])" alt="User Image">
                  </div>
                  <div v-else>
                    <img alt="User Image">
                  </div>
                </a>
                <div class="profile-det-info">
                    <h3>Dr. {{currentDentist.firstname}} {{currentDentist.lastname}}</h3>

                    <div class="patient-details">
                        <h5 class="mb-0">{{currentDentist.degree}}</h5>
                    </div>
                </div>
            </div>
        </div>
              <div class="card dash-card">

                <div class="card-body">
                  <div class="row">

                    <div class="col-md-12 col-lg-4">

                      <div class="dash-widget dct-border-rht">

                        <div class="circle-bar circle-bar1">

                          <div class="circle-graph1" data-percent="75">
                            <img src="@/assets/img/icon-01.png" class="img-fluid" alt="patient">
                          </div>
                        </div>
                        <div class="dash-widget-info">
                          <h6>Total Patient</h6>
                          <h3>1500</h3>
                          <p class="text-muted">Till Today</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 col-lg-4">
                      <div class="dash-widget dct-border-rht">
                        <div class="circle-bar circle-bar2">
                          <div class="circle-graph2" data-percent="65">
                            <img src="@/assets/img/icon-02.png" class="img-fluid" alt="Patient">
                          </div>
                        </div>
                        <div class="dash-widget-info">
                          <h6>Today Patient</h6>
                          <h3>160</h3>
                          <p class="text-muted">06, Nov 2019</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12 col-lg-4">
                        <div class="dash-widget">
                        <div class="circle-bar circle-bar3">
                          <div class="circle-graph3" data-percent="50">
                            <img src="@/assets/img/icon-03.png" class="img-fluid" alt="Patient">
                          </div>
                        </div>
                        <div class="dash-widget-info">
                          <h6>Appoinments</h6>
                          <h3>85</h3>
                          <p class="text-muted">06, Apr 2019</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <h4 class="mb-4">Patient Appoinment</h4>
              <div class="appointment-tab">

                <!-- Appointment Tab -->
                <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                  <li class="nav-item">
                    <a class="nav-link active" href="#upcoming-appointments" data-toggle="tab">Upcoming Appointments</a>
                  </li>

                </ul>
                <!-- /Appointment Tab -->

                <div class="tab-content">

                  <!-- Upcoming Appointment Tab -->
                  <div class="tab-pane show active" id="upcoming-appointments">
                    <div class="card card-table mb-0">
                      <div class="card-body">
                        <div class="table-responsive">
                          <table class="table table-hover table-center mb-0">
                            <thead>
                              <tr>
                                <th>Patient Name</th>
                                <th>Date </th>
                                <th>Status</th>
                                <th class="text-center">Is Urgent?</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in apps" :key="item.id">
                                <td>
                                  <h2 class="table-avatar">
                                    <a class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="require('@/assets/img/patients/avatars/'+item.patient.avatar.split('/').slice(-1)[0])" alt="User Image"></a>
                                    <a>{{item.patient.user.firstname}}<span>{{item.patient.user.lastname}}</span></a>
                                  </h2>
                                </td>
                                <td>{{item.date_time | formatDate }} <span class="d-block text-info">{{item.appt_time}}</span></td>

                                <td>{{item.status}}</td>

                                <td v-if="item.is_urgent" class="text-center">Yes</td>
                                <td v-else class="text-center">No</td>

                                <td class="text-right">
                                  <div class="table-action">
                                    <div v-if="item.status==='pending'">
                                      <button @click="accept(item.pk,item)" type="submit" class="btn btn-sm bg-success-light">
                                        <i class="fas fa-check"></i> Accept
                                      </button>
                                      <button @click="decline(item.pk,item)" type="submit" class="btn btn-sm bg-danger-light">
                                        <i class="fas fa-times"></i> Decline
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /Upcoming Appointment Tab -->



                </div>
              </div>
            </div>
          </div>
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
    console.log(this.id)
    console.log(this.currentDentist)
  },
	 methods: {
    getDentist(id) {
      DentistDataService.getDentist(id)
        .then(response => {
          this.currentDentist = response.data;
          this.id = this.currentDentist.pk;
          this.retrieveApps(this.id)
        })
        .catch(e => {
          console.log(e);
        });
    },
    retrieveApps(id) {
      DentistDataService.getAppointmentsAfterDentist(id)
        .then(response => {
          this.apps = response.data;
          console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });
    },

    accept(id,app){
      app.status = "confirmed"
      DentistDataService.accept(id)
      .then(response => {
          this.status = response.data;
          console.log("status for "+id+" accepted");

        })
        .catch(e => {
          console.log(e);
        });

    },
    decline(id,app){
      app.status = "rejected"
      DentistDataService.decline(id)
      .then(response => {
          this.status = response.data;
          console.log("status for "+id+" rejected");

        })
        .catch(e => {
          console.log(e);
        });
    }

   }
}

</script>

