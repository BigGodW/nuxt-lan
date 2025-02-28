<template>
    <div class="">
        <div class="flex p-2 h-10 fixed top-0 w-full bg-white  h-10 items-center justify-between">
            <UIcon @click="router.back()"name="streamline:computer-keyboard-return-2-keyboard-arrow-return-enter" class="w-5 h-5" />
            <input type="text" class="border-2 rounded border-slate-300 bg-slate-200">
            <button class="btn btn-sm">搜索</button>
        </div>
        <div class=" h-10"></div>
        <slot></slot>
        <Myfooter></Myfooter>
    </div>
</template>

<script setup>
    const router = useRouter()

</script>