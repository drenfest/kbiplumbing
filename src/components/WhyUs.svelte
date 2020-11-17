<script>
    import Divider from "../components/Divider.svelte";

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



    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const bandA = a.city.toUpperCase();
        const bandB = b.city.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }
    locations.sort(compare);
</script>
<style>
    .why-us-section{
        align-items:center;
        text-align:center;
    }
    .why-us-section > .container{
        padding:4rem 2rem;
    }
    .why-us-section h3{
        font-weight:normal;
    }
    h2 {
        padding:1rem;
    }
    .row img{
        margin:1rem 0;
        max-height:50px;
    }
    .row{
        margin:2rem;
    }
    .locations{
        padding:4rem;
    }
    .location-list{
        overflow-y:scroll;
        list-style:none;
        max-height:600px;
    }
    .location-list > li{
        padding:.5rem 2rem;
        text-align:center;
        margin:2rem 0;
    }
</style>
<section class="locations">
    <div class="location-container">
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <h2>Illinois</h2>
                <ul class="location-list">

                    {#each locations as location}
                        {#if location.state === "IL"}
                            <li><a href="sewer-drain-repair-{location.city.replace(' ','-').toLowerCase()}-{location.state.toLowerCase()}" title="Sewer & Drain Repair In {location.city} {location.state}">Sewer & Drain {location.city}, {location.state}</a></li>
                            <li><a href="water-heaters-maintenance-replacement-repair-{location.city.replace(' ','-').toLowerCase()}-{location.state.toLowerCase()}" title="Water Heaters | Maintenance,Replacement & Repair In {location.city} {location.state}">Water Heaters {location.city}, {location.state}</a></li>
                        {/if}
                    {/each}
                </ul>
            </div>
            <div class="col-xs-12 col-sm-6">
                <h2>Wisconsin</h2>
                <ul class="location-list">
                    {#each locations as location}
                        {#if location.state === "WI"}
                            <li><a href="sewer-drain-repair-{location.city.replace(' ','-').toLowerCase()}-{location.state.toLowerCase()}" title="Sewer & Drain Repair In {location.city} {location.state}">Sewer & Drain {location.city}, {location.state}</a></li>
                            <li><a href="water-heaters-maintenance-replacement-repair-{location.city.replace(' ','-').toLowerCase()}-{location.state.toLowerCase()}" title="Water Heaters | Maintenance,Replacement & Repair In {location.city} {location.state}">Water Heaters {location.city}, {location.state}</a></li>
                        {/if}
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</section>
<section class="why-us-section">
        <Divider>
            <h2>Why KBI Plumbing</h2>
        </Divider>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/licensed-logo.png" alt="Licensed Icon">
                <h3>Licensed</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/bonded-logo.png" alt="Bonded Icon">
                <h3>Bonded</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/rapid-response-times.svg" alt="Rapid response times Icon">
                <h3>Rapid response times</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/24-badge.png" alt="24/7 Emergency Icon">
                <h3>24/7 Emergency</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/affordable-rates.svg" alt="Affordable rates Icon">
                <h3>Affordable rates</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/satisfaction-guaranteed.svg" alt="Satisfaction Guranteed">
                <h3>Satisfaction Guranteed</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/free-estimates.svg" alt="Free Written Estimates and second opinions Icon">
                <h3>Free Written Estimates and second opinions</h3>
            </div>
        </div>
    </div>
</section>
