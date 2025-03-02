
export const useCounterStore = defineStore('counter',{
    state:()=>{
        return {
            count:0
        }
    },
    getters:{
        dbcount:(state)=>{
            return state.count*2
        }
    },
    actions:{
        increment(){
            this.count++
        }
    }
})