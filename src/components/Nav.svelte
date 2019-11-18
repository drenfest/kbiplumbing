<script>
	export let segment;
</script>

<style>
	.bg-main-menu{
		background: linear-gradient(180deg, rgba(222,222,222,1) 0%, rgba(238,238,238,1) 49%, rgba(255,255,255,1) 100%);
	}
	.bg-image{
		width:300px;
		padding:2rem;
		align-self:center;
		display:flex;
		flex-direction:column;
		justify-content:center;
		background-color:grey;
		height:100%;
		color:#ffffff;
		text-align:center;
	}

	.bg-heatnav {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url("/assets/images/heatnav.jpg");
	}

	.bg-acnav {
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-image: url("/assets/images/acnav.jpg");
	}
	.dropdown-menu{
		min-width:600px;
		margin:0;
		padding:0;
	}
	.row{
		padding:0;
		margin:0;
	}
	.col-6{
		justify-content:center;
		display:flex;
		flex-direction:column;

	}
	.mega-content {
		padding:2em;
	}

	.nav{
		padding: 0;
	}
	.nav > li{
		min-height:50px;
		display:flex;
		flex-direction:column;
		font-family: 'Oswald', sans-serif;


	}
	.nav > li > a{
		align-content:center;
		font-size:20px;
		text-transform:uppercase;
		color:#3d5467;
		border-right: 1px solid white;
		padding:1.25em 0 1.25em 0;
		border-radius:0;
	}

	.nav > li > a:hover {
    background-color: #ffffff;
    text-decoration:none;
    }


	.nav > li:first-of-type > a{
		border-left: 1px solid white;
	}
	.nav > li > a:focus, .active{

		background-color:white !important;
	}

	.dropdown-menu {
		border:none;
		border-radius:0 0 .25rem .25rem;
	}
	.dropdown-item:active {
		background:var(--primary-color);
		color: white;
	}
	.dropdown-item.active:not(*:active) {
		background:var(--primary-color);
		color: var(--primary-color);
	}
	.dropdown-item:active:not(*:active) {
		background:var(--primary-color);
		color: var(--primary-color);
	}
</style>
<section class="bg-main-menu d-none d-md-block">
	<nav class="container">
		<ul class="nav navbar navbar-dark nav-fill nav-pills justify-content-between">
			<li class="nav-item"><a rel=prefetch class='{segment === "camera-video-inspection" ? "active" : ""}' href='camera-video-inspection' title="Humidification">Camera Services</a></li>
			<li class="nav-item"><a rel=prefetch class='{segment === "sump-ejector-pumps" ? "active" : ""}' href='sump-ejector-pumps' title="Humidification">Pumps</a></li>
			<li class="nav-item"><a rel=prefetch class='{segment === "power-rodding" ? "active" : ""}' href='power-rodding' title="Humidification">Power Rodding</a></li>
			<li class="nav-item"><a rel=prefetch class='{segment === "hydro-jetting" ? "active" : ""}' href='hydro-jetting' title="Humidification">Hydro Jetting</a></li>
			<li class="nav-item"><a rel=prefetch class='{segment === "sewer-drain-repair" ? "active" : ""}' href='sewer-drain-repair' title="Humidification">Sewer Drain Repair</a></li>
			<li class="nav-item"><a rel=prefetch class='{segment === "seepage-tile" ? "active" : ""}' href='seepage-tile' title="Humidification">Seepage Tile</a></li>
			<li class="nav-item"><a rel=prefetch class='{segment === "contact" ? "active" : ""}' href='contact' title="Contact Us">Contact</a></li>
		</ul>
	</nav>
</section>

