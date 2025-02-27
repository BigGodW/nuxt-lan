<template>
    <footer class=" mb-10 bg-base-200 flex flex-col-reverse 
    md:flex-row
    md:items-center text-base-content p-2 md:p-10">
        <aside class="flex items-center">
            <img class="w-1/3 max-w-48" src="/img/兰花博览园logo.png" alt="">
            <p class="text-sm sm:text-lg">
                中国兰花博览园
                <br />
                公司地址：四川省成都市龙泉驿区西河街道天平村4组 
                <br />
                成都市兰花协会城区分会
                <br />
                客服电话：18190830063
            </p>
        </aside>
        <div class="grid grid-cols-3">
            <nav class="flex flex-col items-center p-2" v-for="i in 5">
            <h6 class="text-center">抖音</h6>
            <img class="m-2 max-w-32 w-full" src="/img/二维码.webp" alt="">
        </nav>
       
        </div>
    </footer>
</template>