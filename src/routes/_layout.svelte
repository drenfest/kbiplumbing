<script>
	import Nav from '../components/Nav.svelte';
	import MobileNav from '../components/MobileNav.svelte';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import Divider from '../components/Divider.svelte';
	import WhyUs from '../components/WhyUs.svelte';
	import Nn from '../components/Nn.svelte';
	import Popup from '../components/Popup.svelte';
	let lpages = [
		"sewer-drain-repair-wayne-il",
		"sewer-drain-repair-powers-lake-wi",
		"sewer-drain-repair-darien-il",
		"sewer-drain-repair-river-grove-il",
		"sewer-drain-repair-lindenwood-il",
		"sewer-drain-repair-creston-il",
		"sewer-drain-repair-highwood-il",
		"sewer-drain-repair-wadsworth-il",
		"sewer-drain-repair-sturtevant-wi",
		"sewer-drain-repair-steward-il",
		"sewer-drain-repair-bartlett-il",
		"sewer-drain-repair-long-grove-il",
		"sewer-drain-repair-ingleside-il",
		"sewer-drain-repair-sycamore-il",
		"sewer-drain-repair-glencoe-il",
		"sewer-drain-repair-great-lakes-il",
		"sewer-drain-repair-fox-lake-il",
		"sewer-drain-repair-prospect-heights-il",
		"sewer-drain-repair-ravinia-il",
		"sewer-drain-repair-naperville-il",
		"sewer-drain-repair-volo-il",
		"sewer-drain-repair-west-chicago-il",
		"sewer-drain-repair-bloomingdale-il",
		"sewer-drain-repair-south-elgin-il",
		"sewer-drain-repair-bristol-wi",
		"sewer-drain-repair-fox-valley-il",
		"sewer-drain-repair-racine-wi",
		"sewer-drain-repair-berwyn-il",
		"sewer-drain-repair-skokie-il",
		"sewer-drain-repair-hickory-hills-il",
		"sewer-drain-repair-elk-grove-village-il",
		"sewer-drain-repair-stickney-il",
		"sewer-drain-repair-lincolnshire-il",
		"sewer-drain-repair-park-city-il",
		"sewer-drain-repair-park-ridge-il",
		"sewer-drain-repair-twin-lakes-wi",
		"sewer-drain-repair-silver-lake-wi",
		"sewer-drain-repair-zenda-wi",
		"sewer-drain-repair-niles-il",
		"sewer-drain-repair-north-barrington-il",
		"sewer-drain-repair-hanover-park-il",
		"sewer-drain-repair-brookfield-il",
		"sewer-drain-repair-winfield-il",
		"sewer-drain-repair-barrington-il",
		"sewer-drain-repair-winthrop-harbor-il",
		"sewer-drain-repair-capron-il",
		"sewer-drain-repair-carpentersville-il",
		"sewer-drain-repair-cicero-il",
		"sewer-drain-repair-deerfield-il",
		"sewer-drain-repair-island-lake-il",
		"sewer-drain-repair-burlington-wi",
		"sewer-drain-repair-pleasant-prairie-wi",
		"sewer-drain-repair-oak-lawn-il",
		"sewer-drain-repair-oak-brook-il",
		"sewer-drain-repair-south-barrington-il",
		"sewer-drain-repair-dundee-il",
		"sewer-drain-repair-camp-lake-wi",
		"sewer-drain-repair-belvidere-il",
		"sewer-drain-repair-lake-geneva-wi",
		"sewer-drain-repair-lincoln-park-il",
		"sewer-drain-repair-evanston-il",
		"sewer-drain-repair-oak-park-il",
		"sewer-drain-repair-malta-il",
		"sewer-drain-repair-deer-park-il",
		"sewer-drain-repair-rochester-wi",
		"sewer-drain-repair-forest-park-il",
		"sewer-drain-repair-elk-grove-ca",
		"sewer-drain-repair-bristol-il",
		"sewer-drain-repair-caledonia-il",
		"sewer-drain-repair-genoa-city-wi",
		"sewer-drain-repair-kildeer-il",
		"sewer-drain-repair-ringwood-il",
		"sewer-drain-repair-lake-villa-il",
		"sewer-drain-repair-lafox-il",
		"sewer-drain-repair-mount-prospect-il",
		"sewer-drain-repair-wonder-lake-il",
		"sewer-drain-repair-roscoe-il",
		"sewer-drain-repair-north-riverside-il",
		"sewer-drain-repair-geneva-il",
		"sewer-drain-repair-montgomery-il",
		"sewer-drain-repair-wheeling-il",
		"sewer-drain-repair-wheaton-il",
		"sewer-drain-repair-saint-charles-il",
		"sewer-drain-repair-aurora-il",
		"sewer-drain-repair-rolling-meadows-il",
		"sewer-drain-repair-broadview-il",
		"sewer-drain-repair-clinton-wi",
		"sewer-drain-repair-avalon-wi",
		"sewer-drain-repair-north-aurora-il",
		"sewer-drain-repair-northfield-il",
		"sewer-drain-repair-salem-wi",
		"sewer-drain-repair-kenilworth-il",
		"sewer-drain-repair-prairie-view-il",
		"sewer-drain-repair-bassett-wi",
		"sewer-drain-repair-batavia-il",
		"sewer-drain-repair-carol-stream-il",
		"sewer-drain-repair-plato-center-il",
		"sewer-drain-repair-round-lake-heights-il",
		"sewer-drain-repair-whitewater-wi",
		"sewer-drain-repair-oakbrook-terrace-il",
		"sewer-drain-repair-woodworth-wi",
		"sewer-drain-repair-river-forest-il",
		"sewer-drain-repair-lincolnwood-il",
		"sewer-drain-repair-vernon-hills-il",
		"sewer-drain-repair-kingston-il",
		"sewer-drain-repair-lake-zurich-il",
		"sewer-drain-repair-delavan-wi",
		"sewer-drain-repair-la-grange-park-il",
		"sewer-drain-repair-glendale-heights-il",
		"sewer-drain-repair-cherry-valley-il",
		"sewer-drain-repair-westchester-il",
		"sewer-drain-repair-fontana-wi",
		"sewer-drain-repair-des-plaines-il",
		"sewer-drain-repair-streamwood-il",
		"sewer-drain-repair-waukegan-il",
		"sewer-drain-repair-buffalo-grove-il",
		"sewer-drain-repair-lake-forest-il",
		"sewer-drain-repair-springfield-wi",
		"sewer-drain-repair-milton-wi",
		"sewer-drain-repair-burlington-il",
		"sewer-drain-repair-east-dundee-il",
		"sewer-drain-repair-highland-park-il",
		"sewer-drain-repair-lombard-il",
		"sewer-drain-repair-inverness-il",
		"sewer-drain-repair-lakemoor-il",
		"sewer-drain-repair-honey-creek-wi",
		"sewer-drain-repair-lake-in-the-hills-il",
		"sewer-drain-repair-lagrange-park-il",
		"sewer-drain-repair-maple-park-il",
		"sewer-drain-repair-east-troy-wi",
		"sewer-drain-repair-woodridge-il",
		"sewer-drain-repair-monroe-center-il",
		"sewer-drain-repair-fort-sheridan-il",
		"sewer-drain-repair-willowbrook-il",
		"sewer-drain-repair-western-springs-il",
		"sewer-drain-repair-union-grove-wi",
		"sewer-drain-repair-hometown-il",
		"sewer-drain-repair-beloit-wi",
		"sewer-drain-repair-gurnee-il",
		"sewer-drain-repair-rochelle-il",
		"sewer-drain-repair-norridge-il",
		"sewer-drain-repair-morton-grove-il",
		"sewer-drain-repair-stone-park-il",
		"sewer-drain-repair-alden-il",
		"sewer-drain-repair-russell-il",
		"sewer-drain-repair-chicago-il",
		"sewer-drain-repair-la-grange-highlands-il",
		"sewer-drain-repair-hines-il",
		"sewer-drain-repair-franklin-park-il",
		"sewer-drain-repair-richmond-il",
		"sewer-drain-repair-south-beloit-il",
		"sewer-drain-repair-rosemont-il",
		"sewer-drain-repair-summit-il",
		"sewer-drain-repair-hodgkins-il",
		"sewer-drain-repair-riverside-il",
		"sewer-drain-repair-golf-il",
		"sewer-drain-repair-palatine-il",
		"sewer-drain-repair-wasco-il",
		"sewer-drain-repair-hawthorn-woods-il",
		"sewer-drain-repair-summit-argo-il",
		"sewer-drain-repair-huntley-il",
		"sewer-drain-repair-clare-il",
		"sewer-drain-repair-westmont-il",
		"sewer-drain-repair-winnetka-il",
		"sewer-drain-repair-arlington-heights-il",
		"sewer-drain-repair-round-lake-beach-il",
		"sewer-drain-repair-itasca-il",
		"sewer-drain-repair-indian-head-park-il",
		"sewer-drain-repair-elburn-il",
		"sewer-drain-repair-hinckley-il",
		"sewer-drain-repair-bridgeview-il",
		"sewer-drain-repair-wood-dale-il",
		"sewer-drain-repair-wauconda-il",
		"sewer-drain-repair-elmhurst-il",
		"sewer-drain-repair-antioch-il",
		"sewer-drain-repair-somers-wi",
		"sewer-drain-repair-lake-barrington-il",
		"sewer-drain-repair-justice-il",
		"sewer-drain-repair-burr-ridge-il",
		"sewer-drain-repair-hebron-il",
		"sewer-drain-repair-cary-il",
		"sewer-drain-repair-addison-il",
		"sewer-drain-repair-lindenhurst-il",
		"sewer-drain-repair-mchenry-il",
		"sewer-drain-repair-libertyville-il",
		"sewer-drain-repair-glen-ellyn-il",
		"sewer-drain-repair-rogers-park-il",
		"sewer-drain-repair-burbank-il",
		"sewer-drain-repair-kirkland-il",
		"sewer-drain-repair-lake-bluff-il",
		"sewer-drain-repair-schaumburg-il",
		"sewer-drain-repair-clarendon-hills-il",
		"sewer-drain-repair-gilberts-il",
		"sewer-drain-repair-williams-bay-wi",
		"sewer-drain-repair-eola-il",
		"sewer-drain-repair-elmwood-park-il",
		"sewer-drain-repair-marengo-il",
		"sewer-drain-repair-wilmette-il",
		"sewer-drain-repair-esmond-il",
		"sewer-drain-repair-amf-ohare-il",
	];
	export let segment;
	export let nnCity;
	export let nnState;
	if(lpages.indexOf(segment)  > -1){
		nnCity = segment.replace('sewer-drain-repair-','');
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
<Divider>
	<h2>Locations Served</h2>
</Divider>
	<WhyUs></WhyUs>
<Divider>
	<h2>See Our Customer Reviews</h2>
</Divider>
{#if lpages.indexOf(segment)  > -1 }
	<Nn nnCity="{nnCity}" nnState="{nnState}"></Nn>
{:else}
	<Nn></Nn>
{/if}
<Footer></Footer>
<Popup linkTitle="Click Here To Read More About Our Covid-19 Policy" linkHref="/covid-19-policy" linkText="Read More" title="Here at KBI Plumbing we take your health and well being seriously.">
	We've adapted some policies to help prevent the spread of the new Covid-19 Virus.
</Popup>
