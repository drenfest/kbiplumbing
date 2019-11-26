<script>
    import Hero from '../../components/Hero.svelte';

     import SidebarSubnav from '../../components/SidebarSubnav.svelte';
</script>
<style>

</style>
<Hero
        heroImage="/assets/images/heros/hydro-jetting.jpg"
        heroTitle="Hydro Jetting"
        heroBigText="Starting at $385"
        heroText="Your Top Rated Sewer & Drain Repair Company">
    <p>To get the best clean of your drainage systems trust KBI Plumbing’s Hydro Jetting process. Hydro Jetting is the process of using a high-pressure flow of water to scour the interior of plumbing pipes. The professionals at KBI Plumbing use a machine to create water pressure running through a distribution head that removes scales, grease and other debris that builds up inside pipes over time. </p>
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
