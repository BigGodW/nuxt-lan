export default defineEventHandler( async(event)=>{
    
    try{
        const orchidClassList = await prisma.class.findMany()
        return {orchidClassList}
    }catch(err){
        return {status:500,message:"数据库查询失败"}
    }
})