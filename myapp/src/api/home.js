import axios from 'axios';
export default {
    homeEntries: () => axios.get('/dashboard/entries'),
    homeDic: () => axios.get('/dic/all')
}
 