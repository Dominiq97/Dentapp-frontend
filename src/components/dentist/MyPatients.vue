<template>
  <div class="main-wrapper">
    <header-layout></header-layout>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 col-lg-8 col-xl-9" >
            <div class="row row-grid">
              <div class="col-md-6 col-lg-4 col-xl-3" v-for="pat in patients" v-bind:key="pat.id">
                <div class="card widget-profile pat-widget-profile">
                  <div class="card-body">
                    <div class="pro-widget-content">
                      <div class="profile-info-widget">
                        <router-link to="/doctor/patient-profile" class="booking-doc-img">
                          <img :src="require('@/assets/img/patients/avatars/'+pat.avatar.split('/').slice(-1)[0])"  alt="User Image">
                        </router-link>
                        <div class="profile-det-info">
                          <h3><router-link :to="{ name: 'profile', params: {id: pat.pk } }">{{pat.user.firstname}}</router-link></h3>
                          <div class="patient-details">
                            <h5><b>Patient ID :</b> P{{pat.pk}}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="patient-info">
                      <ul>
                        <li>Phone <span>{{pat.user.phone}}</span></li>
                        <li>Email <span>{{pat.user.email}}</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   <footer-layout></footer-layout>
  </div>
</template>

<script>
import DentistDataService from '../../services/DentistDataService'
export default {
    data() {
        return {
            patients:null
        }
    },
    created(){
      this.getPatients(this.$route.params.id)
    },
    methods:{
      getPatients(id) {
      DentistDataService.get_patients_of_dentist(id)
        .then(response => {
          this.patients = response.data
        })
        .catch(e => {
          console.log(e);
        });
    },
  },

}
</script>
