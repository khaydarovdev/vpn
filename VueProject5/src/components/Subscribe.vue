<template>
	<div class="subscribe_full">
		<div class="subscribe">
			<div class="txt">
				<h1>
					Subscribe Now for <br />
					Get Special Features!
				</h1>
				<h4>Let's subscribe with us and find the fun.</h4>
			</div>
			<button class="get"><h2>Subscribe</h2></button>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.subscribe_full {
	width: 100%;
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
}
.subscribe {
	width: 1100px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	gap: 200px;
	/* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); */
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}
.txt {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}
.txt h1 {
	font-size: 45px;
}
.txt h4 {
	color: #4f5665;
	font-weight: 450;
	text-align: center;
	margin-top: 10px;
}
.get {
	width: 230px;
	height: 60px;
	border-radius: 15px;
	color: white;
	background-color: #f53838;
	border: 1px solid #f53838;
	cursor: pointer;
	box-shadow: 0 10px 20px #f53838; /* Shadow: soft and red */
	margin-top: 30px;
	animation: float 1.5s ease-in-out infinite;
}
@keyframes float {
	0%,
	100% {
		transform: translateY(0); /* Starting and ending at original position */
	}
	50% {
		transform: translateY(-10px); /* Move up by 4px */
	}
}
</style>
