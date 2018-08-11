<template>
	<div class="container">
		<div class="logo-nav-container">
			<div class="logo">
				<!-- <img src="assets/img/logo.png" alt=""> -->
			</div>
			<div class="nav">
				<ul class="nav-list">
					<li>ABOUT</li>
					<li>TESTIMONIALS</li>
					<li>COACHING</li>
					<li>CONSULTING</li>
					<li>BLOG</li>
					<li>CONTACT</li>
					<li>hambuger</li>
				</ul>
			</div>
		</div>
		<div class="homepage-headline">
			<h1>Elegant Homepage Headline</h1>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.container {
		width: 100%;
		height: auto;
		display: flex;
		-webkit-flex-direction: column;
		-moz-flex-direction: column;
		-ms-flex-direction: column;
		-o-flex-direction: column;
		flex-direction: column;
		justify-content: center;
		background-color: #2e3192;
	}
	.logo-nav-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.homepage-headline {
		margin: 40px;
	}
	
</style>