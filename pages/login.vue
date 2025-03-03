<template>
    <div class='border bg-blue-300 flex flex-col justify-center items-center w-screen h-screen'>
        <img class="w-1/3 max-w-48" src="/img/兰花博览园logo.png" alt="">
      <h1 class='text-2xl my-2'>管理员登录</h1>
      <form @submit.prevent="login">
        <div class='flex justify-between my-2'>
          <label for="username">用户名:</label>
          <input id="username" v-model="username" type="text" required />
        </div>
        <div class='flex justify-between'>
          <label for="password">密码:</label>
          <input id="password" v-model="password" type="password" required />
        </div>
        <button class=" rounded-md bg-blue-500 w-full my-2 p-1" type="submit">登录</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    layout: 'blankpage'
})
  const username = ref('');
  const password = ref('');
  const errorMessage = ref('');
  
  const login = async () => {
    try {
      const response = await $fetch('/api/admin/login', {
        method: 'POST',
        body: {
          username: username.value,
          password: password.value,
        },
      });
  
      if (response.success) {
        navigateTo('/admin'); // 登录成功后跳转到管理面板
      } else {
        errorMessage.value = response.message;
      }
    } catch (error) {
      errorMessage.value = '登录失败，请重试';
    }
  };
  </script>
  
  <style>
  .error {
    color: red;
  }
  </style>