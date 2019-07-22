import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    async addParkingLot() {
        const res = await axios({
            url: '/api/parkingLots',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res;
    },
    async getParkingLot(id) {
       
        const res = await axios.get('/api/parkingLots/'+id);
        return res;
    }

}
