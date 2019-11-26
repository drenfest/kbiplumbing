<script>
    let lpageNames = [
        "sewer-drain-repair",
    ];
    let lpageCities = [
        "glenview-il",
        "spring-grove-il",
        "melrose-park-il",
        "hillside-il",
        "sleepy-hollow-il",
        "hinsdale-il",
        "mccook-il",
        "waterford-wi",
        "wayne-il",
        "powers-lake-wi",
        "river-grove-il",
        "highwood-il",
        "wadsworth-il",
        "sturtevant-wi",
        "bartlett-il",
        "long-grove-il",
        "ingleside-il",
        "sycamore-il",
        "glencoe-il",
        "great-lakes-il",
        "fox-lake-il",
        "prospect-heights-il",
        "ravinia-il",
        "naperville-il",
        "volo-il",
        "west-chicago-il",
        "bloomingdale-il",
        "south-elgin-il",
        "bristol-wi",
        "fox-valley-il",
        "racine-wi",
        "berwyn-il",
        "skokie-il",
        "elk-grove-village-il",
        "stickney-il",
        "lincolnshire-il",
        "park-city-il",
        "park-ridge-il",
        "twin-lakes-wi",
        "silver-lake-wi",
        "zenda-wi",
        "niles-il",
        "north-barrington-il",
        "hanover-park-il",
        "brookfield-il",
        "winfield-il",
        "barrington-il",
        "winthrop-harbor-il",
        "capron-il",
        "carpentersville-il",
        "cicero-il",
        "deerfield-il",
        "island-lake-il",
        "burlington-wi",
        "pleasant-prairie-wi",
        "mukwonago-wi",
        "oak-brook-il",
        "south-barrington-il",
        "dundee-il",
        "camp-lake-wi",
        "lake-geneva-wi",
        "lincoln-park-il",
        "evanston-il",
        "oak-park-il",
        "deer-park-il",
        "rochester-wi",
        "forest-park-il",
        "elk-grove-ca",
        "genoa-city-wi",
        "kildeer-il",
        "ringwood-il",
        "lake-villa-il",
        "lafox-il",
        "mount-prospect-il",
        "wonder-lake-il",
        "north-riverside-il",
        "geneva-il",
        "wheeling-il",
        "wheaton-il",
        "saint-charles-il",
        "aurora-il",
        "rolling-meadows-il",
        "broadview-il",
        "north-aurora-il",
        "northfield-il",
        "salem-wi",
        "kenilworth-il",
        "bassett-wi",
        "batavia-il",
        "carol-stream-il",
        "plato-center-il",
        "round-lake-heights-il",
        "whitewater-wi",
        "oakbrook-terrace-il",
        "woodworth-wi",
        "river-forest-il",
        "lincolnwood-il",
        "vernon-hills-il",
        "lake-zurich-il",
        "delavan-wi",
        "la-grange-park-il",
        "glendale-heights-il",
        "westchester-il",
        "fontana-wi",
        "des-plaines-il",
        "streamwood-il",
        "waukegan-il",
        "buffalo-grove-il",
        "lake-forest-il",
        "springfield-wi",
        "burlington-il",
        "east-dundee-il",
        "highland-park-il",
        "lombard-il",
        "inverness-il",
        "lakemoor-il",
        "honey-creek-wi",
        "lake-in-the-hills-il",
        "lagrange-park-il",
        "maple-park-il",
        "east-troy-wi",
        "fort-sheridan-il",
        "western-springs-il",
        "union-grove-wi",
        "gurnee-il",
        "norridge-il",
        "morton-grove-il",
        "stone-park-il",
        "alden-il",
        "russell-il",
        "la-grange-highlands-il",
        "chicago-il",
        "hines-il",
        "franklin-park-il",
        "richmond-il",
        "rosemont-il",
        "summit-il",
        "riverside-il",
        "golf-il",
        "palatine-il",
        "wasco-il",
        "hawthorn-woods-il",
        "summit-argo-il",
        "huntley-il",
        "westmont-il",
        "winnetka-il",
        "arlington-heights-il",
        "round-lake-beach-il",
        "itasca-il",
        "elburn-il",
        "eagle-wi",
        "wood-dale-il",
        "wauconda-il",
        "elmhurst-il",
        "antioch-il",
        "somers-wi",
        "lake-barrington-il",
        "burr-ridge-il",
        "hebron-il",
        "cary-il",
        "addison-il",
        "lindenhurst-il",
        "mchenry-il",
        "libertyville-il",
        "glen-ellyn-il",
        "rogers-park-il",
        "lake-bluff-il",
        "schaumburg-il",
        "clarendon-hills-il",
        "gilberts-il",
        "williams-bay-wi",
        "eola-il",
        "elmwood-park-il",
        "marengo-il",
        "muskego-wi",
        "wilmette-il",
        "amf-ohare-il",
        "hampshire-il",
        "villa-park-il",
        "sharon-wi",
        "solon-mills-il",
        "zion-il",
        "franksville-wi",
        "maywood-il",
        "pell-lake-wi",
        "round-lake-il",
        "harwood-heights-il",
        "caledonia-wi",
        "big-bend-wi",
        "elgin-il",
        "darien-wi",
        "lisle-il",
        "north-chicago-il",
        "algonquin-il",
        "countryside-il",
        "west-dundee-il",
        "walworth-wi",
        "schiller-park-il",
        "garden-prairie-il",
        "harvard-il",
        "lyons-wi",
        "kaneville-il",
        "genoa-il",
        "mundelein-il",
        "beach-park-il",
        "hoffman-estates-il",
        "grayslake-il",
        "lyons-il",
        "pingree-grove-il",
        "kansasville-wi",
        "fox-river-grove-il",
        "roselle-il",
        "elkhorn-wi",
        "dekalb-il",
        "trevor-wi",
        "kenosha-wi",
        "campton-hills-il",
        "techny-il",
        "bensenville-il",
        "northbrook-il",
        "new-munster-wi",
        "union-il",
        "warrenville-il",
        "crystal-lake-il",
        "sugar-grove-il",
        "oak-creek-wi",
        "berkeley-il",
        "franklin-wi",
        "la-grange-il",
        "johnsburg-il",
        "woodstock-il",
        "northlake-il",
        "bellwood-il",
        "downers-grove-il",
        "cortland-il",
        "wilmot-wi",
        "medinah-il",
        "palmyra-wi",
    ];
    let getLinks = ()=>{
        let landingLinksArr=[];
        let newLink = "";
        for(let lpCount = 0; lpCount < lpageNames.length;lpCount++){
            for(let lcCount = 0; lcCount < lpageCities.length;lcCount++){
                newLink = lpageNames[lpCount]+'-'+lpageCities[lcCount];
                if(!landingLinksArr.indexOf(newLink) >= 0){
                    landingLinksArr = [...landingLinksArr,newLink];
                }
            }
        }
        return landingLinksArr;
    };
    let landingLinks = getLinks();
    let landingLinksRand1 = ()=> {
        let linkArr = [];
        for (let i = 0; i < 10; i++) {
            let rng = Math.round(Math.random() * (landingLinks.length - 1));
            let linkRef = landingLinks[rng];
            let linkCityState = linkRef.replace("sewer-drain-repair-", "");
            let linkCsSplit = linkCityState.split('-');
            let linkS = linkCsSplit[linkCsSplit.length - 1].toUpperCase();
            let linkCity = linkCityState.replace("-" + linkS.toLowerCase(), '').replace("-", " ");
            let linkC = linkCity.substr(0, 1).toUpperCase() + linkCity.substr(1, linkCity.length - 1);
            if (linkCsSplit.length > 2) {
                linkC = linkCsSplit[0].substr(0, 1).toUpperCase() + linkCsSplit[0].substr(1, linkCity.length - 1) + " " + linkCsSplit[1].substr(0, 1).toUpperCase() + linkCsSplit[1].substr(1, linkCity.length - 1);
            }
            let linkTitle = linkRef.replace("sewer-drain-repair-" + linkCityState, "Sewer & Drain Repair " + linkC + " " + linkS);
            let linkText = linkRef.replace("sewer-drain-repair-" + linkCityState, "Sewer & Drain Repair " + linkC + " " + linkS);
            linkArr = [...linkArr, {href: linkRef, title: linkTitle, text: linkText}]
        }
        return linkArr;
    };
    export let linkArr = landingLinksRand1();
