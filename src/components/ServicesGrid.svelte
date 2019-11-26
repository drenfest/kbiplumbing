<script>

</script>
<style>
    .grid{
        display:grid;
        grid-template-columns: 1fr;
        grid-gap:1rem;
        text-align:center;
        padding:3rem 1rem;
    }
    .service{
        display:flex;
        flex-direction:column;
        justify-content:center;
        min-height:300px;
        max-height:300px;
        font-size:2rem;
        color:white;
        font-weight:bold;
        background-color:rgba(0,0,0,.4);
        background-blend-mode:overlay;
        font-family: 'Oswald', sans-serif;
        background-size: cover;
        background-position: center center;

    }
    .camera-inspection{
        background-image:url("/assets/images/services/camera-inspection.png");
    }
    .sump-pump{
        background-image:url("/assets/images/services/sump-pump.jpg");
    }
    .power-rodding{
        background-image:url("/assets/images/services/power-rodding.jpg");
    }
    .hydro-jetting{
        background-image:url("/assets/images/services/hydro-jetting-sewer-line.png");
    }
    .storm-sewer{
        background-image:url("/assets/images/services/storm-drain.jpg");
    }
    .seepage-tile{
        background-image:url("/assets/images/services/seepage-tile.jpg");
    }
    @media screen and (min-width:768px){
        .grid{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media screen and (min-width:992px){
        .grid{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>
<section class="services-grid">
    <div class="container">
        <div class="grid">
            <a class="service camera-inspection" title="Read About Our Camera Locating Services" href="/camera-video-inspection">Camera Location Services</a>
            <a class="service sump-pump" title="Read About Our Sump & Ejector Pump Services" href="/sump-ejector-pumps">Sump | Ejector Pumps</a>
            <a class="service power-rodding" title="Read About Our Drain | Sewer Rodding Services" href="/power-rodding">Drain | Sewer Rodding</a>
            <a class="service hydro-jetting" title="Read About Our Hydro Jetting Services" href="/hydro-jetting">Hydro Jetting</a>
            <a class="service storm-sewer" title="Read About Our Storm Sewer Drain Services" href="/sewer-drain-repair">Storm Sewer Drain</a>
            <a class="service seepage-tile" title="Read About Our Seepage Tile Services" href="/seepage-tile">Seepage Tile</a>
        </div>
    </div>
</section>
