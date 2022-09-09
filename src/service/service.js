import axios from "axios";

const BASE_URI = 'http://localhost:5000';


function createHeaders () {
    const token = JSON.parse(localStorage.getItem('mywallet'));

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return config;
}

function postSignUp (body) {
    const promise = axios.post(`${BASE_URI}/sign-up`, body);
    return promise;
}

function postSignIn (body) {
    const promise = axios.post(`${BASE_URI}/sign-in`, body);
    return promise;
}

function getRecords () {
    const config = createHeaders();

    const promise = axios.get(`${BASE_URI}/records`, config);

    return promise;
}

function postRecord (body) {
    const config = createHeaders();

    const promise = axios.post(`${BASE_URI}/record`, body, config);

    return promise;
}

export {
    postSignIn,
    postSignUp,
    getRecords,
    postRecord
}