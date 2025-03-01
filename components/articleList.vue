<template>
    <div>
        <h1>文章列表</h1>
        <div>
            <!-- 文章展示列表 -->
            <BaseArticleItem 
            v-for="i in 4" 
            title="兰花管护小贴士" 
            description="兰花管护中经常遇到的一些问题问题问题问题问题问题问题问题..."
            imgsrc="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" :articleId="i"
></BaseArticleItem>
        </div>
    </div>
</template>