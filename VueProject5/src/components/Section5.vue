<template>
	<div class="sec5_full">
		<section class="sec5">
			<h1>
				Trusted by Thousands of <br />
				Happy Customer
			</h1>
			<h3>
				These are the stories of our customers who have joined us with great <br />
				pleasure when using this crazy feature.
			</h3>
			<Carousel />
			<Subscribe />
		</section>
	</div>
</template>
<script>
import Carousel from '../components/Carousel.vue';
import Subscribe from '../components/Subscribe.vue';
export default {
	components: {
		Carousel,
		Subscribe,
	},
};
</script>
<style scoped>
.sec5_full {
	width: 100%;
	height: 120vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec5 {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.sec5 h1 {
	font-size: 60px;
	text-align: center;
}
.sec5 h3 {
	color: #4f5665;
	font-weight: 450;
	text-align: center;
	margin-top: 20px;
}
</style>
