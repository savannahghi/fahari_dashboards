import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://test.cbs.fahariyajamii.org/',
    headers: {
        'Content-Type': 'application/json'
    }
})