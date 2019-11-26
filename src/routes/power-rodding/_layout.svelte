<script>
    import Hero from '../../components/Hero.svelte';

     import SidebarSubnav from '../../components/SidebarSubnav.svelte';
</script>
<style>

</style>
<Hero
        heroImage="/assets/images/heros/power-rodding.jpg"
        heroTitle="Drain | Sewer Rodding"
        heroBigText="Sewer & Drain Drain | Sewer Rodding"
        heroText="Your Top Rated Sewer & Drain Repair Company">
    <p>Are your pipes clogged? We can help.
        “Snaking” (or rodding) a drain line can fix both basic and complex clogs. For basic clogs the team at KBI Plumbing rely on drain augers, also called a drain snake to clear up the blockage. For more complex clogging trust our professional staff to rod your drain utilizing our fiber optic cameras—free of charge—to inspect our work and ensure quality and efficient work while we de-clog your drains. </p>
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
