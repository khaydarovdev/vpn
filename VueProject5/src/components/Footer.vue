<template>
	<div class="footer_full">
		<section class="footer">
			<div class="logo">
				<img src="../assets/Logo.png" alt="" />
				<h3>
					<b>LaslesVPN</b> is a private virtual network that <br />
					has unique features and has high security.
				</h3>
				<div class="ics">
					<div class="ic"><i class="bx bxl-facebook" id="ici"></i></div>
					<div class="ic"><i class="bx bxl-twitter" id="ici"></i></div>
					<div class="ic"><i class="bx bxl-instagram-alt" id="ici"></i></div>
				</div>
				<h4>©2024LaslesVPN</h4>
			</div>
			<div class="links">
				<div class="product">
					<h3>Products</h3>
					<h4>Download</h4>
					<h4>Pricing</h4>
					<h4>Locations</h4>
					<h4>Server</h4>
					<h4>Countries</h4>
					<h4>Blog</h4>
				</div>
				<div class="product">
					<h3>Engage</h3>
					<h4>LaslesVPN</h4>
					<h4>FAQ</h4>
					<h4>Tutorials</h4>
					<h4>About Us</h4>
					<h4>Privacy Policy</h4>
					<h4>Terms of Service</h4>
				</div>
				<div class="product">
					<h3>Earn Money</h3>
					<h4>Affiliate</h4>
					<h4 class="bcp">Become Partner</h4>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer_full {
	height: 60vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fbfbfb;
}
.footer {
	width: 1440px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.logo {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 35px;
}
.logo img {
	cursor: pointer;
	height: 55px;
}
.logo h3 {
	color: #4f5665;
	font-weight: 450;
}
.logo h4 {
	color: gray;
	font-weight: 400;
}
.ics {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
}
.ic {
	background-color: white;
	width: 50px;
	height: 50px;
	border: none;
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.08);
	transition: all 0.3s;
	cursor: pointer;
}
#ici {
	color: #f53838;
	font-size: 27px;
}
.ic:hover {
	background-color: #f53838;
	color: white;
	#ici {
		color: white;
	}
}
.product {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	gap: 30px;
}
.product h4 {
	color: #4f5665;
	font-weight: 450;
	transition: all 0.3s;
	cursor: pointer;
}
.product h4:hover {
	color: #000;
}
.links {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 100px;
}
.bcp {
	margin-bottom: 200px;
}
</style>
