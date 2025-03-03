<template>
    <div class=" relative">
      <header>
        <div class="flex justify-between p-1 h-12 absolute top-0 w-full  items-center">
          <h1>管理面板</h1>
          <p>欢迎回来，管理员！</p>
          <button class="border p-1" @click="logout">退出</button>
        </div>
      </header>
      <div class="h-screen pt-12 flex">
        <!-- left 菜单 -->
         <div class="  w-24" >
          <AdminMainNav></AdminMainNav>
         </div>
         <div class=" bg-blue-100 w-full overflow-auto" >
            <NuxtPage></NuxtPage>
         </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'admin'
  })
  const logout = async () => {
    await $fetch('/api/admin/logout', { method: 'POST' });
    navigateTo('/login'); // 退出登录后跳转到登录页面
  };
  </script>