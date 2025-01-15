<template>
	<div class="sec1_full">
		<section class="sec1">
			<div class="txt">
				<h1>
					Want anything to be <br />
					easy with <b>LaslesVPN.</b>
				</h1>
				<h3>
					Provide a network for all your needs with ease and fun using LaslesVPN <br />
					discover interesting features from us.
				</h3>
				<button class="get"><h2>Get Started</h2></button>
			</div>
			<img src="../assets/Illustration 1.png" alt="" />
		</section>
		<Numbers />
	</div>
</template>
<script>
import Numbers from '../components/Numbers.vue';
export default {
	components: {
		Numbers,
	},
};
</script>
<style scoped>
.sec1_full {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.sec1 {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.txt {
	display: flex;
	flex-direction: column;
	gap: 25px;
}
.txt h1 {
	font-size: 70px;
	font-weight: 450;
}
.txt h3 {
	color: gray;
	font-weight: 500;
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
