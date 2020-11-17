<script>
    export let segment;
    let drawerToggled = false;
    const toggleDrawer = () => {
        return drawerToggled = !drawerToggled;
    };
    let routes = [
        "/camera-video-inspection",
        "/contact",
        "/hydro-jetting",
        "/power-rodding",
        "/reviews",
        "/seepage-tile",
        "/sewer-drain-repair",
        "/sump-ejector-pumps",
        "/water-heaters",
    ];
</script>
<style>
    #mobile-nav aside{
        overflow-y:scroll;
    }
    /*--------------------------SIDE DRAWER BUTTON START----------------------*/
    button:focus {
        outline: none;
    }
    #side-drawer header{
        background: #161616;
        margin:0;
        padding: 1px 2px 20px 2px;
    }
    #side-drawer main{
        padding: 10px 0;
    }
    #side-drawer-button {
        position: fixed;
        z-index: 3000;
        top: 5px;
        right: 5px;
        border: none;
        background: none;
        padding: 0.5rem 1rem;
        width: 60px;
        transition: all .5s ease-out;
    }

    #side-drawer-button hr {
        border: none;
        background: black;
        height: 3px;
        width: 100%;
        margin: 5px auto;
        transition: all .5s ease-out;
    }

    #side-drawer-button .middle-line {
        width: 100%;
        opacity: 1;
    }

    #side-drawer-button.open {
        top: 19px;
        right: 250px;
        width:55px;
    }
    #side-drawer-button.open hr{
        background-color:white;
    }
    #side-drawer-button.open .top-line {
        transform-origin: center;
        transform: rotate(45deg);
        height:2px;
    }

    #side-drawer-button.open .middle-line {
        width: 0;
        opacity: 0;
        transition: all .3s ease-out;
        height:2px;
    }

    #side-drawer-button.open .bottom-line {
        transform-origin: center;
        transform: rotate(-45deg);
        margin-top: -14px;
        height:2px;
    }
    @media screen and (min-width:850px){
        #side-drawer-button{
            display:none;
        }
    }

    /*--------------------------SIDE DRAWER BUTTON END----------------------*/
    /*--------------------------SIDE DRAWER START----------------------*/

    aside {
        position: fixed;
        z-index: 2999;
        top: 0;
        right: -100%;
        width: 300px;
        height: 100vh;
        background: #222222;
        box-shadow: -4px 2px 8px rgba(0, 0, 0, .26);
        text-align: center;
        transition: all .5s ease-out;
    }

    aside.open {
        right: 0;
    }

    .main-nav-title {
        color: white;
        margin-top: 1rem;
        font-weight:400;
    }
    .main-nav-subtitle {
        color: #9a9a9a;
        font-weight:normal;
        margin-top:2px;
    }

    #main-nav > .container {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    #main-nav > .container > .menu-item {
        display: block;
        color: white;
        text-align: center;
        width: 100%;
        padding: .5em 0;
    }
    #main-nav > .container > .menu-item.active{
        background-color:var(--primary-color);
    }
    #main-nav > .container > .menu-item a {
        color: white;
        text-decoration: none;
        transition: all .2s;
    }

    #main-nav > .container > .menu-item a:hover {
        font-weight: bold;

    }
    /*--------------------------SIDE DRAWER END----------------------*/
</style>
<section id="mobile-nav" on:blur="{toggleDrawer}">
    <button aria-label="Main Menu Toggle Button" id="side-drawer-button" class="{drawerToggled ? 'open': '' }" on:click="{toggleDrawer}">
        <hr class="top-line"/>
        <hr class="middle-line"/>
        <hr class="bottom-line"/>
    </button>
    <aside id="side-drawer" class="{drawerToggled ? 'open': '' }">
        <header><h2 class="main-nav-title">815-353-3298</h2><h4 class="main-nav-subtitle">Call For A Free Estimate</h4></header>
        <main>
            <nav id="main-nav">
                <ul class="container">
                    <li class='menu-item {segment === undefined ? "active" : ""}'>
                        <a href="/" title="Go To Home Page" on:click="{toggleDrawer}">Home</a>
                    </li>
                    {#each routes as route}
                    <li class='menu-item {"/"+segment === route ? "active" : ""}'>
                        <a href="{route}" title="{route.replace(/\//g,'').replace(/-/g,' ').toUpperCase()}" on:click="{toggleDrawer}"> { route.replace(/\//g,'').replace(/-/g,' ').toUpperCase() }</a>
                    </li>
                    {/each}
                </ul>
            </nav>
        </main>
    </aside>
</section>

