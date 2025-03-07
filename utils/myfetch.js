export const myfetch = (url)=>{
    return $fetch(url,{
        baseURL:"https://server.orchids.com.cn"
    })
}

export const useMyFetch = (url,config)=>{
    return useFetch(url,{
        baseURL:"https://server.orchids.com.cn",
        ...config
    })
}