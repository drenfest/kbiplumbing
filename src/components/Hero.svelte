<script>
    export let heroImage="/assets/images/heros/home-hero.jpg";
    export let heroTitle="Providing Your Family";
    export let heroBigText="Affordable & Quality HVAC Services For Over 30 Years";
    export let heroText=" Your Hvac | A/C | Furnace Installation & Repair Company";
</script>
<style>
    img {
        max-width: none;
    }
    #hero-section{
        position:relative;
        overflow:hidden;
        background-color:var(--primary-color);
        padding: 5rem 2rem;

    }
    #hero-section .grid-container{
        display:grid;
        grid-template-columns:100%;
    }
    .hero-left{
        position:relative;
        text-align:left;
        height:100%;
        z-index:3;
        background-color:var(--primary-color);
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        align-content:center;
    }
    .hero-right{
        display:none;
        position:relative;
        height:100%;
        margin:0;
        padding:0;
        z-index:1;
    }
    .hero-image{
        max-height:450px;
    }
    .slant-box{
        position:absolute;
        background-color:var(--primary-color);
        border: none;
        z-index:2;
        top:0;
        left:23.5%;
        margin:0;
        padding:0;
        transform: skewX(-30deg);
        width:100%;
        height:100%;
    }
    .white-hr{
        background: #ffffff;
        position: relative;
        z-index: 14;
        width: 100%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    .twenty-four-seven{
        position:absolute;
        right:20px;
        bottom:15%;
    }
    .hero-title, .hero-big-text, .hero-text, .hero-link{
        position:relative;
        z-index:3;
        color:white;
        text-align:left;
    }
    .hero-title{
        font-size:25px;
        font-weight:300;
        text-transform: uppercase;
        width: 100%;
    }
    .hero-big-text{
        font-size:35px;
        font-weight:700;
        text-transform: none;

    }
    .hero-text{
        align-self:flex-start;
        font-size:18px;
    }
    .slotted-content{
        position:relative;
        z-index:3;
        align-self:flex-start;

        color:white;
    }
    @media screen and (min-width: 768px){
        #hero-section{
            padding: 0;
        }
        #hero-section .grid-container{
            grid-template-columns: 50% 50%;
        }
        .hero-right{
            display:block;
        }
        .slant-box{
            left:37.5%;
        }
    }
    @media screen and (min-width: 1200px){
        .slant-box{
            left:23.5%;
        }
        .twenty-four-seven{
            right:20px;
            bottom:8%;
        }
        .hero-title{
            font-size:25px;
        }
        .hero-big-text{
            font-size:35px;
        }
    }
</style>
<section id="hero-section">
    <div class="grid-container container">
        <div class="hero-left">
            <hr class="slant-box">
            <h1 class="hero-title">{ heroTitle } <br>
                <span class="hero-big-text">{ heroBigText }</span>
            </h1>
            <hr class="white-hr">
            <p class="hero-text">{ heroText }</p>
            <div class="slotted-content">
                <slot></slot>
            </div>
        </div>
        <div class="hero-right">
            <img class="hero-image" src='{heroImage}' alt="{heroTitle}" />
        </div>
    </div>
</section>
