import axios from "axios"

const instance:any = axios.create({
    baseURL: 'https://test.cbs.fahariyajamii.org',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;

 