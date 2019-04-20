import { sendPost } from "./BaseHttpServices";
import { HOST, SERVICE } from "./ApiUrl";

export function login(email, password) {
    const url = HOST.local + SERVICE.login;
    return sendPost(url, {
        email,
        password
    });
}

export function reverify(email) {
    const url = HOST.local + SERVICE.reverify;
    return sendPost(url, {
        email
    });
}