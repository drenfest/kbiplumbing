<script context="module">
	export async function preload({params, query}){
		// return this.fetch(`/nn-filler.html/`)
		// 		.then((r) => {
		// 			r.text().then((nnText) =>{
		// 				return content = nnText;
		// 			});
		// 		})
		let cs = await params.city.split("-");
		let state = await cs[cs.length - 1].toUpperCase();
		let city = await params.city.replace("-"+state.toLowerCase(),'').replace('-',' ').replace(params.city.substr(0,1),params.city.substr(0,1).toUpperCase());
		return {nnCity:city,nnState:state};
	}
</script>
<script>
	export let nnCity;
	export let nnState;
	export let locations = [
		{city:"Glenview", state:"IL"},
		{city:"Spring Grove", state:"IL"},
		{city:"Melrose Park", state:"IL"},
		{city:"Hillside", state:"IL"},
		{city:"Sleepy Hollow", state:"IL"},
		{city:"Hinsdale", state:"IL"},
		{city:"McCook", state:"IL"},
		{city:"Waterford", state:"WI"},
		{city:"Wayne", state:"IL"},
		{city:"Powers Lake", state:"WI"},
		{city:"River Grove", state:"IL"},
		{city:"Highwood", state:"IL"},
		{city:"Wadsworth", state:"IL"},
		{city:"Sturtevant", state:"WI"},
		{city:"Bartlett", state:"IL"},
		{city:"Long Grove", state:"IL"},
		{city:"Ingleside", state:"IL"},
		{city:"Sycamore", state:"IL"},
		{city:"Glencoe", state:"IL"},
		{city:"Great Lakes", state:"IL"},
		{city:"Fox Lake", state:"IL"},
		{city:"Prospect Heights", state:"IL"},
		{city:"Ravinia", state:"IL"},
		{city:"Naperville", state:"IL"},
		{city:"Volo", state:"IL"},
		{city:"West Chicago", state:"IL"},
		{city:"Bloomingdale", state:"IL"},
		{city:"South Elgin", state:"IL"},
		{city:"Bristol", state:"WI"},
		{city:"Fox Valley", state:"IL"},
		{city:"Racine", state:"WI"},
		{city:"Berwyn", state:"IL"},
		{city:"Skokie", state:"IL"},
		{city:"Elk Grove Village", state:"IL"},
		{city:"Stickney", state:"IL"},
		{city:"Lincolnshire", state:"IL"},
		{city:"Park City", state:"IL"},
		{city:"Park Ridge", state:"IL"},
		{city:"Twin Lakes", state:"WI"},
		{city:"Silver Lake", state:"WI"},
		{city:"Zenda", state:"WI"},
		{city:"Niles", state:"IL"},
		{city:"North Barrington", state:"IL"},
		{city:"Hanover Park", state:"IL"},
		{city:"Brookfield", state:"IL"},
		{city:"Winfield", state:"IL"},
		{city:"Barrington", state:"IL"},
		{city:"Winthrop Harbor", state:"IL"},
		{city:"Capron", state:"IL"},
		{city:"Carpentersville", state:"IL"},
		{city:"Cicero", state:"IL"},
		{city:"Deerfield", state:"IL"},
		{city:"Island Lake", state:"IL"},
		{city:"Burlington", state:"WI"},
		{city:"Pleasant Prairie", state:"WI"},
		{city:"Mukwonago", state:"WI"},
		{city:"Oak Brook", state:"IL"},
		{city:"South Barrington", state:"IL"},
		{city:"Dundee", state:"IL"},
		{city:"Camp Lake", state:"WI"},
		{city:"Lake Geneva", state:"WI"},
		{city:"Lincoln Park", state:"IL"},
		{city:"Evanston", state:"IL"},
		{city:"Oak Park", state:"IL"},
		{city:"Deer Park", state:"IL"},
		{city:"Rochester", state:"WI"},
		{city:"Forest Park", state:"IL"},
		{city:"Elk Grove", state:"CA"},
		{city:"Genoa City", state:"WI"},
		{city:"Kildeer", state:"IL"},
		{city:"Ringwood", state:"IL"},
		{city:"Lake Villa", state:"IL"},
		{city:"Lafox", state:"IL"},
		{city:"Mount Prospect", state:"IL"},
		{city:"Wonder Lake", state:"IL"},
		{city:"North Riverside", state:"IL"},
		{city:"Geneva", state:"IL"},
		{city:"Wheeling", state:"IL"},
		{city:"Wheaton", state:"IL"},
		{city:"Saint Charles", state:"IL"},
		{city:"Aurora", state:"IL"},
		{city:"Rolling Meadows", state:"IL"},
		{city:"Broadview", state:"IL"},
		{city:"North Aurora", state:"IL"},
		{city:"Northfield", state:"IL"},
		{city:"Salem", state:"WI"},
		{city:"Kenilworth", state:"IL"},
		{city:"Bassett", state:"WI"},
		{city:"Batavia", state:"IL"},
		{city:"Carol Stream", state:"IL"},
		{city:"Plato Center", state:"IL"},
		{city:"Round Lake Heights", state:"IL"},
		{city:"Whitewater", state:"WI"},
		{city:"Oakbrook Terrace", state:"IL"},
		{city:"Woodworth", state:"WI"},
		{city:"River Forest", state:"IL"},
		{city:"Lincolnwood", state:"IL"},
		{city:"Vernon Hills", state:"IL"},
		{city:"Lake Zurich", state:"IL"},
		{city:"Delavan", state:"WI"},
		{city:"La Grange Park", state:"IL"},
		{city:"Glendale Heights", state:"IL"},
		{city:"Westchester", state:"IL"},
		{city:"Fontana", state:"WI"},
		{city:"Des Plaines", state:"IL"},
		{city:"Streamwood", state:"IL"},
		{city:"Waukegan", state:"IL"},
		{city:"Buffalo Grove", state:"IL"},
		{city:"Lake Forest", state:"IL"},
		{city:"Springfield", state:"WI"},
		{city:"Burlington", state:"IL"},
		{city:"East Dundee", state:"IL"},
		{city:"Highland Park", state:"IL"},
		{city:"Lombard", state:"IL"},
		{city:"Inverness", state:"IL"},
		{city:"Lakemoor", state:"IL"},
		{city:"Honey Creek", state:"WI"},
		{city:"Lake in the Hills", state:"IL"},
		{city:"Lagrange Park", state:"IL"},
		{city:"Maple Park", state:"IL"},
		{city:"East Troy", state:"WI"},
		{city:"Fort Sheridan", state:"IL"},
		{city:"Western Springs", state:"IL"},
		{city:"Union Grove", state:"WI"},
		{city:"Gurnee", state:"IL"},
		{city:"Norridge", state:"IL"},
		{city:"Morton Grove", state:"IL"},
		{city:"Stone Park", state:"IL"},
		{city:"Alden", state:"IL"},
		{city:"Russell", state:"IL"},
		{city:"La Grange Highlands", state:"IL"},
		{city:"Chicago", state:"IL"},
		{city:"Hines", state:"IL"},
		{city:"Franklin Park", state:"IL"},
		{city:"Richmond", state:"IL"},
		{city:"Rosemont", state:"IL"},
		{city:"Summit", state:"IL"},
		{city:"Riverside", state:"IL"},
		{city:"Golf", state:"IL"},
		{city:"Palatine", state:"IL"},
		{city:"Wasco", state:"IL"},
		{city:"Hawthorn Woods", state:"IL"},
		{city:"Summit Argo", state:"IL"},
		{city:"Huntley", state:"IL"},
		{city:"Westmont", state:"IL"},
		{city:"Winnetka", state:"IL"},
		{city:"Arlington Heights", state:"IL"},
		{city:"Round Lake Beach", state:"IL"},
		{city:"Itasca", state:"IL"},
		{city:"Elburn", state:"IL"},
		{city:"Eagle", state:"WI"},
		{city:"Wood Dale", state:"IL"},
		{city:"Wauconda", state:"IL"},
		{city:"Elmhurst", state:"IL"},
		{city:"Antioch", state:"IL"},
		{city:"Somers", state:"WI"},
		{city:"Lake Barrington", state:"IL"},
		{city:"Burr Ridge", state:"IL"},
		{city:"Hebron", state:"IL"},
		{city:"Cary", state:"IL"},
		{city:"Addison", state:"IL"},
		{city:"Lindenhurst", state:"IL"},
		{city:"McHenry", state:"IL"},
		{city:"Libertyville", state:"IL"},
		{city:"Glen Ellyn", state:"IL"},
		{city:"Rogers Park", state:"IL"},
		{city:"Lake Bluff", state:"IL"},
		{city:"Schaumburg", state:"IL"},
		{city:"Clarendon Hills", state:"IL"},
		{city:"Gilberts", state:"IL"},
		{city:"Williams Bay", state:"WI"},
		{city:"Eola", state:"IL"},
		{city:"Elmwood Park", state:"IL"},
		{city:"Marengo", state:"IL"},
		{city:"Muskego", state:"WI"},
		{city:"Wilmette", state:"IL"},
		{city:"AMF Ohare", state:"IL"},
		{city:"Hampshire", state:"IL"},
		{city:"Villa Park", state:"IL"},
		{city:"Sharon", state:"WI"},
		{city:"Solon Mills", state:"IL"},
		{city:"Zion", state:"IL"},
		{city:"Franksville", state:"WI"},
		{city:"Maywood", state:"IL"},
		{city:"Pell Lake", state:"WI"},
		{city:"Round Lake", state:"IL"},
		{city:"Harwood Heights", state:"IL"},
		{city:"Caledonia", state:"WI"},
		{city:"Big Bend", state:"WI"},
		{city:"Elgin", state:"IL"},
		{city:"Darien", state:"WI"},
		{city:"Lisle", state:"IL"},
		{city:"North Chicago", state:"IL"},
		{city:"Algonquin", state:"IL"},
		{city:"Countryside", state:"IL"},
		{city:"West Dundee", state:"IL"},
		{city:"Walworth", state:"WI"},
		{city:"Schiller Park", state:"IL"},
		{city:"Garden Prairie", state:"IL"},
		{city:"Harvard", state:"IL"},
		{city:"Lyons", state:"WI"},
		{city:"Kaneville", state:"IL"},
		{city:"Genoa", state:"IL"},
		{city:"Mundelein", state:"IL"},
		{city:"Beach Park", state:"IL"},
		{city:"Hoffman Estates", state:"IL"},
		{city:"Grayslake", state:"IL"},
		{city:"Lyons", state:"IL"},
		{city:"Pingree Grove", state:"IL"},
		{city:"Kansasville", state:"WI"},
		{city:"Fox River Grove", state:"IL"},
		{city:"Roselle", state:"IL"},
		{city:"Elkhorn", state:"WI"},
		{city:"DeKalb", state:"IL"},
		{city:"Trevor", state:"WI"},
		{city:"Kenosha", state:"WI"},
		{city:"Campton Hills", state:"IL"},
		{city:"Techny", state:"IL"},
		{city:"Bensenville", state:"IL"},
		{city:"Northbrook", state:"IL"},
		{city:"New Munster", state:"WI"},
		{city:"Union", state:"IL"},
		{city:"Warrenville", state:"IL"},
		{city:"Crystal Lake", state:"IL"},
		{city:"Sugar Grove", state:"IL"},
		{city:"Oak Creek", state:"WI"},
		{city:"Berkeley", state:"IL"},
		{city:"Franklin", state:"WI"},
		{city:"La Grange", state:"IL"},
		{city:"Johnsburg", state:"IL"},
		{city:"Woodstock", state:"IL"},
		{city:"Northlake", state:"IL"},
		{city:"Bellwood", state:"IL"},
		{city:"Downers Grove", state:"IL"},
		{city:"Cortland", state:"IL"},
		{city:"Wilmot", state:"WI"},
		{city:"Medinah", state:"IL"},
		{city:"Palmyra", state:"WI"},

	];
