import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-d9893.firebaseio.com/'
})

export default instance;