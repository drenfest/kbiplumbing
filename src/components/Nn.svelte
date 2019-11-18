<script>
    export let content="";
    export let nnCity="";
    export let nnState="";
    import {onMount} from 'svelte';
    onMount(()=>{
        if(nnCity.length > 1 && nnState.length > 1){
            let pms = `?city=${nnCity.replace('-',' ')}&state=${nnState}`;
            let uri = "/nn.php?"+encodeURI(pms);
            fetch(uri).then(function(response) {
                response.text().then(function(text) {
                    content = text;
                })
            });
        }else{
            fetch('/nn.php').then(function(response) {
                response.text().then(function(text) {
                    content = text;
                })
            });
        }

    });

</script>
<style>
    .nn-section{
        padding:2rem;
    }
</style>
<section class="nn-section container">
    {@html content}
</section>
