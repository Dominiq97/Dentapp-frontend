<template>
  <div class="main-wrapper login-body">
    <header-layout></header-layout>
    <div class="login-wrapper">
      <div class="container">
        <div class="loginbox">
          <div class="login-right">
            <div class="login-right-wrap">
              <h1>Register</h1>
              <p class="account-subtitle">Access to your dashboard</p>
              <form v-on:submit.prevent="registerDentist">
                <div class="form-group form-focus">
                  <input type="text" class="form-control floating" name="username" id="username" v-model="username">
                  <label class="focus-label">Username</label>
                </div>
                <div class="form-group form-focus">
                  <input type="text" class="form-control floating" name="email" id="email" v-model="email">
                  <label class="focus-label">E-mail</label>
                </div>
                <div class="form-group form-focus">
                  <input type="text" class="form-control floating" name="name" id="name" v-model="name">
                  <label class="focus-label">Clinic Name</label>
                </div>
                <div class="form-group form-focus">
                  <input type="text" class="form-control floating" name="uic" id="uic" v-model="uic">
                  <label class="focus-label">Unique Identification Code</label>
                </div>
                <div class="form-group form-focus" >
                  <input type="password" class="form-control floating" name="password" id="password" v-model="password">
                  <label class="focus-label">Create Password</label>
                </div>
                            <div class="form-group form-focus">
                  <input type="password" class="form-control floating" name="password2" id="password2" v-model="password2">
                  <label class="focus-label">Confirm Password</label>
                </div>
                <button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
              </form>
            <div class="login-or">
              <span class="or-line"></span>
              <span class="span-or">or</span>
            </div>
          <div class="text-center dont-have">Already have an account? <router-link to="/">Login</router-link></div>
				</div>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  name: 'registerAdmin',
  data () {
      return {
        email: '',
        username: '',
        password: '',
        password2: '',
        uic: '',
        name: '',
      }
    },
    mounted(){
    },
  methods: {
  registerDentist () {
        this.$store.dispatch('registerAdmin', {
          username: this.username,
          password: this.password,
          password2: this.password2,
          email: this.email,
          uic: this.uic,
          name: this.name,
        }).then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch(err => {
           alert('Something went wrong. Maybe the credentials are already taken or in wrong format.');
        })
      }
  }
}
</script>
