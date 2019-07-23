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
            if (res.status !== 200) {
                Message.error(res.error);
                return;
            }
            context.commit('setItemList', res.data);
        },
        async addTodo(context, todo) {
            try{
                const res = await API.addTodo({ text: todo });
                if(res.status === 201){
                    context.commit('addItem', res.data);
                    Message({
                        message: '添加todo成功',
                        type: 'success'
                    });
                }
            }catch(e){
                Message.error(res.data);
            }     
        },
        async deleteTodo(context, info) {

            try {
                const res = await API.deleteTodo(info.id);
                if (res.status === 200) {
                    context.commit('remove', info.index);
                    Message({
                        message: '删除todo成功',
                        type: 'success'
                    });
                }
            } catch (e) {
                Message.error('服务异常');
            }
            
        },
        async updateTodoTest(context, todo) {
            try{
                const res = await API.editTodo(todo);
                if(res.status === 200){
                    context.commit('changeEditIndex', -1);
                    Message({
                        message: '更新todo成功',
                        type: 'success'
                    });
                }
            }catch(e){
                Message.error(res.data);
            }
        },
        async updateTodoStatus(context, todo) {
            try{
                const res = await API.editTodo(todo);
                if(res.status === 200){
                    Message({
                        message: '更新todo成功',
                        type: 'success'
                    });
                }
            }catch(e){
                Message.error(res.data);
            }
        }

    }
})
export default store;