</script>
<style>
</style>
<svelte:head>
	<title> Sewer & Drain Repair near {nnCity}, {nnState}</title>
	<meta name="description" content="KBI Plumbing Sewer & Drain is a licensed, insured, and bonded sewer and drain company that services the {nnCity}, {nnState} area.">
</svelte:head>
<h2>Sewer & Drain Repair near {nnCity}, {nnState}</h2>
<h3>Backwater Valves & Backflow Prevention In {nnCity}, {nnState}</h3>
<p>You rely on fresh water coming out of the faucets in your house and other distribution lines (to your own laundry machines, dishwashers, etc.) for many daily tasks. The probability of losing fresh water provides an unpleasant thought. Did you know that your water can be cross contaminated? Backflow valves provide that from happening. Although it is an inexpensive fix you definitely want to have a professional plumber checking your backflow system.</p>
<p>Most houses are equipped with a system that prevents waste water in the sewage system backing up into the new water source. Backflow prevention devices must get routine testing from accredited plumbers to be certain that they’re working properly and not at risk of failing. You’ll want the aid of a certified professional plumber to fix or install a backflow preventer if necessary.</p>
<p>
	{#if nnState !== "WI"}
		<a title="click here to call now" href="tel:+1-815-353-3298">KBI a call today</a>
	{:else if nnState !== "WI"}
		<a title="click here to call now" href="tel:+12622179531">KBI a call today</a>
	{/if}
	for all your backflow prevention needs. We will provide you with a FREE estimate and more information regarding backwater/backflow prevention valve systems.</p>

<h3>Battery Backup Sump Pump Protection in {nnCity}, {nnState}</h3>
<p>Ensure your house is guarded with a trusted battery backup machine from the professionals at KBI Plumbing we provide two kinds of battery backup systems for our clients. The first is a battery powered system to operate your main sump pump whenever you don’t require a pump. Our battery system may operate for up to two weeks depending on how far it runs, the dimensions of the sump pump, and also the elevation of release. Countless basements have flooded because of a power outage.</p>
<p>Our second kind is a battery backup sump pump. It’s a battery operated backup that is set up next to your primary pump.</p>

<h3>Basement Flooding Control Systems in {nnCity}, {nnState}</h3>
<p>KBI flood control experts can help you understand all of your options and determine which option is best for you.</p>
<p>There are several different types of flood control systems:</p>
<ul>
	<li>Lift Station Pumping System</li>
	<li>Overhead Sewer Flood Control System</li>
	<li>Check Valve</li>
	<li>Drainage Tile System</li>
</ul>
<p>Basements flood for multiple reasons perhaps it’s a broken sump pump, maybe you have the wrong size of sump pump or your sewer line may have an issue. Living in the {nnCity}, {nnState} area we get torrential downpours along with snowmelt, and flooding rivers when this happens, the city sewer can’t handle this amount of water. Our sewers flood over capacity and you as the homeowner can’t prevent rainwater backing up in your home or basement.</p>
<p>The older sewer systems can be upgraded to prevent sanitary sewer backups into the basement. Flood control systems are well worth it in the long run, As long as it’s maintenance yearly along with your sewer system.</p>
<p>Give
	{#if nnState !== "WI"}
	<a title="click here to call now" href="tel:+1-815-353-3298">KBI a call today</a>
		{:else if nnState !== "WI"}
			<a title="click here to call now" href="tel:+12622179531">KBI a call today</a>
	{/if}
	for your FREE estimate and more information about flood control systems for your home or business. With over 15 years of experience KBI Plumbing &amp; Drain has the expertise you need to handle all your sewer and drain problems.</p>

<h3>Sewer Camera Location Service in {nnCity}, {nnState}</h3>
<p>KBI Plumbing and Sewer have over 15 yrs experience and the camera technology in finding and identifying your sewer and drain problems. With this technology it empowers us to inspect and accurately ascertain the condition of your sewer line.</p>
<p>Video cameras are becoming among the most valuable tools in the plumbing business. Notably made watertight cameras allow for a visual inspection of sewer lines, drains and other pipes that are underground, in cement or beneath your home’s foundation.
	At KBI Plumbing our professionally trained and skilled technicians insert a flexible rod with a high-resolution video camera on its tip. We insert the camera into the sewer or drain ranging from two inches to 36 inches in diameter. The elastic pole allows the camera to traveling through the tube even around corners to observe the pipe in its entirety. Real-time video image processing allows the technician to ascertain the condition of the inside of the pipe and also comprehend potential or existing problems.
</p>
<p>
	{#if nnState !== "WI"}
		<a title="click here to call now" href="tel:+1-815-353-3298">KBI a call today</a>
	{:else if nnState !== "WI"}
		<a title="click here to call now" href="tel:+12622179531">KBI a call today</a>
	{/if}
	for your FREE estimate and more information about our camera location services.</p>
