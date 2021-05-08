import axios from 'axios';
import qs from 'qs';
import {getTokenData} from './sessionStorage';
const csrfToken = null;


const jwtToken = getTokenData('access_token');
export const jwtHeader = jwtToken?{"Authorization": `Bearer ${getTokenData('access_token')}`}:{};

const axiosSame = axios.create({headers: {...jwtHeader}});
const axiosCross = axios.create({
    headers: {
        ...jwtHeader,
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': csrfToken
    }
});

export const get = (url, params, isCrossDomain = false) => {

    const jwtToken = getTokenData('access_token');
    const jwtHeader = jwtToken?{"Authorization": `Bearer ${jwtToken}`}:{};

    return new Promise((resolve, reject) => {
        const instance = isCrossDomain ? axiosSame : axiosCross;
        return instance.get(url, {headers: {...jwtHeader},params: params}).then(function (response) {
            return resolve(response.data);
        })
            .catch(function (error) {
                return reject(error);
            });
    })
}
export const post = (url, data, isCrossDomain = false) => {

    const jwtToken = getTokenData('access_token');
    const jwtHeader = jwtToken?{"Authorization": `Bearer ${jwtToken}`}:{};


    return new Promise((resolve, reject) => {
        const instance = isCrossDomain ? axiosSame : axiosCross;


        return instance.post(url, qs.stringify(data),{headers: {...jwtHeader}})
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                return reject(error);
            });
    });
}
export const postUpload = (url, data,file) => {
    console.log("postUpload -> data", data)
    return new Promise((resolve, reject) => {

        let formData = new FormData();

        formData.append('file', file);

        // data.map((name,value)=>{
        //     formData.append(`${name}`, value);
        // })
        for (const [key, value] of Object.entries(data)) {
            //console.log(`${key}: ${value}`);
            formData.append(`${key}`, value);
          }

        const instance = axios.create({
            headers: {
                ...jwtHeader,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'multipart/form-data'
            }
        });

        return instance.post(url, formData)
            .then(function (response) {
                return resolve(response.data);
            })
            .catch(function (error) {
                return reject(error);
            });
    });
}

export default {get, post,jwtHeader};