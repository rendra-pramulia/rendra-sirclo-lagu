import axios from 'axios';

const newAxios = axios;
newAxios.defaults.baseURL = 'http://ws.audioscrobbler.com/2.0';
newAxios.defaults.params = {
    format: 'json',
    api_key: '766b437a53ea03f56b60bed6b652dfc5'
};

export default newAxios;