export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    
    try{
        const res =await prisma.img.create({
            data:body
        })
        return res
    
    }catch(err){
        return {status:500,message:"照片添加失败"}
    }


})