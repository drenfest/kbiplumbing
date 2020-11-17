<script>
    import Hero from '../../components/Hero.svelte';

     import SidebarSubnav from '../../components/SidebarSubnav.svelte';
</script>
<style>

</style>
<Hero heroImage="/assets/images/heros/water-heaters.jpg" heroTitle="Water Heaters | Maintenance,Replacement & Repair Services" heroBigText="KBI Plumbing" heroText=" Your Sewer & Drain Repair Company">
    <p>Water Heaters | Maintenance,Replacement & Repair</p>
    <a class="btn btn-light" href="/contact" title="Schedule Sewer & Drain Repair Service">Schedule Service Now</a>
</Hero>
<div class="container">
    <div class="row">
        <section class="content col-xs-12 col-sm-8">
            <slot></slot>
        </section>
        <aside class="content col-xs-12 col-sm-4">
            <SidebarSubnav />

        </aside>
    </div>
</div>
