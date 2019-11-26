<script>
    import Coupon from './Coupon.svelte';
</script>
<style>
    .sidebar-coupons{
        padding:2rem 1rem;
    }
</style>
<section class="sidebar-coupons">
    <Coupon couponPrice="$89" couponTitle="Secondary Sewer Line Drain Rodding" couponSubtitle="One time payment" couponText="Not to be combined with any other discount or offer"/>
    <br>
    <Coupon couponPrice="$129" couponTitle="Main Sewer Line Drain Rodding" couponSubtitle="One time payment" couponText="Not to be combined with any other discount or offer"/>
    <br>
    <Coupon couponPrice="Starting at $385" couponTitle="Hydro Jetting" couponSubtitle="One time payment" couponText="Not to be combined with any other discount or offer"/>
</section>
