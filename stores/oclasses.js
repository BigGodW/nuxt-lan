
export const useOrchidClass = defineStore('orchidclass',{
    state:()=>{
        return {
            orchidClassList:[]
        }
    },
    getters:{
        iOrchidClassList:(state)=>{
            return state.orchidClassList?.map((item)=>{
                return {
                    id:item.id,
                    title:item.title
                }
            })
        }
    },
    actions:{
        async getOrchidClassList(){
            const {data} = await useMyFetch('/api/orchidclasses')
            this.orchidClassList = data.value.data
        }
    }
})