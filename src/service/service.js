import axios from "axios";

const BASE_URI = 'http://localhost:5000';


function createHeaders () {
    const auth = JSON.parse(localStorage.getItem('mywallet'));

    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    }

    return config;
}

function postSignUp (body) {
    const promise = axios.post(`${BASE_URI}/signup`, body);
    return promise;
}

function postSignIn (body) {
    const promise = axios.post(`${BASE_URI}/signin`, body);
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

function editRecord (body, id) {
    const config = createHeaders();

    const promise = axios.put(`${BASE_URI}/record/edit/${id}`, body, config);

    return promise;
}

function deleteRecord (id) {
    const config = createHeaders();

    const promise = axios.delete(`${BASE_URI}/records/delete/${id}`, config);

    return promise;
}

function postLogout () {
    const config = createHeaders();

    const promise = axios.post(`${BASE_URI}/records/logout`, {}, config);

    return promise;
}

export {
    postSignIn,
    postSignUp,
    getRecords,
    postRecord,
    editRecord,
    deleteRecord,
    postLogout
}