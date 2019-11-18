<script>
	import Nav from '../components/Nav.svelte';
	import MobileNav from '../components/MobileNav.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Divider from '../components/Divider.svelte';
	import WhyUs from '../components/WhyUs.svelte';
	import Nn from '../components/Nn.svelte';
	let lpages = [
		'heating-cooling-service-bristol-il',
		'heating-cooling-service-lisbon-il',
		'heating-cooling-service-millbrook-il',
		'heating-cooling-service-newark-il',
		'heating-cooling-service-norway-il',
		'heating-cooling-service-oswego-il',
		'heating-cooling-service-ottawa-il',
		'heating-cooling-service-plano-il',
		'heating-cooling-service-sandwich-il',
		'heating-cooling-service-sheridan-il',
		'heating-cooling-service-somonauk-il',
		'heating-cooling-service-sugar-grove-il',
		'heating-cooling-service-yorkville-il',
		'hvac-air-conditioning-repair-installation-services-bristol-il',
		'hvac-air-conditioning-repair-installation-services-lisbon-il',
		'hvac-air-conditioning-repair-installation-services-millbrook-il',
		'hvac-air-conditioning-repair-installation-services-newark-il',
		'hvac-air-conditioning-repair-installation-services-norway-il',
		'hvac-air-conditioning-repair-installation-services-oswego-il',
		'hvac-air-conditioning-repair-installation-services-ottawa-il',
		'hvac-air-conditioning-repair-installation-services-plano-il',
		'hvac-air-conditioning-repair-installation-services-sandwich-il',
		'hvac-air-conditioning-repair-installation-services-sheridan-il',
		'hvac-air-conditioning-repair-installation-services-somonauk-il',
		'hvac-air-conditioning-repair-installation-services-sugar-grove-il',
		'hvac-air-conditioning-repair-installation-services-yorkville-il',
		'hvac-furnace-repair-services-bristol-il',
		'hvac-furnace-repair-services-lisbon-il',
		'hvac-furnace-repair-services-millbrook-il',
		'hvac-furnace-repair-services-newark-il',
		'hvac-furnace-repair-services-norway-il',
		'hvac-furnace-repair-services-oswego-il',
		'hvac-furnace-repair-services-ottawa-il',
		'hvac-furnace-repair-services-plano-il',
		'hvac-furnace-repair-services-sandwich-il',
		'hvac-furnace-repair-services-sheridan-il',
		'hvac-furnace-repair-services-somonauk-il',
		'hvac-furnace-repair-services-sugar-grove-il',
		'hvac-furnace-repair-services-yorkville-il'
	];
	export let segment;
	export let nnCity;
	export let nnState;
	if(lpages.indexOf(segment)  > -1){
		nnCity = segment.replace('hvac-furnace-repair-services-','').replace('hvac-air-conditioning-repair-installation-services-','').replace('heating-cooling-service-','');
		let nnCS = nnCity.split("-");
		if (nnCS.length > 2){
			nnCity = encodeURI(nnCS[0]+""+nnCS[1]);
		}else{
			nnCity = encodeURI(nnCS[0]);
		}
		nnState = nnCS[nnCS.length - 1];
	}

</script>
<style>
.nn-section{
	padding:2rem;
}
</style>
<MobileNav {segment}/>
<Header></Header>
<Nav {segment}/>
{#if segment === undefined}
	<main>
		<slot></slot>
	</main>
	{:else}
		<main class="{segment} subpage">
			<slot></slot>
		</main>

{/if}
	<WhyUs></WhyUs>
<Divider>
	<h2>See Our Reviews</h2>
</Divider>
{#if lpages.indexOf(segment)  > -1 }
	<Nn nnCity="{nnCity}" nnState="{nnState}"></Nn>
{:else}
	<Nn></Nn>
{/if}
<Footer></Footer>
