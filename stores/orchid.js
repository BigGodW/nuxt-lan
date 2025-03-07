
export const useOrchidStore = defineStore('orchid',{
    state:()=>{
        return {
            orchidList:[]
        }
    },
    getters:{
        iOrchidList:(state)=>{
            return state.orchidList?.map((item)=>{
                return {
                    id:item.id,
                    title:item.title
                }
            })
        }
    },
    actions:{
        async getOrchidList(){
            const {data} = await useMyFetch('/api/orchids',{
                query:{
                    populate:"*"
                }
            })
            this.orchidList = data.value.data
        }
    }
})