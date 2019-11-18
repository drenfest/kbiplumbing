<script>
    import Hero from '../../components/Hero.svelte';

     import SidebarSubnav from '../../components/SidebarSubnav.svelte';
</script>
<style>

</style>
<Hero
        heroImage="/assets/images/heros/seepage-tile.jpg"
        heroTitle="Seepage Tile"
        heroBigText="KBI Plumbing"
        heroText="Your Top Rated Sewer & Drain Repair Company">
    <p>Protecting the pipework around the perimeter of your property’s foundation starts with annual pipe inspection. KBI Plumbing inspects seepage tile – the pipework around the perimeter of your property’s foundation leading to your sump pump, to relieve hydrostatic pressure. Annual inspection and cleaning is a preventative rule of thumb for all plumbing companies to ensure drain tile pipes are functioning as they should. </p>
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
