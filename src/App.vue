<template>
    <div>
        app vue
    </div>
    <Son @getGift="getGift"/>
</template>
<script setup lang="ts">
    import Son from './components/Son.vue'
    const getGift = (gift:string) =>{
        console.log('parent to son:'+gift)
    }
</script>
<style scoped>

</style>