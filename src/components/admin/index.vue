<template>
<div class="main-wrapper">
<header-layout></header-layout>
<div class="page-wrapper">
    <div class="content container-fluid">
      <div class="page-header">
          <div class="row">
              <div class="col-sm-12">
                  <h3 class="page-title">Welcome {{currentAdmin.name}}</h3>
              </div>
          </div>
      </div>

        <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-primary border-primary">
                                <i class="fas fa-user-md"></i>
                            </span>
                            <div class="dash-count">
                                <h3>{{numberDentists}}</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">
                            <h6 class="text-muted">Dentists</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-success">
                                <i class="fas fa-user-injured"></i>
                            </span>
                            <div class="dash-count">
                                <h3>{{numberPatients}}</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">

                            <h6 class="text-muted">Patients</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-danger border-danger">
                                <i class="fas fa-calendar-check"></i>
                            </span>
                            <div class="dash-count">
                                <h3>{{numberAppointments}}</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">

                            <h6 class="text-muted">Appointments</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="dash-widget-header">
                            <span class="dash-widget-icon text-warning border-warning">

                                <i class="fa fa-money"></i>
                            </span>
                            <div class="dash-count">
                                <h3>$1</h3>
                            </div>
                        </div>
                        <div class="dash-widget-info">

                            <h6 class="text-muted">Revenue</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 d-flex">

                <!-- Recent Orders -->
                <div class="card card-table flex-fill">
                    <div class="card-header">
                        <h4 class="card-title">Dentists List</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Dentist Name</th>
                                        <th>Speciality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="dent in dentists" :key="dent.id">
                                        <td>
                                            <h2 class="table-avatar">
                                                <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="require('@/assets/img/dentists/avatars/'+dent.avatar.split('/').slice(-1)[0])" alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{dent.firstname}} {{dent.lastname}}</router-link>
                                            </h2>
                                        </td>
                                        <td>
                                          <div v-for="(item,ind) in dent.speciality" :key="'A'+ind" class="clinic-services">
                                            <span>{{item.name}}</span>
                                          </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- /Recent Orders -->

            </div>
            <div class="col-md-6 d-flex">

                <!-- Feed Activity -->
                <div class="card  card-table flex-fill">
                    <div class="card-header">
                        <h4 class="card-title">Patients List</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>Email</th>
                                        <th>Last Visit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="pat in patients" :key="pat.id">
                                        <td>
                                            <h2 class="table-avatar">
                                                <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="require('@/assets/img/patients/avatars/avatar.jpeg')" alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{pat.user.firstname}} {{pat.user.lastname}}</router-link>
                                            </h2>
                                        </td>
                                        <td>{{pat.user.email}}</td>
                                        <td>{{pat.user.date_joined | formatDateBeauty}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- /Feed Activity -->

            </div>
        </div>
        <div class="row">
            <div class="col-md-12">

                <!-- Recent Orders -->
                <div class="card card-table">
                    <div class="card-header">
                        <h4 class="card-title">Appointment List</h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Dentist Name</th>
                                        <th>Speciality</th>
                                        <th>Patient Name</th>
                                        <th>Apointment Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="app in appointments" :key="app.id">
                                        <td>
                                            <h2 class="table-avatar">
                                                <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="require('@/assets/img/patients/avatars/avatar.jpeg')" alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{app.dentist.firstname}} {{app.dentist.lastname}}</router-link>
                                            </h2>
                                        </td>
                                        <td><div v-for="(item,ind) in app.dentist.speciality" :key="'B'+ind" class="clinic-services">
                                          <span>{{item.name}}</span>
                                        </div></td>
                                        <td>
                                            <h2 class="table-avatar">
                                                <router-link to="/admin/profile" class="avatar avatar-sm mr-2"><img class="avatar-img rounded-circle" :src="require('@/assets/img/patients/avatars/avatar.jpeg')" alt="User Image"></router-link>
                                                <router-link to="/admin/profile">{{app.patient.user.firstname}} {{app.patient.user.lastname}}</router-link>
                                            </h2>
                                        </td>
                                        <td>{{app.date}} <span class="text-primary d-block">{{app.date_time | formatDate}}</span></td>
                                        <td>
                                            <div class="status-toggle">
                                              <div v-if="app.status=='confirmed'">
                                                <i class="fas fa-calendar-check"></i>
                                                <label for="status_1" class="checktoggle">CONFIRMED</label>
                                              </div>
                                              <div v-else-if="app.status=='rejected'">
                                                <i class="fas fa-calendar-times"></i>
                                                <label for="status_1" class="checktoggle">REJECTED</label>
                                              </div>
                                              <div v-else>
                                                <i class="far fa-clock"></i>
                                                <label for="status_1" class="checktoggle">PENDING</label>
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
        </div>

    </div>
    </div>
</div>
</template>
<script>
import DentistDataService from '../../services/DentistDataService'
    export default {
    data() {
		return {
      currentAdmin:'',
      dentists:[],
      numberDentists:null,
      patients:[],
      numberPatients:null,
      appointments:[],
      numberAppointments:null,
		}
	},
  created(){
    this.get_clinic(localStorage.getItem('loggedId'))
    console.log('Aici')
    this.get_dentists_of_clinic(this.$route.params.id)
  },
	 methods: {
    get_clinic(id) {
      DentistDataService.get_clinic(id)
        .then(response => {
          this.currentAdmin = response.data;
          this.id = this.currentAdmin.pk;
          this.numberDentists = this.get_dentists_of_clinic(this.$route.params.id)
          this.numberPatients = this.get_patients_of_clinic(this.$route.params.id)
          this.numberAppointments = this.get_appointments_of_clinic(this.$route.params.id)
        })
        .catch(e => {
          console.log(e);
        });
    },
    get_dentists_of_clinic(id){
      DentistDataService.get_dentists_of_clinic(id)
        .then(response => {
          this.numberDentists = response.data.length
          this.dentists = response.data
        })
        .catch(e => {
          console.log(e);
        });
    },
    get_appointments_of_clinic(id){
      DentistDataService.get_appointments_of_clinic(id)
        .then(response => {
          this.numberAppointments = response.data.length
          this.appointments = response.data
        })
        .catch(e => {
          console.log(e);
        });
    },
    get_patients_of_clinic(id){
      DentistDataService.get_patients_of_clinic(id)
        .then(response => {
          this.numberPatients = response.data.length
          this.patients = response.data
        })
        .catch(e => {
          console.log(e);
        });
    }
   },
 }
</script>
<style>
    .fa-users {
        font-size: 20px;
    }
    .fa-credit-card {
        font-size: 20px;
    }
    .fa-money {
        font-size: 20px;
    }
    .fa-folder {
        font-size: 20px;
    }
    .fa-star {
        font-size: 12px;
    }
</style>
