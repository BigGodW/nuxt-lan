export default defineEventHandler(async (event) => {
  try {
    const res = await prisma.img.findMany();
    return res;
  } catch (err) {
    return { status: 500, message: "数据库查询失败" };
  }
});
