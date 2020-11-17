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
    import Hero from '../../components/Hero.svelte';
    import SidebarSubnav from '../../components/SidebarSubnav.svelte';
    import CouponSidebar from '../../components/CouponSidebar.svelte';
    let locations;
    export let nnCity;
    export let nnState="IL";
</script>
<style>

</style>
<Hero heroImage="/assets/images/heros/water-heaters.jpg" heroTitle="Water Heaters | Maintenance,Replacement & Repair Services Near {nnCity}, {nnState}" heroBigText="KBI Plumbing" heroText=" Your {nnCity}, {nnState} Sewer & Drain Repair Company">
    <p>Water Heaters | Maintenance,Replacement & Repair in the {nnCity}, {nnState} area.</p>
    <a class="btn btn-light" href="/contact" title="Schedule Sewer & Drain Repair Service">Schedule Service Now</a>
</Hero>
<div class="container">
    <div class="row">
        <section class="content col-xs-12 col-sm-8">
            <slot></slot>
        </section>
        <aside class="content col-xs-12 col-sm-4">
            <SidebarSubnav />
            <CouponSidebar/>
        </aside>
    </div>
</div>
