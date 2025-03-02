export default defineEventHandler( async(event)=>{
    
    try{
        const oclassList = await prisma.class.findMany()
        return {oclassList}
    }catch(err){
        return {status:500,message:"数据库查询失败"}
    }
})