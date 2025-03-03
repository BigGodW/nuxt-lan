import { defineEventHandler, readBody, setCookie } from 'h3';

// 模拟管理员数据
const adminUser = {
  username: 'admin',
  password: 'admin', // 实际项目中应使用加密密码
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body.username === adminUser.username && body.password === adminUser.password) {
    setCookie(event, 'admin_session', 'authenticated', { httpOnly: true }); // 设置会话 Cookie
    return { success: true, message: '登录成功' };
  } else {
    return { success: false, message: '用户名或密码错误' };
  }
});