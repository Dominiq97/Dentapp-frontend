<template>
  <!-- Blog -->
			<section class="blog-section">
				<div class="container">
					<div class="row justify-content-center">						
						<div class="section-header text-center mb-4">					
							<h6>Blog</h6>
							<h2>Our Blogs</h2>
						</div>	
					</div>
					<div class="row justify-content-center">						
						<div class="col-12 col-md-6 col-lg-3">
							<div class="blog-box">
								<div class="blog-img">
									<img src="@/assets/img/blog/blog-img1.jpg" alt="">
								</div>
								<div class="blog-content">
									<span><i>Jan 26 | Admin</i></span>
									<h2>Lorem Ipsum has been the industry's</h2>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
								</div>
								<div class="blog-btn">
									<a href="#"><i class="fas fa-chevron-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3">
							<div class="blog-box">
								<div class="blog-img">
									<img src="@/assets/img/blog/blog-img2.jpg" alt="">
								</div>
								<div class="blog-content">
									<span><i>Jan 26 | Admin</i></span>
									<h2>Lorem Ipsum has been the industry's</h2>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
								</div>
								<div class="blog-btn">
									<a href="#"><i class="fas fa-chevron-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3">
							<div class="blog-box">
								<div class="blog-img">
									<img src="@/assets/img/blog/blog-img3.jpg" alt="">
								</div>
								<div class="blog-content">
									<span><i>Jan 26 | Admin</i></span>
									<h2>Lorem Ipsum has been the industry's</h2>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
								</div>
								<div class="blog-btn">
									<a href="#"><i class="fas fa-chevron-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-6 col-lg-3">
							<div class="blog-box">
								<div class="blog-img">
									<img src="@/assets/img/blog/blog-img4.jpg" alt="">
								</div>
								<div class="blog-content">
									<span><i>Jan 26 | Admin</i></span>
									<h2>Lorem Ipsum has been the industry's</h2>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
								</div>
								<div class="blog-btn">
									<a href="#"><i class="fas fa-chevron-right"></i></a>
								</div>
							</div>
						</div>
						<div class="col-12 col-md-12 blog-bottom text-center pt-5">
							<a href="#" class="view-all">View All</a>
						</div>
					</div>
				</div>
			</section>
			<!-- /Blog -->
</template>

<script>
const images = require.context('@/assets/img', false, /\.png$|\.jpg$/)

export default {
    props: {
        blogs: { type: Array }
    },
    methods: {
        loadImg(imgPath, value) {
            return images('./'+imgPath)
        },
    },
}
</script>