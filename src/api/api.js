import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    async addTodo(data) {
        const res = await axios({
            url: '/api/todos',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    },
    async getAllTodo() {
        const res = axios.get('/api/todos');
        return res;
    },
    async editTodo(data) {
        const res = await axios({
            url: '/api/todos/'+data.id,
            method: 'put',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    },
    async deleteTodo(id) {
        const res = await axios({
            url: '/api/todos/'+id,
            method: 'delete',   
        });
        return res;
    },

}
