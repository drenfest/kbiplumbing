<script>

</script>
<style>
    .divider{
        position:relative;
        background-color:var(--success);
        color:white;
        font-size:25px;
        padding:2rem;
    }
    .divider > .container{
        position:relative;
        z-index:3;
    }
    .diamond-box{
        display:block;
        position:absolute;
        width:50px;
        height:50px;
        transform:rotate(45deg);
        background-color:var(--success);
        bottom:-25px;
        left:50%;
        z-index:2;
        margin-left:-25px;
    }
    .divider > .container > *{
    color:#ffffff!important;
    text-transform:uppercase;

    }

</style>
<section class="divider">
    <div class="container text-center">
        <slot></slot>
    </div>
    <div class="diamond-box">
    </div>
</section>
