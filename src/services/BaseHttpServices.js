import axios from "axios";

export function sendPost(url, body) {
    return axios.post(url, body);
}

export function get(url) {
    return axios.get(url);
}

export function put(url, body) {
    return axios.put(url, body);
}

export function getWithToken(url, token) {
    return axios.get(url, {
        headers: { "Authorization": 'Bearer ' + token }
    });
}

export function postWithToken(url, body, token) {
    return axios.post(url, body, {
        headers: { "Authorization": 'Bearer ' + token }
    });
}