<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        	<!-- Page Content -->
			<div class="content bg-white">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-8 offset-md-2">

							<!-- Account Content -->
							<div class="account-content">
								<div class="row align-items-center justify-content-center">
									<div class="col-md-12 col-lg-6 login-right">
										<div class="login-header">
											<h3>Register Dentist <router-link to="/patient/register">Not a Dentist?</router-link></h3>
                      <h3><router-link to="/admin/register">A Clinic?</router-link></h3>
										</div>

										<!-- Register Form -->
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
												<input type="text" class="form-control floating" name="firstname" id="firstname" v-model="firstname">
												<label class="focus-label">First Name</label>
											</div>
											<div class="form-group form-focus">
												<input type="text" class="form-control floating" name="lastname" id="lastname" v-model="lastname">
												<label class="focus-label">Last Name</label>
											</div>
											<div class="form-group form-focus" >
												<input type="password" class="form-control floating" name="password" id="password" v-model="password">
												<label class="focus-label">Create Password</label>
											</div>
                      						<div class="form-group form-focus">
												<input type="password" class="form-control floating" name="password2" id="password2" v-model="password2">
												<label class="focus-label">Confirm Password</label>
											</div>
											<input type="checkbox" id="General" value="General" v-model="checkedSpec">
											<label for="General">General</label><br>
											<input type="checkbox" id="DentalSurgery" value="DentalSurgery" v-model="checkedSpec">
											<label for="DentalSurgery">Dental Surgery</label><br>
											<input type="checkbox" id="Orthodontics" value="Orthodontics" v-model="checkedSpec">
											<label for="Orthodontics">Orthodontics</label><br>
											<input type="checkbox" id="Pedodontics" value="Pedodontics" v-model="checkedSpec">
											<label for="Pedodontics">Pedodontics</label><br>
											<input type="checkbox" id="Implantology" value="Implantology" v-model="checkedSpec">
											<label for="Implantology">Implantology</label><br>
											<input type="checkbox" id="Periodontology" value="Periodontology" v-model="checkedSpec">
											<label for="Periodontology">Periodontology</label><br>
											<br>

											<div class="text-right">
												<router-link class="forgot-link" to="/">Already have an account?</router-link>
											</div>
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">Signup</button>
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
										</form>
										<!-- /Register Form -->

									</div>
								</div>
							</div>
							<!-- /Account Content -->

						</div>
					</div>

				</div>

			</div>
			<!-- /Page Content -->
        <layout-footer></layout-footer>
    </div>
</template>

<script>
export default {
  name: 'registerDentist',
  data () {
      return {
        email: '',
        username: '',
        password: '',
        password2: '',
        firstname: '',
        lastname: '',
        checkedSpec: []
      }
    },
  methods: {
  registerDentist () {
        this.$store.dispatch('registerDentist', {
          username: this.username,
          password: this.password,
          password2: this.password2,
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
          checkedSpec: this.checkedSpec
        }).then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch(err => {
          console.log(err)
        })
      }
  }
}
</script>
