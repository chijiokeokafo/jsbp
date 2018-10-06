<template>
	<div class="container happy">
		<div class="headline">
			<h1>If it makes you happy</h1>
			<br>
			<h1 class="light">it belongs.</span></h1>
		</div>
		<div class="body-copy">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, secod do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		</div>
		<!-- <div class="more-btn">
			<a href="#">MORE</a>
		</div> -->
	</div>
</template>

<script>
	
</script>

<style scoped>
	.container.happy {
		width: 75%;
		margin: 80px auto 230px;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #fff;
		text-align: left;
	}
	.logo-nav-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.happy h1 {
		font-size: 64px;
		text-align: left;
		color: #575757
	}
	.happy h1:first-of-type {
		margin-bottom: 0;
	}

	.happy h1.light { 
		color: #f0bed8; 
		margin-top: 0;
	}

	.happy .body-copy p {
		font-size: 20px;
		font-family: 'Brandon Grotesque', sans-serif;
	}

	.happy .more-btn a {
		font-size: 16px;
		font-family: 'Helvetica Neue', sans-serif;
		color: #2e3192;
		text-decoration: none;
		text-align: left;
	}
	
</style>