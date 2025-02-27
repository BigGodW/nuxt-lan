<template>
    <div class=" ">
        <div class="h-40 bg-amber-600 rounded-2xl m-2"></div>
        <!-- 兰花分类 顶部固定12 -->
        <ul class="list-none text-lg flex  sticky top-12 overflow-x-scroll bg-white z-10
        *:text-nowrap
         *:m-2  *:px-2 *:rounded-md">
            <li class=" font-bold" v-for="(value,index) in classN" :key="index"
            :class="{'bg-blue-400 text-white': classIndex == index}"
            @click="changeClass(index)"
            >{{ value }}</li>
        </ul>
        <div class="">

            <ul class="index-1 w-20 text-right float-left bg-amber-100 sticky top-24
        *:m-2  *:p-1 
        ">
                <li v-for="(value,index) in typeS" :key="index"
                :class="{'border-l-4 border-blue-400':typeIndex == index}"
                @click="changeType(index)"
                >{{ value }}</li>
            </ul>
            <div class="ml-18">
                <div class=" grid grid-cols-2">
                    <div v-for="i in 10" class=" 
                    rounded-xl 
                    m-1 p-1 bg-amber-100 shadow-lg">
                        <div class="w-full rounded-xl aspect-square">
                            <img src="https://img.wubug.cn/%E6%A2%85-%E6%96%B9%E5%BD%A2.jpg "
                            class="rounded-md w-full object-cover"
                            alt="">
                        </div>
                        <p class="text-center">兰花名字</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

</template>
<style>
::-webkit-scrollbar {
    display: none;
}
</style>
<script setup>
const classN = ref(['推荐','春兰','春剑','蕙兰','莲瓣兰','夏兰','其他'])
const typeS = ref(['推荐','素花','荷瓣','梅瓣','水仙瓣','奇花','其他'])
const classIndex = ref(0)
const typeIndex = ref(0)
const changeClass = (index)=>{
    classIndex.value = index
}
const changeType = (index)=>{
    typeIndex.value = index
}

</script>