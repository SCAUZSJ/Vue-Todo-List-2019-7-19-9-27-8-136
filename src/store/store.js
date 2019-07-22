import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        itemShow: [],
        showType: 'ALL',
        itemStorage: [],
        editIndex:-1,
    },
    getters: {
        getItemShow(state){
            return state.itemShow;
        },
        getEditIndex(state){
            return state.editIndex;
        }
      
    },
    mutations:{
        showChange(state,type) {
            if (state.showType === type) {
              return;
            }
            if (type === "ALL") {
                state.itemShow = state.itemStorage;
                state.showType = "ALL";
              return;
            }
            if (state.showType === "ALL") {
                state.itemStorage = state.itemShow;
            }
            state.itemShow = state.itemStorage.filter(item => {
              return item.isComplete == (type === "Complete" ? true : false);
            });
            state.showType = type;
          },
          remove(state,index) {
            if (state.showType !== "ALL") {
              let id = state.itemShow[index].id;
              state.itemStorage.forEach((item, index) => {
                if (item.id === id) {
                    state.itemStorage.splice(index, 1);
                }
              });
            }
            state.itemShow.splice(index, 1);
          },
          addItem(state,newItem){
              if(newItem != undefined){
                  state.itemShow.push(newItem);
              }
          },
          changeEditIndex(state,newIndex){
              state.editIndex = newIndex;
              console.log(state.editIndex);
          }
    }
  })
  export default store;