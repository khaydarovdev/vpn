<template>
	<div class="sec2_full">
		<section class="sec2">
			<img src="../assets/Illustration 2.png" alt="" />
			<div class="txt">
				<h1>
					We Provide Many <br />
					Features You Can Use
				</h1>
				<h3>
					You can explore the features that we provide with fun <br />
					and have their own functions each feature.
				</h3>
				<div class="txt_tick">
					<i class="bx bxs-check-circle"></i>
					<h4>Powerfull online protection.</h4>
				</div>
				<div class="txt_tick">
					<i class="bx bxs-check-circle"></i>
					<h4>Internet without borders.</h4>
				</div>
				<div class="txt_tick">
					<i class="bx bxs-check-circle"></i>
					<h4>Supercharged VPN</h4>
				</div>
				<div class="txt_tick">
					<i class="bx bxs-check-circle"></i>
					<h4>No specific time limits.</h4>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec2_full {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec2 {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.sec2 img {
	height: 500px;
}
.txt {
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: left;
	gap: 30px;
}
.txt h1 {
	font-size: 60px;
	font-weight: 550;
}
.txt h3 {
	color: gray;
	font-weight: 450;
}
.txt_tick {
	display: flex;
	align-items: center;
	justify-content: left;
	gap: 10px;
}
.txt_tick i {
	color: #2fab73;
	font-size: 35px;
}
.txt_tick h4 {
	font-weight: 450;
	color: #4f5665;
	font-size: 18px;
}
</style>
