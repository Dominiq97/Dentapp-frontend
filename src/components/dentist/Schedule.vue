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
                              <Schedule
                                :time-ground="['08:00', '19:00']"
                                :week-ground="['M', 'T', 'W', 'T', 'F']"
                                :color="[
                                  '#2B2E4A',
                                  '#521262',
                                  '#903749',
                                  '#53354A',
                                  '#40514E',
                                  '#537780',
                                ]"
                                :task-detail="this.apps">

                              </Schedule>
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
import DentistDataService from '../../services/DentistDataService'
export default {
  data(){
    return{
      init:[
        [
          {
            dateStart: '09:30',
            dateEnd: '10:30',
            title: 'Popeste Andrei',
            detail: 'Urgent'
          },
          {
            dateStart: '11:30',
            dateEnd: '12:30',
            title: 'Popescu Anca',
            detail: 'Not urgent'
          }
        ]],
      apps:[],
      currentDentist:null,
      that_week_list:[],
      this_week_list:[]
    }
  },
  created() {
    this.getDentist()
    console.log(this.currentDentist)
    console.log(this.getThisWeeksApps(this.currentDentist))
    this.apps = this.getThisWeeksApps(this.currentDentist)
  },

  methods: {
    getDentist(){
      this.currentDentist = this.$route.params.id
    },
    getThisWeeksApps(id){
      let resp = []
      DentistDataService.get_this_week_mon(id)
        .then(response => {
         let day = []
          for (let i=0;i<response.data.length;i++){
            var app = {}
            app['dateStart']=response.data[i].date_time.split('T')[1].slice(0,-4)
            app['dateEnd'] = String(parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[0])+1)+":"+String(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[1])
            let clo = parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[0])
            console.log(clo)
            let demi = 0;
            if (response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[1]=='30'){
              demi = 50
            }
            app['title'] = response.data[i].patient.user.firstname + ' ' + response.data[i].patient.user.lastname
            app['detail'] = response.data[i].status
            app['styleObj'] = { height: "100px", top: String(100*(clo-8)+50+demi)+"px" }

            day.push(app)
          }
          resp.push(day)
        })
        .catch(e => {
          console.log(e);
        });

      DentistDataService.get_this_week_tue(id)
        .then(response => {
         let day = []
          for (let i=0;i<response.data.length;i++){
            var app = {}
            app['dateStart']=response.data[i].date_time.split('T')[1].slice(0,-4)
            app['dateEnd'] = String(parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[0])+1)+":"+String(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[1])
            let clo = parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[0])
            console.log(clo)
            let demi = 0;
            if (response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[1]=='30'){
              demi = 50
            }
            app['title'] = response.data[i].patient.user.firstname + ' ' + response.data[i].patient.user.lastname
            app['detail'] = response.data[i].status
            app['styleObj'] = { height: "100px", top: String(100*(clo-8)+50+demi)+"px" }

            day.push(app)
          }
          resp.push(day)
        })
        .catch(e => {
          console.log(e);
        });
        DentistDataService.get_this_week_wed(id)
        .then(response => {
         let day = []
          for (let i=0;i<response.data.length;i++){
            var app = {}
            app['dateStart']=response.data[i].date_time.split('T')[1].slice(0,-4)
            app['dateEnd'] = String(parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[0])+1)+":"+String(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[1])
            let clo = parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[0])
            console.log(clo)
            let demi = 0;
            if (response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[1]=='30'){
              demi = 50
            }
            app['title'] = response.data[i].patient.user.firstname + ' ' + response.data[i].patient.user.lastname
            app['detail'] = response.data[i].status

            app['styleObj'] = { height: "100px", top: String(100*(clo-8)+50+demi)+"px" }

            day.push(app)
          }
          resp.push(day)
        })
        .catch(e => {
          console.log(e);
        });
        DentistDataService.get_this_week_thu(id)
        .then(response => {
         let day = []
          for (let i=0;i<response.data.length;i++){
            var app = {}
            app['dateStart']=response.data[i].date_time.split('T')[1].slice(0,-4)
            app['dateEnd'] = String(parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[0])+1)+":"+String(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[1])
            let clo = parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[0])
            console.log(clo)
            let demi = 0;
            if (response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[1]=='30'){
              demi = 50
            }
            app['title'] = response.data[i].patient.user.firstname + ' ' + response.data[i].patient.user.lastname
            app['detail'] = response.data[i].status
            app['styleObj'] = { height: "100px", top: String(100*(clo-8)+50+demi)+"px" }

            day.push(app)
          }
          resp.push(day)
        });
      DentistDataService.get_this_week_fri(id)
        .then(response => {
         let day = []
          for (let i=0;i<response.data.length;i++){
            var app = {}
            app['dateStart']=response.data[i].date_time.split('T')[1].slice(0,-4)
            app['dateEnd'] = String(parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[0])+1)+":"+String(response.data[i].date_time.split('T')[1].slice(0,-4).split(":")[1])
            let clo = parseInt(response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[0])
            console.log(clo)
            let demi = 0;
            if (response.data[i].date_time.split('T')[1].slice(0,-4).split(':')[1]=='30'){
              demi = 50
            }
            app['title'] = response.data[i].patient.user.firstname + ' ' + response.data[i].patient.user.lastname
            app['detail'] = response.data[i].status
            app['styleObj'] = { height: "100px", top: String(100*(clo-8)+50+demi)+"px" }

            day.push(app)
          }
          resp.push(day)
        })
        .catch(e => {
          console.log(e);
        });
      return resp
    },
    getThatWeeksApps(id){
      DentistDataService.get_that_week(id)
        .then(response => {
          this.that_week_list = response.data;
          console.log(response.data);

        })
        .catch(e => {
          console.log(e);
        });
    },
  }
}
</script>
<style type="text/css">
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }



    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section, main {
      display: block;
    }

    body {
      line-height: 1;
    }

    ol, ul {
      list-style: none;
    }

    blockquote, q {
      quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }

    table {
      border-collapse: collapse;
      border-spacing: 1;
    }

    body {
      font-size: 1.6rem;
      font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
      color: #222222;
      background-color: white;
    }

    .tit {
      text-align: center;
      font-size: 4rem;
      margin-top: 4rem;
    }

    .auther {
      font-size: 2rem;
      text-align: center;
      margin-top: 1.5rem;
      margin-bottom: 4rem;
      color: #95a5a6;
    }
  </style>

