<template>
	<div class="nav_full">
		<nav>
			<img src="../src/assets/Logo.png" alt="" />
			<div class="links">
				<ul>
					<li><h3>About</h3></li>
					<li><h3>Features</h3></li>
					<li><h3>Pricing</h3></li>
					<li><h3>Testimonials</h3></li>
					<li><h3>Help</h3></li>
				</ul>
			</div>
			<div class="btns">
				<button class="signin"><h2>Sign In</h2></button>
				<button class="signup"><h2>Sign Up</h2></button>
			</div>
		</nav>
	</div>
	<Section1 />
	<Section2 />
	<Section3 />
	<Section4 />
	<Section5 />
	<Footer />
</template>
<script>
import 'leaflet/dist/leaflet.css';
import Section1 from '../src/components/Section1.vue';
import Section2 from '../src/components/Section2.vue';
import Section3 from '../src/components/Section3.vue';
import Section4 from '../src/components/Section4.vue';
import Section5 from '../src/components/Section5.vue';
import Footer from '../src/components/Footer.vue';
export default {
	components: {
		Section1,
		Section2,
		Section3,
		Section4,
		Section5,
		Footer,
	},
};
</script>
<style scoped>
.nav_full {
	width: 100%;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
}
nav {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
nav img {
	cursor: pointer;
	height: 55px;
}
.links ul {
	display: flex;
	align-items: center;
	justify-content: space-around;
	list-style: none;
	gap: 30px;
}
.links ul li {
	cursor: pointer;
}
.links ul li h3 {
	font-weight: 500;
}
.links ul li h3 {
	position: relative;
	display: inline-block;
	font-size: 24px;
	color: #4f5665;
	cursor: pointer;
	transition: 0.3s;
}

.links ul li h3::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 2.5px;
	background-color: #f53838;
	transition: width 0.3s ease-in-out;
}

.links ul li h3:hover::after {
	width: 100%;
}
.links ul li h3:hover {
	color: black;
}
.btns {
	display: flex;
	gap: 20px;
}
.signin {
	width: 70px;
	height: 60px;
	background-color: white;
	border: 1px solid white;
	cursor: pointer;
}
.signup {
	width: 200px;
	height: 60px;
	background-color: white;
	border: 1px solid #f53838;
	border-radius: 90px;
	color: #f53838;
	cursor: pointer;
	transition: all 0.3s;
}
.btns h2 {
	font-weight: 500;
}
.signup:hover {
	color: white;
	background-color: #f53838;
	border: 1px solid #f53838;
}
</style>