</script>
<style>
    footer {
        border-top: 8px solid var(--primary-light);
        background-color: var(--primary-color);
        padding: 5em 2em;
        color: #fff;
        /* background: rgb(61, 84, 103);
        background: linear-gradient(161deg, rgba(61, 84, 103, 1) 0%, rgba(82, 108, 130, 1) 100%); */
    }
    .bottombar {
        background-color: #333333;
        padding: 1.25rem;
    }
    .footercontent {
        color: #fff;
    }
    .footernav-item {
        display: block;
        width: 100%;
        padding: .25rem 0rem;
        clear: both;
        font-weight: 400;
        color: #fff;
        font-weight: 300;
        font-family: 'Oswald', sans-serif;
    }
    .footercontent p {
        font-family: 'Oswald', sans-serif;
        font-weight: 300;
    }
    .footercontent a {
        color: #fff;
    }
    .footercontent a:hover {
        color: rgba(255, 255, 255, .75);
        text-decoration: none;
    }
    .bottombar .footercontent{
        align-items:center;
    }
</style>
<footer>
    <div class="container">
        <div class="row footercontent">
            <div class="col-sm footer1">
                <h3>KBI Plumbing</h3>
                <h3><a href="tel:+1815-353-3298" title="Click Here To Call Now">1-815-353-3298</a></h3>
            </div>
            <div class="col-sm footer2">
                <a rel=prefetch class='footernav-item' href='camera-video-inspection' title="Humidification">Camera Services</a>
                <a rel=prefetch class='footernav-item' href='sump-ejector-pumps' title="Humidification">Pumps</a>
                <a rel=prefetch class='footernav-item' href='power-rodding' title="Humidification">Drain | Sewer Rodding</a>
                <a rel=prefetch class='footernav-item' href='hydro-jetting' title="Humidification">Hydro Jetting</a>
                <a rel=prefetch class='footernav-item' href='sewer-drain-repair' title="Humidification">Storm Sewer Drain</a>
                <a rel=prefetch class='footernav-item' href='seepage-tile' title="Humidification">Seepage Tile</a>
                <a rel=prefetch class='footernav-item' href='contact' title="Contact Us">Contact</a>
            </div>
            <div class="col-sm footer3">
                {#each linkArr as lk}
                <a class="footernav-item" href='/{lk.href}' title="{lk.title}">{lk.text}</a>
                {/each}
            </div>
        </div>
    </div>
</footer>
<div class="bottombar">
    <div class="container">
        <div class="row footercontent">
            <div class="col-sm">
                &copy; 2019 All Rights Reserved
            </div>
            <div class="col-sm">
                <a href="https://insightweb.net" title="Site Designed By Insight Marketing Solutions">
                    <img src="/assets/images/designbyinsight.png" alt="Insight Marketing Solutions Inc Logo"/>
                </a>
            </div>
        </div>
    </div>
</div>
