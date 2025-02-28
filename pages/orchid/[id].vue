<template>
    <h1>兰花详情页{{ id }}</h1>
</template>
<script setup>
const route = useRoute()
const id = route.params.id
</script>