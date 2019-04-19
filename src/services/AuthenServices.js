import { sendPost, get, put } from "./BaseHttpServices";
import { HOST, SERVICE } from "./ApiUrl";

export function login(email, password) {
    const url = HOST.local + SERVICE.login;
    return sendPost(url, {
        email,
        password
    });
}