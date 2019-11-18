<script>
    export let couponPrice;
    export let couponTitle;
    export let couponSubtitle;
    export let couponText = "Not to be combined with any other discount or offer";
</script>
<style>
    .coupon{
        padding-bottom:0;
        min-height:225px;
    }
    .card-title{
        color: var(--primary-color);
        font-weight:700;
        text-transform: uppercase;

    }
    .card-footer{
        margin-bottom: 0px;
        background-color:#95A1AC;
    }
    .card-subtitle{
        font-size:1rem;
        margin-bottom:1rem;
        font-size:18px;
    }

    .card-text {

        line-height:1.2em;
        font-size:14px;
    }
   .card-s {
   padding:2em;
   }
</style>
<div class="coupon card text-center">
    <div class="card-body card-s">
        <h2 class="card-title">{couponPrice}</h2>
        <h3 class="card-subtitle">{couponTitle} <br> {couponSubtitle}</h3>
        <p class="card-text">{couponText}</p>
        <img alt="KBI Plumbing Logo" src="/assets/images/logo.jpg">
    </div>
</div>
