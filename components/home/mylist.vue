<template>
    <div class=" grid grid-cols-2 p-1 sm:grid-cols-3 lg:grid-cols-4">
            <!-- 兰花展示列表 -->
            <BaseOrchidItem v-for="i in 6" title="西部荷王" :orchid-id="1"
                img-src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" ltype="荷瓣" lclass="春剑">
            </BaseOrchidItem>
    </div>
</template>