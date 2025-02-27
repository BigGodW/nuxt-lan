<template>
    <div class=" bg-white flex shadow-sm fixed z-50 p-2 items-center
         top-0 w-full h-12">
      <div class="flex-1">
        <nuxt-link to="/" class="btn btn-ghost text-2xl font-bold">中国兰花博览园</nuxt-link>
      </div>
      <div class="flex-none">
        <input class="w-24 rounded-full placeholder:text-center placeholder:text-white border border-blue-600 bg-blue-400 mr-2" type="search" placeholder="  搜索"  name="" id="" @click="clickSearch">
        <button class="">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block h-5 w-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
        </button>
      </div>
    </div>
  </template>
  <script setup>
  const clickSearch = ()=>{
    navigateTo('/search')
  }
  </script>