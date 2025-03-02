export const uploadflie = async (file, size, quality) => {
  // 压缩图片
  const minFile = await zipImg(file, size, quality);
  // 获取七牛云上传token
  const { uploadToken } = await $fetch("/api/getuploadtoken");
  const formData = new FormData();
  const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  formData.append("key", uniqueSuffix);
  formData.append("file", minFile);
  formData.append("token", uploadToken);
  // 上传七牛云
  let imgInfo = {};
  try {
    imgInfo = await $fetch("https://up-z2.qiniup.com", {
      method: "post",
      body: formData,
    });
  } catch (error) {
    console.log("图片上传失败");
  }
  const baseUrl = "https://img.wubug.cn/";
  imgInfo.url = baseUrl + imgInfo.key;
  // 上传成功，将图片信息保存到数据库
  try {
    await $fetch("/api/img/set", {
      method: "post",
      body: {
        key: imgInfo.key,
        url: imgInfo.url,
      },
    });
    console.log(imgInfo)
    return { message: "上传成功", url: imgInfo.url };
  } catch (error) {
    console.log("图片添加数据库失败");
  }
};
