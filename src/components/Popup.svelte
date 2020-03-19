<script>
    import { writable} from 'svelte/store';
    export let linkHref;
    export let linkTitle;
    export let linkText;
    export let title="";
    let visited = false;
    function triggerModal(){
        visited = !visited;
    }
console.log(visited.visited);
</script>
<style>
.modal-section{
    position:absolute;
    background:rgba(0,0,0,.7);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-content:center;
    height:100vh;
    width:100vw;
    top:0;
    z-index:2222;
}
    .modal-body{
        max-width:75%;
        background:white;
        text-align:center;
        height:50vh;
        width:50vw;
        display:flex;
        flex-direction:column;
        justify-content:center;
        max-height:300px;
        width:75%;
    }
</style>
{#if !visited}
<section class="modal-section">
    <div class="modal-body">
        <div class="modal-title">
            <h2>{title}</h2>
        </div>
        <div class="modal-text">
            <slot></slot>
        </div>
        <div class="modal-actions">
            <a class="btn btn-primary" on:click="{triggerModal}" href="{linkHref}" title="{linkTitle}">{linkText}</a>
            <button class="btn btn-danger" on:click="{triggerModal}">Close</button>
        </div>
    </div>
</section>
{/if}
