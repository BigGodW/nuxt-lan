import prisma from "../utils/prisma"

export default defineEventHandler( async(event)=>{
    
    try{
        const types = await prisma.type.findMany()
        return {status:200,types}
    }catch(err){
        return {status:500,message:"数据库查询失败"}
    }


})