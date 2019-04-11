import axios from "axios";

export function sendPost(url, body) {
    return axios.post(url, body);
}