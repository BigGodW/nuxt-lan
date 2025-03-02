<template>
    <h1 class="sm:hidden">手机端</h1>
    <h1 class="hidden sm:block lg:hidden">平板端</h1>
    <h1 class="hidden lg:block">电脑端</h1>
   {{ useTypes.iOrchidTypeList }}
   <div>
    <p>文件处理</p>
    <input type="file" @change="geiFile" multiple>
    <div v-if="files.length == 0" class="border aspect-square w-40 flex justify-center items-center">
        <svg class="icon text-5xl" aria-hidden="true" >
            <use xlink:href="#icon-a-fangda2"></use>
        </svg>
    </div>
    <div v-for="file in files" class="border aspect-square w-40">
        <img class="w-full h-full object-cover" :src="file" alt="">
    </div>
    <img v-if="uploadUrl" :src="uploadUrl" alt="">
   </div>
  

</template>
<script setup>
const useTypes = useOrchidType()
definePageMeta({
  layout: 'blankpage'
})
const files = ref([])
const uploadUrl = ref('')
const geiFile = async(e)=>{
    const file = e.target.files[0]
    files.value.push(URL.createObjectURL(file)) 
    const formData = new FormData()
    formData.append('file',file)
    const {data:res} = await useFetch('/api/upload',{
        method:"post",
        body:formData
    })
    uploadUrl.value = res.value.url[0]
    console.log(res.value.url[0])
}
</script>