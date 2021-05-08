export function saveTokenData(data){
    localStorage.setItem('access_token', data);
    localStorage.setItem('token_type', data.token_type);
    localStorage.setItem('expires_in', data.expires_in);
}
export function clearTokenData(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
}
export function getTokenData(key=false){
    if(!!key && localStorage.getItem(`${key}`)) return  localStorage.getItem(`${key}`)
    else if(
        localStorage.getItem('access_token') &&
        localStorage.getItem('token_type') &&
        localStorage.getItem('expires_in')){
        return {
            access_token: localStorage.getItem('access_token'),
            token_type: localStorage.getItem('token_type'),
            expires_in: localStorage.getItem('expires_in')
        }
    }
    return null;
}


export default {getTokenData,saveTokenData,clearTokenData};