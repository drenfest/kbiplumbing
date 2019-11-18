<script>
    import Hero from '../../components/Hero.svelte';

    import SidebarSubnav from '../../components/SidebarSubnav.svelte';
</script>
<style>

</style>
<Hero
        heroImage="/assets/images/heros/camera-inspection.jpg"
        heroTitle="Camera Location Services"
        heroBigText="Camera Inspection"
        heroText="Your Top Rated Sewer & Drain Repair Company">
    <p>When it comes to sewer line inspections, KBI has you covered. We use top of the line fiber optic cameras to provide the most effective inspections possible. With this technology we are able to accurately and effectively locate exactly where the sewer or other pipelines are running, as well as find cracks and breaks along the pipes. Our fiber optic inspections allow us to see every inch of your plumbing system to fix your current problem and prevent future plumbing issues at the same time. </p>
    <a class="btn btn-light" href="/contact" title="Schedule Camera Inspection Service Now">Schedule Service Now</a>
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
