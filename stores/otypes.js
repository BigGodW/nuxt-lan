
export const useOrchidType = defineStore('orchidtype',{
    state:()=>{
        return {
            orchidTypeList:[]
        }
    },
    getters:{
        iOrchidTypeList:(state)=>{
            return state.orchidTypeList.map((item)=>{
                return {
                    id:item.id,
                    title:item.title
                }
            })
        }
    },
    actions:{
        async getOrchidTypeList(){
            const {data} = await useFetch('/api/orchidtype')
            this.orchidTypeList = data.value.orchidTypeList
        }
    }
})