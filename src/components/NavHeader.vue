<template>
	<div class="container nav-header">
		<div class="logo-nav-container">

			<div class="logo">
				<img src="../assets/img/logo.png" alt="">
			</div>

			<div class="nav">
				<ul class="nav-list">
					<li>ABOUT</li>
					<li>TESTIMONIALS</li>
					<li>COACHING</li>
					<li>BLOG</li>
					<li>CONTACT</li>
				</ul>
			</div>

			<social-icons></social-icons>

			<hamburger></hamburger>

		</div>
		<div class="homepage-headline">
			<!-- <h1>Elegant Homepage Headline</h1> -->
			<img src="../assets/img/elegant.png" alt="">
		</div>

	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	
	// @font-face {
	//     font-family: 'Brandon Grotesque';
	//     src: url(../assets/fonts/BrandonGrotesque-Regular.eot);
	//     src: url(../assets/fonts/BrandonGrotesque-Regular.eot?#iefix) format('embedded-opentype'),
	//         url(../assets/fonts/BrandonGrotesque-Regular.woff2) format('woff2'),
	//         url(../assets/fonts/BrandonGrotesque-Regular.woff) format('woff'),
	//         url(../assets/fonts/BrandonGrotesque-Regular.ttf) format('truetype');
	//     font-weight: normal;
	//     font-style: normal;
	// }
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
		justify-content: space-around;
		width: 80%;
    margin: 30px auto;

		.nav-list {
			color: #fff;
		}
	}
	.homepage-headline {
		margin: 250px 0;

		img {
			margin: 50 auto;
		}
	}
	
</style>