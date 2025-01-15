<template>
	<div class="sec4_full">
		<section class="sec4">
			<h1>
				Huge Global Network <br />
				of Fast VPN
			</h1>
			<h3>
				See LaslesVPN everywhere to make it easier for you when you move <br />
				locations.
			</h3>
			<Map />
			<img src="../assets/Sponsored.png" alt="" />
		</section>
	</div>
</template>
<script>
import Map from '../components/Map.vue';
export default {
	components: {
		Map,
	},
};
</script>
<style scoped>
.sec4_full {
	width: 100%;
	height: 130vh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sec4 {
	height: 100%;
	width: 1440px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.sec4 h1 {
	font-size: 60px;
	text-align: center;
}
.sec4 h3 {
	color: #4f5665;
	font-weight: 450;
	text-align: center;
	margin-top: 20px;
}
</style>
