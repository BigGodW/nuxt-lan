<template>
    <!-- name of each tab group should be unique -->
    <div class=" p-2 bg-slate-50 flex overflow-scroll">
        <button class=" p-2 rounded-lg flex-none"
        :class="{'bg-blue-400': accont == 0}"
        @click="clickbtn(0)"
        >推荐</button>
        <button class=" p-2 rounded-lg flex-none"
        :class="{'bg-blue-400': accont == item.id}"
        v-for="(item) in useOclass.iOrchidClassList" :key="item.id"
        @click="clickbtn(item.id)"
        >{{ item.title }}</button>
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
const useOclass = useOrchidClass()


</script>