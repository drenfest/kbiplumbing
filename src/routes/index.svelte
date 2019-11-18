<script>
	import Hero from '../components/Hero.svelte';
	import Divider from '../components/Divider.svelte';
	import Coupon from '../components/Coupon.svelte';
	import ServicesGrid from '../components/ServicesGrid.svelte';

</script>
<style>
	.about-section{
		padding:4rem 2rem 24rem;
		background-image: url(/assets/images/homeaboutbk-m.jpg);
		background-size: cover;
		background-position: bottom center;
	}
	.about-section > .container > h2{
		margin-bottom:1.75rem;
		font-weight:700;
		font-size:2.5rem;
	}
	.aboutsub {
	font-size:60%;
	font-weight:300;
	display:block;
	text-transform:uppercase;
	}

	.about-support {
	font-family: 'Oswald', sans-serif;
	text-transform:uppercase;
	font-size:18px;
	font-weight:400;
	line-height:1.4em;
	display:block;
	margin-bottom:.15rem;
	}
	.abouthmtx {
	padding:0px ;
	}

	.service-btns-bg{
	background: rgb(61,84,103);
background: linear-gradient(90deg, rgba(61,84,103,1) 9%, rgba(96,115,130,1) 90%);
	}
	.service-buttons{
		display:grid;
		grid-template-rows:1fr 1fr 1fr;
	}
	.coupon-section{
		background: #e6e6e6;
		padding:3rem 0;
	}
	.specials-button{
		margin-top:2rem;
	}
	.specials-button>a{
		background-color:var(--primary-color);
		border:none;
		border-radius:0;
	}
	.specials-button>a:hover{
		background-color:#711D1D;
	}
	@media screen and (min-width:768px){

	.about-section{
		padding:6rem 2rem 24rem;
		background-image: url(/assets/images/homeaboutbk.jpg);
		background-size: cover;
		background-position: bottom center;
	}
	.abouthmtx {
	padding:0px 75px;
	}


		.service-btns-bg{
			background: rgb(61,84,103);
background: linear-gradient(90deg, rgba(61,84,103,1) 9%, rgba(96,115,130,1) 90%);
		}
		.service-buttons{
			grid-template-rows:1fr;
			grid-template-columns: 1fr 1fr 1fr;
			max-width: 1140px;
			margin:auto;
		}
	}
</style>
<svelte:head>
	<title>KBI Plumbing Hvac A/C Furnace Installation & Repair Company</title>
	<meta name="description" content="Customers rely on KBI Plumbing HVAC in Newark, IL to get the job done in a high-degree of professionalism and workmanship.">
</svelte:head>
<Hero
		heroImage="/assets/images/heros/home-hero.jpg"
		heroTitle="Sewer & Drain Experts"
		heroBigText="KBI Plumbing"
		heroText="Helping Out The Mchenry IL Area For The Last 13+ Years">
	<p>Free Estimates <br> Free Camera Inspection With Rodding <br> Senior Citizen Discounts <br> Military Discounts <br> Free Second Opinions</p>
	<a class="btn btn-light" href="/contact" title="Schedule Hvac Repair Or Hvac Installation Service">Schedule Service Now</a>
</Hero>
<!--Service Buttons Are In Hero Component-->
<section class="about-section">
	<div class="container">
		<h2 class="text-center">KBI Plumbing<span class="aboutsub">Sewer &amp; Drain Experts</span></h2>
		<div class="row">
			<div class="col-xs-12 col-sm-4">
				<h3>Industry Experts</h3>
				<p>Over 13 years experience delivering high quality plumbing, sewer, and drain services. Our employees are experienced and knowledgeable, and we're available 24/7 365.</p>
			</div>
			<div class="col-xs-12 col-sm-4">
				<h3>Modern Tooling</h3>
				<p>We use the latest technologies such as camera locating blockages and high pressure power rodding. Saving our customers time and money.</p>
			</div>
			<div class="col-xs-12 col-sm-4">
				<h3>Customer Focused</h3>
				<p>We focus on your needs, clean up any mess the job created, make sure the service is thorough, and work effeciently to solve your plumbing issues</p>
			</div>
		</div>

		<div class="row justify-content-center" style="padding:15px 0 0px;">

			<p class="about-support" >Free Estimates</p>
		</div>

		<div class="row justify-content-center" style="padding:0px 0 0;">

			<a class="btn btn-primary text-center" style="display:block;" href="tel:+1815-353-3298" title="Click Here To Call Now ">Call Now! 1-815-353-3298</a>

		</div>



	</div>
</section>
<Divider>
	<h2>Specials</h2>
</Divider>
<section class="coupon-section">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-4">
				<Coupon couponPrice="$89" couponTitle="Sewer Line Power Rodding" couponSubtitle="One time payment" couponText="Not to be combined with any other discount or offer"/>
			</div>
			<div class="col-xs-12 col-sm-4">
				<Coupon couponPrice="Starting at $385" couponTitle="Hydro Jetting" couponSubtitle="One time payment" couponText="Not to be combined with any other discount or offer"/>
			</div>
		</div>
<!--		<div class="text-center specials-button">-->
<!--			<a class="btn btn-primary btn-lg text-center" href="special" title="See Our Specials">See All Of Our Current Specials</a>-->
<!--		</div>-->
	</div>
</section>
<Divider>
	<h2>Sewer &amp; Drain Services</h2>
</Divider>
<ServicesGrid/>
