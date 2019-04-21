import axios from 'axios';

export default axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.quandl.com/api/v3/datatables/WIKI/'
})