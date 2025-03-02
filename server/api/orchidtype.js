export default defineEventHandler( async(event)=>{
    
    try{
        const orchidTypeList = await prisma.type.findMany()
        return {orchidTypeList}
    }catch(err){
        return {status:500,message:"数据库查询失败"}
    }
})