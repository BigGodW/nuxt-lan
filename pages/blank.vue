<template>
    <h1 class="sm:hidden">手机端</h1>
    <h1 class="hidden sm:block lg:hidden">平板端</h1>
    <h1 class="hidden lg:block">电脑端</h1>
    {{ useTypes.iOrchidTypeList }}
    <div>
        <p>文件处理</p>
        <input type="file" @change="upload" multiple>
        <div v-if="files.length == 0" class="border aspect-square w-40 flex justify-center items-center">
            <svg class="icon text-5xl" aria-hidden="true">
                <use xlink:href="#icon-a-fangda2"></use>
            </svg>
        </div>
       <div class="flex">
        <div  class="border aspect-square w-40" v-for="file in imglist">
            <img class="w-full h-full object-cover"  :src="file.url+'?imageView2/0/w/300'" alt="">
        </div>
       </div>
        <img :src="uploadUrl" v-if="uploadUrl" alt="">
    </div>
    <button @click="setimg" class="border p-2">添加图片</button>

</template>
<script setup>
const useTypes = useOrchidType()
definePageMeta({
    layout: 'blankpage'
})
const files = ref([])
const uploadUrl = ref('')
const upload = async (e) => {
    const file = e.target.files[0]
    files.value.push(URL.createObjectURL(file))
    const res = await uploadflie(file)
    uploadUrl.value = res.url
    console.log(res)
}
const {data:imglist} = await useFetch('/api/img/all')

</script>