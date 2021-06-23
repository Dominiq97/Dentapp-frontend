<template>
  <div class="main-wrapper">
    <header-layout></header-layout>
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="card">
              <div class="card-body">
                <form >
                  <div class="row form-row">
                    <div class="col-12 col-md-12">
                      <div class="form-group">
                        <div class="change-avatar">
                          <div class="profile-img">
                            <img :src="require('@/assets/img/dentists/avatars/avatar.jpeg')" alt="User Image">
                          </div>
                          <div class="upload-img">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model="pat.firstname" disabled>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model="pat.lastname"  disabled>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Date Joined</label>
                        <div class="cal-icon">
                          <input type="text" class="form-control" v-model="pat.user.date_joined.split('T')[0]" disabled>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="pat.user.email" disabled>
                      </div>
                    </div>
                    <div class="col-12 col-md-6">
                      <div class="form-group">
                        <label>Speciality</label>
                        <div v-for="int in pat.speciality" :key="int">
                          <input type="text" v-model="int.name" class="form-control" disabled>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="submit-section">
                    <button type="submit" class="btn btn-primary submit-btn">Save Changes</button>
                  </div>
                </form>
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
  data(){
    return{
      currentPatient:'',
      pat:null,
      file: null,
    }
  },
  created(){
    this.getDentist(this.$route.params.id)
  },
  methods:{
    getDentist(id) {
      DentistDataService.get_dentist_obj(id)
        .then(response => {
          this.pat = response.data
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
	mounted() {
  }
}
</script>
