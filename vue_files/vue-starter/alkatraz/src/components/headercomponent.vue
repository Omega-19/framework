<script>
export default {
    data(){
        return {
            links:[ "Accueil","Galerie","A propos","Gallerie",]
        }
    }
}
</script>

<template>
<div>LOGO</div>
<ul>
    <li v-for="(link, i) in links" :key="i">
        <a href="#">{{link}}</a>
    </li>
    
</ul>
</template>