<template>
<div>
    <div class="main-wrapper">
         <layout-header></layout-header>
         <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-12 col-lg-12 ">
							<div class="row">
								<div class="col-sm-12">
									<div class="card">
										<div class="card-body">
											<h4 class="card-title">Schedule </h4>
											<div class="profile-box">
												<div class="row">

												</div>
												<div class="row">
													<div class="col-md-12">
														<div class="card schedule-widget mb-0">
															<!-- Schedule Header -->
															<div class="schedule-header">
																<!-- Schedule Nav -->
																<div class="schedule-nav">
																	<ul class="nav nav-tabs nav-justified">
																		<li class="nav-item">
																			<a class="nav-link active" data-toggle="tab" href="#slot_today">This Week</a>
																		</li>
																		<li class="nav-item">
																			<a class="nav-link" data-toggle="tab" href="#slot_tom">Next Week</a>
																		</li>
																	</ul>
																</div>
																<!-- /Schedule Nav -->
															</div>
															<!-- /Schedule Header -->

															<!-- Schedule Content -->
															<div class="tab-content schedule-cont">
                                <div class="schedule">
                                  <div class="time-ground">
                                    <ul>
                                      <li v-for="time in pageTimeGround" :key="time">
                                        <span>{{time}}</span>
                                        <p :style="timeListSty"></p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="task-ground">
                                    <ul>
                                      <li v-for="(week, index) in weekGround" :key="week" class="task-list">
                                        <p>{{week}}</p>
                                        <ul :style="taskListSty">
                                          <li class="task-list-item" v-for="detail in taskDetail[index]" :key="detail" :style="detail.styleObj" @click="showDetail(detail, week)">
                                            <p>{{detail.dateStart}} - {{detail.dateEnd}}</p>
                                            <h3>{{detail.title}}</h3>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>

                                  <modal :show="showModal" :show-modal-detail="showModalDetail"> </modal>
                                </div>



															</div>
															<!-- /Schedule Content -->
														</div>
													</div>
												</div>
											</div>
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
	 	<!-- Edit Time Slot Modal -->

		<!-- /Add Time Slot Modal -->
</div>
</template>

<script>
import Modal from '../layouts/dentist/Modal.vue';
export default {
	name: 'Schedule',
	props: {
		timeGround: {
			type: Array,
			default: []
		},
		weekGround: {
			type: Array,
			default: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday'
			]
		},
		taskDetail: {
			type: Array,
			default: []
		},
		color: {
			type: Array,
			default(){
				return [
					"#2B2E4A",
					"#521262",
					"#903749",
					"#53354A",
					"#40514E",
					"#537780",
				]
			}
		}
	},
	components: {
		Modal: Modal
	},
	// watch: {
	// 	timeGround: function(value){
	// 		this.timeGround = value
	// 	}
	// },
	watch: {
		timeGround(value) {

				// console.log('value=', value);
				this.pageTimeGround = this.initTimeGroud(value);
				// return value;
		}
	},
	data() {
		return {
      currentDentist: null,
			pageTimeGround: [],
			showModal: false,
			showModalDetail: {
				dateStart: '09:30',
				dateEnd: '10:30',
				title: 'Metting',
				week: 'Monday',
				styleObj: {
					backgroundColor: "#903749"
				},
				detail: 'Metting (German: Mettingen) is a commune in the Moselle department in Grand Est in north-eastern France.'
			},
			taskListSty: {
				height: '900px'
			},
			timeListSty: {
				width: '100%'
			}
		}
	},
	created() {
		// console.log(this.ta)

		this.pageTimeGround = this.initTimeGroud(this.timeGround);

		let maxTime = this.pageTimeGround[this.pageTimeGround.length - 1];
		let minTime = this.pageTimeGround[0];
		let maxMin = maxTime.split(':')[0] * 60 + maxTime.split(':')[1] * 1;
		let minMin = minTime.split(':')[0] * 60 + minTime.split(':')[1] * 1;
		// console.log(maxMin);
		// console.log(minMin);
		// console.log(maxTime);
		for (let i = 0; i < this.taskDetail.length; i++) {
		    for (let j = 0; j < this.taskDetail[i].length; j++) {
		    	// console.log(this.taskDetail[i][j]);
		        let startMin = this.taskDetail[i][j].dateStart.split(':')[0] * 60 + this.taskDetail[i][j].dateStart.split(':')[1] * 1;
		        let endMin = this.taskDetail[i][j].dateEnd.split(':')[0] * 60 + this.taskDetail[i][j].dateEnd.split(':')[1] * 1;
		        if(startMin < minMin || endMin > maxMin) {
		        	this.taskDetail[i].splice(j, 1);
		        	j--;
		        	continue
		        };
		        // console.log(endMin);
		        let difMin = endMin - startMin;
		        // console.log(startMin);
		        // console.log(endMin);
		        this.taskDetail[i][j].styleObj = {
		            height: difMin * 100 / 60 + 'px',
		            top: ((startMin - (this.pageTimeGround[0].split(":")[0] * 60 + this.pageTimeGround[0].split(":")[1] * 1)) * 100 / 60) + 50 + 'px',
		            backgroundColor: this.color[~~(Math.random() * this.color.length)]
		        }
		        // console.log(this.color[~~(Math.random() * 4)]);
		        // console.log(this.taskDetail);
		        // console.log(this.timeGround);
		    }
		}
		console.log(this.taskDetail);
	},
	mounted() {
		this.taskListSty.height = (this.pageTimeGround.length - 1) * 100 + 'px';
		this.timeListSty.width = this.weekGround.length * 14 + '%';

		// console.log(this.taskDetail);
		// console.log(this.weekGround);
	},
	methods: {
		showDetail(obj, week){
			obj.week = week;
			this.showModalDetail = obj;
			this.showModal = !this.showModal;
		},
		initTimeGroud(value){
			if(value && value.length == 2){
					let startTime = value[0].split(":")[0] * 1;
					let endTime = value[1].split(":")[0] * 1;
					value = [];
					for(let i = startTime; i <= endTime; i++){
						// console.log(1);
						// value.push()
						let hour = i < 10 ? "0" + i : "" + i;
						value.push(hour + ":00");
					}
				}else{
					value = [
            "08:00",
						"09:00",
						"10:00",
						"11:00",
						"12:00",
						"13:00",
						"14:00",
						"15:00",
						"16:00",
						"17:00",
						"18:00",
					]
				}
				return value;
		}
	}
}
</script>

