<template>
	<div class="marquee">
		<div class="images">
			<div class="card">
				<div class="ppl">
					<img src="../assets/Ellipse 175.png" alt="" />
					<div class="name">
						<h3>Viezh Robert</h3>
						<h4>Warsaw, Poland</h4>
					</div>
					<div class="star">
						<h3>4.5</h3>
						<i class="bx bxs-star"></i>
					</div>
				</div>
				<h5 class="cardh5">
					“Wow... I am very happy to use this VPN, <br />
					it turned out to be more than my expectations <br />
					and so far there have been no problems. <br />
					LaslesVPN always the best”.
				</h5>
			</div>
			<!-- ///////////////////////////////////////////////////////////////////////////////2///////////////////////////////////////////////////// -->
			<div class="card">
				<div class="ppl">
					<img src="../assets/Ellipse 176.png" alt="" />
					<div class="name">
						<h3>Yessica Christy</h3>
						<h4>Shanxi, China</h4>
					</div>
					<div class="star">
						<h3>4.7</h3>
						<i class="bx bxs-star"></i>
					</div>
				</div>
				<h5 class="cardh5">
					“I like it because I like to travel far and still can <br />
					connect with high speed.”.
				</h5>
			</div>
			<!-- ////////////////////////////////////////////////////////////////////////////3////////////////////////////////////////////////////////// -->
			<div class="card">
				<div class="ppl">
					<img src="../assets/Ellipse 177.png" alt="" />
					<div class="name">
						<h3>Kim Young Jou</h3>
						<h4>Seoul, South Korea</h4>
					</div>
					<div class="star">
						<h3>4.4</h3>
						<i class="bx bxs-star"></i>
					</div>
				</div>
				<h5 class="cardh5">
					“This is very unusual for my business that <br />
					currently requires a virtual private network <br />
					that has high security.”.
				</h5>
			</div>
		</div>
		<div class="images">
			<div class="card">
				<div class="ppl">
					<img src="../assets/Ellipse 175.png" alt="" />
					<div class="name">
						<h3>Viezh Robert</h3>
						<h4>Warsaw, Poland</h4>
					</div>
					<div class="star">
						<h3>4.5</h3>
						<i class="bx bxs-star"></i>
					</div>
				</div>
				<h5 class="cardh5">
					“Wow... I am very happy to use this VPN, <br />
					it turned out to be more than my expectations <br />
					and so far there have been no problems. <br />
					LaslesVPN always the best”.
				</h5>
			</div>
			<!-- ///////////////////////////////////////////////////////////////////////////////2///////////////////////////////////////////////////// -->
			<div class="card">
				<div class="ppl">
					<img src="../assets/Ellipse 176.png" alt="" />
					<div class="name">
						<h3>Yessica Christy</h3>
						<h4>Shanxi, China</h4>
					</div>
					<div class="star">
						<h3>4.7</h3>
						<i class="bx bxs-star"></i>
					</div>
				</div>
				<h5 class="cardh5">
					“I like it because I like to travel far and still can <br />
					connect with high speed.”.
				</h5>
			</div>
			<!-- ////////////////////////////////////////////////////////////////////////////3////////////////////////////////////////////////////////// -->
			<div class="card">
				<div class="ppl">
					<img src="../assets/Ellipse 177.png" alt="" />
					<div class="name">
						<h3>Kim Young Jou</h3>
						<h4>Seoul, South Korea</h4>
					</div>
					<div class="star">
						<h3>4.4</h3>
						<i class="bx bxs-star"></i>
					</div>
				</div>
				<h5 class="cardh5">
					“This is very unusual for my business that <br />
					currently requires a virtual private network <br />
					that has high security.”.
				</h5>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.marquee {
	display: flex;
	overflow: hidden;
	width: 100%;
	height: 300px;
}

.images {
	display: flex;
	animation: marquee 15s linear infinite;
}

.card {
	margin-right: 30px;
}
.card {
	width: 472px;
	height: 250px;
	border: 2px solid gray;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 30px;
	padding: 30px;
	gap: 30px;
	transition: all 0.3s;
}
.ppl {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 20px;
}
.name {
	display: flex;
	flex-direction: column;
	gap: 3px;
}
.ppl h3 {
	font-weight: 650;
}
.ppl h4 {
	color: gray;
	font-weight: 400;
}
.star {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	margin-left: 120px;
}
.star i {
	color: #fea250;
	font-size: 18px;
}
.cardh5 {
	font-weight: 400;
	font-size: 18px;
}
.card:hover {
	transform: scale(1.03);
	border: 2px solid #f53838;
	box-shadow: 0 5px 10px #f53838;
}

@keyframes marquee {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-100%);
	}
}
</style>
