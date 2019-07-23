import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    addTodo(data) {
        return axios({
            url: '/api/todos',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    getAllTodo() {
        return axios.get('/api/todos');
    },
    editTodo(data) {
        return axios({
            url: '/api/todos/' + data.id,
            method: 'put',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    deleteTodo(id) {
        return axios({
            url: '/api/todos/' + id,
            method: 'delete',
        });
    },

}
