<template>
  <button @click="hClick">from parent :{{ parentval }}</button>
</template>

<script setup lang="ts">

    export interface Props{
        parentval?:string
    }
const props = withDefaults(defineProps<Props>(),{
    parentval:"this is from parent msg"
})

const emit = defineEmits<{
    (e:'getGift',gift:string):void
}>()
const hClick=()=>{
    emit('getGift','from son gift')
}
</script>

<style scoped></style>
