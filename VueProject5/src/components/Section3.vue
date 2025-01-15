<template>
	<div class="sec3_full">
		<section class="sec3">
			<h1>Choose your plan</h1>
			<h3>
				Let's choose the package that is best for you and explore it happily and <br />
				cheerfully.
			</h3>
			<div class="cards">
				<div class="card">
					<div class="plan">
						<img src="../assets/Free.png" alt="" />
						<h2>Free Plan</h2>
					</div>
					<div class="txt">
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Unlimited Bandwitch</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Encrypted Connection</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>No Traffic Logs</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Works on All Devices</h4>
						</div>
					</div>
					<div class="btns">
						<h2>Free</h2>
						<button class="signup"><h6 class="signuptxt">Sign Up</h6></button>
					</div>
				</div>
				<div class="card">
					<div class="plan">
						<img src="../assets/Free.png" alt="" />
						<h2>Standart Plan</h2>
					</div>
					<div class="txt">
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Unlimited Bandwitch</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Encrypted Connection</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Yes Traffic Logs</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Works on All Devices</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Connect Anywhere</h4>
						</div>
					</div>
					<div class="btns">
						<h2>9$/mo</h2>
						<button class="signup"><h6 class="signuptxt">Sign Up</h6></button>
					</div>
				</div>
				<div class="card">
					<div class="plan">
						<img src="../assets/Free.png" alt="" />
						<h2>Premium Plan</h2>
					</div>
					<div class="txt">
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Unlimited Bandwitch</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Encrypted Connection</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Yes Traffic Logs</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Works on All Devices</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Connect Anywhere</h4>
						</div>
						<div class="txt_tick">
							<i class="bx bx-check"></i>
							<h4>Get New Features</h4>
						</div>
					</div>
					<div class="btns">
						<h2>12$/mo</h2>
						<button class="signup"><h6 class="signuptxt">Sign Up</h6></button>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.sec3_full {
	width: 100%;
	height: 125vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fbfbfb;
}
.sec3 {
	width: 1440px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
}
.sec3 h1 {
	font-size: 60px;
}
.sec3 h3 {
	color: #4f5665;
	font-weight: 450;
	text-align: center;
}
.plan {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
}

.cards {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 60px;
}
.card {
	height: 680px;
	width: 300px;
	background-color: white;
	border: 2px solid gray;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 30px;
	transition: all 0.3s;
	cursor: pointer;
}
.card h2 {
	font-weight: 500;
	font-size: 30px;
}
.card:hover {
	transform: scale(1.03);
	border: 2px solid #f53838;
	box-shadow: 0 5px 10px #f53838;
	.signup {
		background-color: #f53838;
		border: 1px solid #f53838;
		.signuptxt {
			color: white;
		}
	}
}
.txt {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
.txt_tick {
	display: flex;
	align-items: center;
	justify-content: left;
	gap: 6px;
}
.txt_tick i {
	color: #2fab73;
	font-size: 30px;
}
.txt_tick h4 {
	font-weight: 450;
	color: #4f5665;
	font-size: 16px;
}
.signup {
	width: 150px;
	height: 40px;
	background-color: white;
	border: 1px solid #f53838;
	border-radius: 90px;
	color: #f53838;
	cursor: pointer;
	transition: all 0.3s;
}
.btns {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
}
.signuptxt {
	color: #f53838;
	font-size: 18px;
	font-weight: 450;
}

.signup:hover {
	.signuptxt {
		color: white;
	}
	background-color: #f53838;
	border: 1px solid #f53838;
}
</style>
