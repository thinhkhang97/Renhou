import axios from "axios";

export function sendPost(url, body) {
    return axios.post(url, body);
}

export function get(url) {
    return axios.get(url);
}

export function put(url, body){
    return axios.put(url, body);
}