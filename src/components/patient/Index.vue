<template>
    <div class="main-wrapper">
        <layout-header3></layout-header3>
        <breadcrumb></breadcrumb>
        	<!-- Page Content -->
			<div class="content">
				<div class="container-fluid">

					<div class="row">
						
						<!-- Profile Sidebar -->
						<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<sidebar1></sidebar1>
						</div>
						<!-- / Profile Sidebar -->
						
						<div class="col-md-7 col-lg-8 col-xl-9">
							<div class="card">
								<div class="card-body pt-0">
								
									<!-- Tab Menu -->
									<nav class="user-tabs mb-4">
										<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
											<li class="nav-item">
												<a class="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_medical_records" data-toggle="tab"><span class="med-records">Medical Records</span></a>
											</li>
											<li class="nav-item">
												<a class="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
											</li>
										</ul>
									</nav>
									<!-- /Tab Menu -->
									
									<!-- Tab Content -->
									<div class="tab-content pt-0">
										
										<!-- Appointment Tab -->
										<div id="pat_appointments" class="tab-pane fade show active">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Doctor</th>
																	<th>Appt Date</th>
																	<th>Booking Date</th>
																	<th>Amount</th>
																	<th>Follow Up</th>
																	<th>Status</th>
																	<th></th>
																</tr>
															</thead>
															<tbody>
																<tr v-for="item in appointments" :key="item.id">
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" :src="loadImg(item.doctor_image)" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">{{item.doctor_name}}<span>{{item.category}}</span></router-link>
																		</h2>
																	</td>
																	<td>{{item.appt_date}}<span class="d-block text-info">{{item.appt_time}}</span></td>
																	<td>{{item.booking_date}}</td>
																	<td>{{item.amount}}</td>
																	<td>{{item.follow_up}}</td>
																	<td>
                                                                        <span class="badge badge-pill bg-success-light" v-if="item.status == 'Confirm'">Confirm</span>
                                                                        <span class="badge badge-pill bg-danger-light" v-if="item.status == 'Cancelled'">Cancelled</span>
                                                                        <span class="badge badge-pill bg-warning-light" v-if="item.status == 'Pending'">Pending</span>
                                                                    </td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
										<!-- /Appointment Tab -->
										
										<!-- Prescription Tab -->
										<div class="tab-pane fade" id="pat_prescriptions">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Date </th>
																	<th>Name</th>									
																	<th>Created by </th>
																	<th></th>
																</tr>     
															</thead>
															<tbody>
																<tr v-for="item in prescriptions" :key="item.id">
																	<td>{{item.date}}</td>
																	<td>{{item.name}}</td>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" :src="loadImg(item.image)" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">{{item.created_by}} <span>{{item.category}}</span></router-link>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																		</div>
																	</td>
																</tr>
															</tbody>	
														</table>
													</div>
												</div>
											</div>
										</div>
										<!-- /Prescription Tab -->
											
										<!-- Medical Records Tab -->
										<div id="pat_medical_records" class="tab-pane fade">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>ID</th>
																	<th>Date </th>
																	<th>Description</th>
																	<th>Attachment</th>
																	<th>Created</th>
																	<th></th>
																</tr>     
															</thead>
															<tbody>
																<tr v-for="item in medicalrecords" :key="item.id">
																	<td><a href="javascript:void(0);">{{item.record_no}}</a></td>
																	<td>{{item.date}}</td>
																	<td>{{item.description}}</td>
																	<td><a href="#">{{item.attachment}}</a></td>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" :src="loadImg(item.doctor_image)" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">{{item.created_by}}<span>{{item.category}}</span></router-link>
																		</h2>
																	</td>
																	<td class="text-right">
																		<div class="table-action">
																			<a href="javascript:void(0);" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</a>
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																		</div>
																	</td>
																</tr>
															</tbody>  	
														</table>
													</div>
												</div>
											</div>
										</div>
										<!-- /Medical Records Tab -->
										
										<!-- Billing Tab -->
										<div id="pat_billing" class="tab-pane fade">
											<div class="card card-table mb-0">
												<div class="card-body">
													<div class="table-responsive">
														<table class="table table-hover table-center mb-0">
															<thead>
																<tr>
																	<th>Invoice No</th>
																	<th>Doctor</th>
																	<th>Amount</th>
																	<th>Paid On</th>
																	<th></th>
																</tr>
															</thead>
															<tbody>
																<tr v-for="item in billing" :key="item.id"> 
																	<td>
																		<router-link to="/invoice-view">{{item.invoice_no}}</router-link>
																	</td>
																	<td>
																		<h2 class="table-avatar">
																			<router-link to="/doctor/profile" class="avatar avatar-sm mr-2">
																				<img class="avatar-img rounded-circle" :src="loadImg(item.doctor_image)" alt="User Image">
																			</router-link>
																			<router-link to="/doctor/profile">{{item.doctor_name}}<span>{{item.category}}</span></router-link>
																		</h2>
																	</td>
																	<td>{{item.amount}}</td>
																	<td>{{item.paid_on}}</td>
																	<td class="text-right">
																		<div class="table-action">
																			<router-link to="/invoice-view" class="btn btn-sm bg-info-light">
																				<i class="far fa-eye"></i> View
																			</router-link>
																			<a href="javascript:void(0);" class="btn btn-sm bg-primary-light">
																				<i class="fas fa-print"></i> Print
																			</a>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
										<!-- /Billing Tab -->
										  
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
import appointments from '../../assets/json/patient/appointments.json'
import prescriptions from '../../assets/json/patient/prescriptions.json'
import medicalrecords from '../../assets/json/patient/medicalrecords.json'
import billing from '../../assets/json/patient/billing.json'
const images = require.context('@/assets/img/doctors', false, /\.jpg$/)

export default {
    data() {
        return {
            appointments: appointments,
            prescriptions: prescriptions,
            medicalrecords: medicalrecords,
            billing: billing  
        };
    },
    methods: {
        loadImg(imgPath) {
            return images('./' + imgPath)
        },
    },
}
</script>