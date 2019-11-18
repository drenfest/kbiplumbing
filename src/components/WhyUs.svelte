<script>
    import Divider from "../components/Divider.svelte";
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
    }
</style>
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
                <img src="/assets/images/icons/insured-logo.png" alt="Insured Icon">
                <h3>Insured</h3>
            </div>
        </div>
    </div>
</section>
