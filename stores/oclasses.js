
export const useOrchidClass = defineStore('orchidclass',{
    state:()=>{
        return {
            orchidClassList:[]
        }
    },
    getters:{
        iOrchidClassList:(state)=>{
            return state.orchidClassList.map((item)=>{
                return {
                    id:item.id,
                    title:item.title
                }
            })
        }
    },
    actions:{
        async getOrchidClassList(){
            const {data} = await useFetch('/api/orchidclass')
            this.orchidClassList = data.value.orchidClassList
        }
    }
})