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
        max-height:50px;
    }
    .row{
        margin:2rem;
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
                <img src="/assets/images/icons/rapid-response-times.svg" alt="Rapid response times Icon">
                <h3>Rapid response times</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/24-badge.png" alt="24/7 Emergency Icon">
                <h3>24/7 Emergency</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/affordable-rates.svg" alt="Affordable rates Icon">
                <h3>Affordable rates</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/satisfaction-guaranteed.svg" alt="Satisfaction Guranteed">
                <h3>Satisfaction Guranteed</h3>
            </div>
            <div class="col-xs-12 col-md">
                <img src="/assets/images/icons/free-estimates.svg" alt="Free Written Estimates and second opinions Icon">
                <h3>Free Written Estimates and second opinions</h3>
            </div>
        </div>
    </div>
</section>
