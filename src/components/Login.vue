<template>
	<div class="account-page">
		<div class="main-wrapper">
			<layout-header></layout-header>

				<!-- Page Content -->
				<div class="content">
					<div class="container-fluid">

						<div class="row">
							<div class="col-md-7 offset-md-1">

								<!-- Login Tab Content -->
								<div class="account-content">
									<div class="row align-items-center justify-content-center">
										<div class="col-md-7 col-lg-6 login-left">
										</div>
										<div class="col-md-12 col-lg-6 login-right">
											<div class="login-header">
												<h3>Login <span>Dentapp</span></h3>
											</div>
											<form v-on:submit.prevent="login">
												<div class="form-group form-focus">
													<input type="username" class="form-control floating" name="username" id="user" v-model="username">
													<label class="focus-label">Username</label>
												</div>
												<div class="form-group form-focus">
													<input type="password" class="form-control floating" name="password" id="pass" v-model="password">
													<label class="focus-label">Password</label>
												</div>
                        <p v-if="incorrectAuth">Incorrect username or password entered - please try again</p>
												<div class="text-right">
													<router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
												</div>
												<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Login</button>
												<div class="login-or">
													<span class="or-line"></span>
													<span class="span-or">or</span>
												</div>
												<div class="row form-row social-login">
													<div class="col-6">
														<a href="#" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f mr-1"></i> Login</a>
													</div>
													<div class="col-6">
														<a href="#" class="btn btn-google btn-block"><i class="fab fa-google mr-1"></i> Login</a>
													</div>
												</div>
												<div class="text-center dont-have">Don’t have an account? <router-link to="/patient/register">Register</router-link></div>
											</form>
										</div>
									</div>
								</div>
								<!-- /Login Tab Content -->

							</div>
						</div>

					</div>

				</div>
				<!-- /Page Content -->
			<layout-footer></layout-footer>
		</div>
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
      return {
        username: '',
        password: '',
        incorrectAuth: false
      }
    },
  computed:{

  },
	methods: {
		login () {
        this.$store.dispatch('userLogin', {
          username: this.username,
          password: this.password,
        })
        .then(() => {
            if (localStorage.getItem('userType')=='patient'){
              this.$router.push({ name: 'index' })}
            else if (localStorage.getItem('userType')=='dentist'){
              this.$router.push({ name: 'dentistIndex' })
            }else if (localStorage.getItem('userType')=='admin'){
              this.$router.push({ name: 'adminIndex' })
            }

        })
        .catch(err => {
          console.log(err)
          this.incorrectAuth = true
        })
        }
	},
}
</script>
