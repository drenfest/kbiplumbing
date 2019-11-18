<script>
    import Hero from '../../components/Hero.svelte';

     import SidebarSubnav from '../../components/SidebarSubnav.svelte';
</script>
<style>

</style>
<Hero
        heroImage="/assets/images/heros/sump-pump-setup.jpg"
        heroTitle="Sump and ejector pump services"
        heroBigText="KBI Plumbing"
        heroText="Your Top Rated Sewer & Drain Repair Company">
    <p>KBI Plumbing offers repairs, inspections and replacement  services to keep your sump pump working properly to prevent any sort of malfunction in case of a storm.
    </p>
    <a class="btn btn-light" href="/contact" title="Schedule Hvac Repair Or Hvac Installation Service">Schedule Service Now</a>
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
