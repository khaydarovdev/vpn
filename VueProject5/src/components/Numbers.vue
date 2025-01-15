<template>
	<div class="num_full">
		<section class="num">
			<div class="users">
				<div class="rnd"><i class="bx bxs-user"></i></div>
				<div class="txt">
					<h2>90+</h2>
					<h3>Users</h3>
				</div>
			</div>
			<div class="line"></div>
			<div class="users">
				<div class="rnd"><i class="bx bx-current-location"></i></div>
				<div class="txt">
					<h2>30+</h2>
					<h3>Locations</h3>
				</div>
			</div>
			<div class="line"></div>
			<div class="users">
				<div class="rnd"><i class="bx bxs-server"></i></div>
				<div class="txt">
					<h2>50+</h2>
					<h3>Servers</h3>
				</div>
			</div>
		</section>
		<div class="arrow">
			<a href="#top" @click.prevent="scrollToTop"><i class="bx bx-up-arrow-alt"></i></a>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			scrolling: null,
		};
	},
	methods: {
		scrollToTop() {
			if (this.scrolling) {
				clearTimeout(this.scrolling);
			}

			const scrollStep = () => {
				const currentScroll = window.scrollY;
				if (currentScroll > 0) {
					window.scrollBy(0, -35);
					this.scrolling = setTimeout(scrollStep, 10);
				} else {
					clearTimeout(this.scrolling);
					this.scrolling = null;
				}
			};

			scrollStep();
		},
	},
};
</script>
<style scoped>
.num_full {
	width: 100%;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.num {
	width: 1100px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 20px;
	gap: 90px;
	/* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); */
	box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}
.users {
	display: flex;
	gap: 30px;
}
.rnd {
	background-color: #ffecec;
	width: 60px;
	height: 60px;
	border: none;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.rnd i {
	color: #f53838;
	font-size: 25px;
}
.txt {
	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
}
.txt h3 {
	color: gray;
	font-weight: 500;
}
.line {
	height: 170px;
	width: 2px;
	background-color: gray;
	border-radius: 10px;
	opacity: 0.6;
}
.arrow {
	width: 60px;
	height: 60px;
	border: none;
	border-radius: 100%;
	background-color: #ffecec;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 30px;
	right: 60px;
	z-index: 1000;
	cursor: pointer;
	transition: all 0.3s;
}
.arrow i {
	font-size: 30px;
	color: #f53838;
	border-radius: 30px;
}
.arrow:hover {
	transform: translateY(-6px); /* Subtle upward movement */
}
.arrow:active {
	transform: translateY(6px);
}
</style>
