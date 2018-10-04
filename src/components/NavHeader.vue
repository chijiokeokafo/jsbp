<template>
	<div class="container nav-header">
		<div class="homepage-headline">
			<!-- <h1>Elegant Homepage Headline</h1> -->
			<img src="../assets/img/elegant.png" alt="">
		</div>

	</div>
</template>

<script>
</script>

<style scoped lang="scss">

	.container.nav-header {
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

		a {
			color: #fff;
			text-decoration: none;

			:active, :focus {
				outline: none !important;
			}
		}
	}
	
	.homepage-headline {
		margin: 250px 0;

		img {
			margin: 50 auto;
		}
	}
	
</style>