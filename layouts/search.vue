<template>
    <div class="">
        <div class="flex p-2  h-10 items-center justify-between">
            <div @click="router.back()"><返回</div>
            <input type="text" class="border-2 rounded border-slate-300 bg-slate-200">
            <button class="btn btn-sm">搜索</button>
        </div>
        <slot></slot>
        <Myfooter></Myfooter>
    </div>
</template>

<script setup>
    const router = useRouter()

</script>