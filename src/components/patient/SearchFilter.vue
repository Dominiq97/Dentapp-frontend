<template>
    <div class="main-wrapper">
        <!-- Search Filter -->
			<div class="card search-filter">
				<div class="card-header">
					<h4 class="card-title mb-0">Search Filter</h4>
				</div>
				<div class="card-body">
          <div class="form-group">
        <label for="city">Your Country</label>
            <select class="form-control" v-model="city">
            <option :value="city.name" v-for="city in cityList" :key="city.id">{{city.name}}</option>
            </select>
 </div>

        <br>
        				<div class="filter-widget">
					<h4>Select Specialist</h4>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist" checked>
							<span class="checkmark"></span> General
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Dental surgery
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Orthodontics
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Pedodontics
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Implantology
						</label>
					</div>
					<div>
						<label class="custom_check">
							<input type="checkbox" name="select_specialist">
							<span class="checkmark"></span> Periodontology
						</label>
					</div>
				</div>
					<div class="btn-search">
						<button type="button" class="btn btn-block">Search</button>
					</div>
				</div>
			</div>
		<!-- /Search Filter -->
    </div>
</template>
<script>
let cities = require('../../assets/json/cities');
export default {
  name: 'search',
  data () {
      return {
        city:null,
        cityList:cities,
      }
    },



}
</script>
