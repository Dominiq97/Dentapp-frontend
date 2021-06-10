<template>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        <breadcrumb1></breadcrumb1>
        <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <sidebar1></sidebar1>
						</div>
							<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body pt-0">
								
									<!-- Tab Menu -->
									<nav class="user-tabs mb-4">
										<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
											<li class="nav-item">
												<a class="nav-link active" href="#pat_appointments" data-toggle="tab">Upcoming</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_prescriptions" data-toggle="tab">Requested</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_billing" data-toggle="tab">History</a>
											</li>
										</ul>
									</nav>
									<!-- /Tab Menu -->
									
									<!-- Tab Content -->
									<div class="tab-content pt-0">
										
										<!-- Upcoming Tab -->
										<div id="pat_appointments" class="tab-pane fade show active">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
                                                        <p class="ml-4 mt-4"><span class="available">PATIENT:   </span> 
                                <input type="text" value="Any" class="any-intake-box"></p>
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr class="patient-appoint">
																	<th>Patient</th>
																	<th>Details</th>
																	<th>Doctor</th>
																	<th>Appointment Date</th>
																	<th></th>
																</tr>
															</thead>
															<tbody>
                                
																<tr>
                                  <td>
																		<h2 class="table-avatar">
																			<router-link to="/patient/profile" class="patient-name-appoint">Jacopo</router-link>
																		</h2>
																	</td>
                                  <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																		</div>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">Orali Fisher  </router-link>
																		</h2>
																	</td>
																	<td>12 Mar 2020
                                    									<span class="d-block text-info">12:00AM - 12.30AM</span>
                                 									 </td>
																	<td>
																	<i class="fas fa-video appoint-video"></i>  
																		<p class="go-visit mb-0">GO TO VISIT</p>
																	</td>
																</tr>
																<tr>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/patient/profile" class="patient-name-appoint">Jacopo</router-link>
																		</h2>
																	</td>
                                 									 <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																		</div>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">Orali Fisher  </router-link>
																		</h2>
																	</td>
																	<td>12 Mar 2020
                                    <span class="d-block text-info">12:00AM - 12.30AM</span>
                                  </td>
																	<td>
                                  <i class="fas fa-video appoint-video"></i>  
                                   <p class="go-visit mb-0">GO TO VISIT</p>
                                  </td>
																</tr>
																
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
										<!-- /Upcoming Tab -->
										
										<!-- Requested Tab -->
										<div class="tab-pane fade" id="pat_prescriptions">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">	
														</table>
													</div>
												</div>
											</div>
										</div>
										<!-- /Requested Tab -->
											
										
										
										<!-- History Tab -->
										<div id="pat_billing" class="tab-pane fade">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
                                                                                        <p class="ml-4 mt-4"><span class="available">PATIENT:   </span> <input type="text" value="Any" class="any-intake-box"></p>
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr class="patient-appoint">
																	<th>Patient</th>
																	<th>Details</th>
                                  <th>Doctor</th>
                                  <th>Survey</th>
                                  <th>Med.</th>
																	<th>Appointment Date</th>
																	<th>Share</th>
																</tr>
															</thead>
															<tbody>
																<tr>
                                  <td>
																		<h2 class="table-avatar">
																			<router-link to="/patient/profile" class="patient-name-appoint">Jacopo</router-link>
																		</h2>
																	</td>
                                  <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																		</div>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">Orali Fisher </router-link>
																		</h2>
                                  </td>
                                  <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
                                      </a>
                                      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																		</div>
                                  </td>
                                  <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
                                      </a>
                                      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																		</div>
																	</td>
																	<td>12 Mar 2020
                                    <span class="d-block text-info">12:00AM - 12.30AM</span>
                                  </td>
																	<td>
                                  <i class="fa fa-check"></i> 
                                  </td>
																</tr>
																<tr>
                                  <td>
																		<h2 class="table-avatar">
																			<router-link to="/patient/profile" class="patient-name-appoint">Jacopo</router-link>
																		</h2>
																	</td>
                                  <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																		</div>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" src="@/assets/img/doctors/doctor-thumb-01.jpg" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">Orali Fisher  </router-link>
																		</h2>
                                                                    </td>
                                                                    <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
                                                                             </a>
                                                                            <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																		</div>
                                                                    </td>
                                                                    <td>
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
                                      </a>
                                      <a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																		</div>
																	</td>
																	<td>12 Mar 2020
                                    <span class="d-block text-info">12:00AM - 12.30AM</span>
                                  </td>
																	<td>
                                  <i class="fa fa-check"></i> 
                                  </td>
																</tr>
																
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
										<!-- /History Tab -->
										
									</div>
									<!-- Tab Content -->
									
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
import appointments from '../../assets/json/doctor/appointments.json'
const images = require.context('@/assets/img/patients', false, /\.jpg$/)
export default {
    data() {
        return {
            appointments: appointments
        }
    },
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    }
}
</script>