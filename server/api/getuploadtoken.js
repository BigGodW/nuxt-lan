import qiniu from 'qiniu'

export default defineEventHandler( async(event)=>{
    const accessKey = process.env.ACCESSKEY
    const secretKey = process.env.SECRETKEY
    console.log(accessKey)
    const mac = new qiniu.auth.digest.Mac(accessKey,secretKey)
    const options = {
        scope:'bgw-text',
        returnBody:'{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
    }
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    return {uploadToken}
    
})