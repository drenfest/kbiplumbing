<script>
    import Hero from '../../components/Hero.svelte';

     import SidebarSubnav from '../../components/SidebarSubnav.svelte';
</script>
<style>

</style>
<Hero
        heroImage="/assets/images/heros/big-pipe.jpg"
        heroTitle="Sewer Drain Repair"
        heroBigText="KBI Plumbing"
        heroText="Your Top Rated Sewer & Drain Repair Company">
    <p>At KBI Plumbing Sewer & Drain , we use the most up to date sewer camera technology to clean, repair, and locate your sewer & drain problems. We will show you where the clog or obstruction is and give you options on how you would like us to proceed. We also fix storm drain, floor drain, and outside floor drain problems for you. Give us a call today and we will make sure you get fast reliable service at reasonable rates. </p>
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
