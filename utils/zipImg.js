import Compressor from "compressorjs"

export const zipImg = async(file,size=1000,quality=0.8)=>{
    return new Promise((resolve,reject)=>{
        new Compressor(file,{
            maxWidth:size,
            quality,
            success(res){
                resolve(res)
            },
            error(err){
                reject(err)
            }
        })
    })
}