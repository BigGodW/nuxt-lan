import { defineEventHandler, readMultipartFormData } from 'h3';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async (event) => {
  try {
    // 读取上传的文件
    const files = await readMultipartFormData(event);

    if (!files || files.length === 0) {
      return { status: 400, message: 'No files uploaded' };
    }
    // 获取当前年月
    // 创建一个新的 Date 对象，表示当前日期和时间
    const currentDate = new Date();
    
    // 获取当前年份
    const year = currentDate.getFullYear()+'';
    const month = currentDate.getMonth() + 1+'';

    // 保存文件到服务器
    const uploadsDir = join(process.cwd(), 'public/uploads',year,month); // 保存到 public/uploads 目录
    // 创建文件夹
    ensureDir(uploadsDir);  

    const savedFiles = [];
    const pathurl = []
    for (const file of files) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) 
      pathurl.push ('/uploads/'+year+'/'+month+'/'+uniqueSuffix+file.filename)
      const filePath = join(uploadsDir, uniqueSuffix+file.filename || 'uploaded_file');
      await writeFile(filePath, file.data); // 写入文件
      // 将文件信息写入数据库
      savedFiles.push(filePath);
    }

    return { status: 200, message: 'Files uploaded successfully', files: savedFiles,url:pathurl };
  } catch (error) {
    console.error('Error uploading files:', error);
    return { status: 500, message: 'Internal Server Error' };
  }
});