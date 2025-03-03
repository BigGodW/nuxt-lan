import { defineEventHandler, deleteCookie } from 'h3';

export default defineEventHandler((event) => {
  deleteCookie(event, 'admin_session'); // 删除会话 Cookie
  return { success: true, message: '退出登录成功' };
});