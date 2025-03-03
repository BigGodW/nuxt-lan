<template>
    <div>
        
        <div>
            <div class="flex justify-between">
                <h1>兰花管理</h1>
                <UInput  placeholder="Filter people..."  />
                <UButton>添加兰花</UButton>
            </div>
            <UTable :rows="orchidList" :columns="titleList">
                <template #img-data="{row}" >
                    <div class="w-20 aspect-square bg-red-200">
                        <img class="w-full object-cover" :src="row.img" alt="">
                    </div>
                </template>
                <template #set-data="{row}" >
                    <div class="w-20 *:border *:text-white *:rounded-lg  *:my-1  flex flex-col">
                        <button class="bg-blue-400" @click="setOrchid(row.id)">编辑</button>
                        <button class="bg-red-400" @click="deleteOrchid(row.id)">删除</button>
                    </div>
                </template>
            </UTable>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'blankpage'
})
const orchidList = [
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
    {id:1,name:"红香妃",class:"蕙兰",type:"素花",img:"http://localhost:3001/img/%E4%BA%8C%E7%BB%B4%E7%A0%81.webp"},
]
const titleList = [
    {key:"id",label:"ID"},
    {key:"img",label:"封面"},
    {key:"name",label:"名字"},
    {key:"class",label:"分类"},
    {key:"type",label:"类型"},
    
    {key:"set",label:"编辑"},
]
const setOrchid = (index)=>{
    console.log('编辑兰花：',index)
}
const deleteOrchid = (index)=>{
    console.log('删除兰花：',index)
}
</script>