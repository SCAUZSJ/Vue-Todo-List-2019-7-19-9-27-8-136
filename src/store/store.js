import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import API from '../api/api'
import { Message } from 'element-ui'

const store = new Vuex.Store({
    state: {
        itemShow: [],
        showType: 'ALL',
        itemStorage: [],
        editIndex: -1,
    },
    getters: {
        getItemShow(state) {
            return state.itemShow;
        },
        getEditIndex(state) {
            return state.editIndex;
        },
        getShowType(state) {
            return state.showType;
        }

    },
    mutations: {
        setItemList(state, items) {
            state.itemStorage = items;
            state.itemShow = state.itemStorage;
        },
        showChange(state, type) {
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
                return item.complete === (type === "Complete" ? true : false);
            });
            state.showType = type;
        },
        remove(state, index) {
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
        addItem(state, newItem) {
            if (newItem !== undefined) {
                state.itemShow.push(newItem);
            }
        },
        changeEditIndex(state, newIndex) {
            state.editIndex = newIndex;
        }
    },
    actions: {
        async init(context) {
            const res = await API.getAllTodo();
            if (res.data.code!== 200) {
                Message.error(res.data.errorMsg);
                return;
            }
            context.commit('setItemList', res.data.data);
        },
        async addTodo(context, todo) {
            
                const res = await API.addTodo({ text: todo });
                if(res.data.code === 201){
                    context.commit('addItem', res.data.data);
                    Message({
                        message: '添加todo成功',
                        type: 'success'
                    });
                }else{
                    Message.error(res.data.errorMsg);
                }
           
        },
        async deleteTodo(context, info) {

                const res = await API.deleteTodo(info.id);
                if (res.data.code === 200) {
                    context.commit('remove', info.index);
                    Message({
                        message: '删除todo成功',
                        type: 'success'
                    });
                }else{
                    Message.error(res.data.errorMsg);
                }
        },
        async updateTodoTest(context, todo) {
                const res = await API.editTodo(todo);
                if(res.data.code === 200){
                    context.commit('changeEditIndex', -1);
                    Message({
                        message: '更新todo成功',
                        type: 'success'
                    });
                }else{
                    Message.error(res.data.errorMsg);
                }
        },
        async updateTodoStatus(context, todo) {
                const res = await API.editTodo(todo);
                if(res.data.code === 200){
                    Message({
                        message: '更新todo成功',
                        type: 'success'
                    });
                }else{
                    Message.error(res.data.errorMsg);
                }
        }

    }
})
export default store;