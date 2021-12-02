import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeList:[]
  },
  mutations: {
    addList(state,itemInfo){
      let i=0
      if(state.storeList.length != 0){
         state.storeList.forEach((item)=>{
          if(item.iid === itemInfo.iid){
            item.count = item.count + 1
            i++
          }
        })
        if(i==0){
          state.storeList.push(itemInfo)
        }
      }
      else{
        state.storeList.push(itemInfo)
      }
    },
    selectAll(state,payLoad){
      state.storeList.forEach(item =>{
        item.checked = payLoad
      })
    }
},
  actions: {
  },
  getters:{
  },
  modules: {
  }
})
