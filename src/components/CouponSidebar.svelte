<script>
    import Coupon from './Coupon.svelte';
</script>
<style>
    .sidebar-coupons{
        padding:2rem 1rem;
    }
</style>
<section class="sidebar-coupons">
    <Coupon couponPrice="$85 Flat-rate" couponTitle="Gas Furnace or A/C Cleaning" couponSubtitle="with FREE Safety Inspection!" couponText="Not to be combined with any other discount or offer"/>
    <br>
    <Coupon couponPrice="$200 Off" couponTitle="Any New Furnace or A/C Installation" couponSubtitle="" couponText="Not to be combined with any other discount or offer"/>
    <br>
    <Coupon couponPrice="$50 off" couponTitle="Any Service Repair on Furnace or A/C" couponSubtitle="" couponText="Not to be combined with any other discount or offer"/>
</section>
