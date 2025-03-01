

export default defineEventHandler( async(event)=>{
    
    try{
        const res = await prisma.class.findMany()
        return {status:200,res}
    }catch(err){
        return {status:500,message:"数据库查询失败"}
    }


})