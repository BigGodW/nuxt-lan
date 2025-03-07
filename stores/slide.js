
export const useSlideStore = defineStore('slide',{
    state:()=>{
        return {
            homeSlide:[]
        }
    },
    getters:{
        dbcount:(state)=>{
            return state.count*2
        }
    },
    actions:{
       async getHomeSlide(){
            const {data} = await useMyFetch('/api/slides',{
                query:{
                    populate:"*"
                }
            })
            this.homeSlide =  data.value.data
        }
    }
})
