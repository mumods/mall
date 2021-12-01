import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeList:[]
  },
  mutations: {
    addList(state,payLoad){
      if(state.storeList.length != 0){
         state.storeList.forEach((item)=>{
        if(item.iid === payLoad.iid){
          item.count += 1
        }
        else{
          state.storeList.push(payLoad)
        }
      })
    }
    else{
      state.storeList.push(payLoad)
    }
  }},
  actions: {
  },
  getters:{
  },
  modules: {
  }
})
