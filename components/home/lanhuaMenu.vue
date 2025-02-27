<template>
    <!-- name of each tab group should be unique -->
    <div class=" p-2 bg-slate-50">
        <button class=" p-2 rounded-lg"
        :class="{'bg-blue-400': accont == index}"
        v-for="(value,index) in listName" :key="value"
        @click="clickbtn(index)"
        >{{ value }}</button>
    </div>
</template>
<script setup>
const listName = ref(['推荐','春兰','春剑','蕙兰','莲瓣兰','夏兰','其他'])
const accont = ref(0)
const quren = computed(()=>{

})
const clickbtn = (i)=>{
    accont.value = i
    console.log(i)
}
</script>