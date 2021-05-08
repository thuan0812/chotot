import {cancel, delay, fork, put, takeEvery} from "redux-saga/effects";
import userActions from '../constants/user';
import API_URLS from '../constants/api';
import {post,get} from '../helpers/api';
let taskLogin;
export function* callLoginAsync(params){
    console.log("param: ",params);
    try {
        yield put({type:userActions.LOGIN_USER_START,  data:  params});
        let response =  yield post(API_URLS.user.signin,params);
        console.log("response",response.jwt);
        yield put({type:userActions.LOGIN_USER_SUCCESS, data: response});

    }catch (e){
        yield put({type:userActions.LOGIN_USER_FAILURE, data: e.message});
        console.log(e.message);
    }
}
export function* callLoginAsyncTask(action){
    
    if(taskLogin) {
        yield cancel(taskLogin);
    }
    taskLogin = yield fork(callLoginAsync, action.data);
    yield delay(0);
}
export function* watchLogin(){
    yield takeEvery(userActions.LOGIN_USER,callLoginAsyncTask)
}


let taskUpdateAccout;
export function* callUpdateAsync(params){
    try {
        yield put({type:userActions.UPDATE_USER_START,  data:  params});
        let response =  yield post(API_URLS.user.update,params);
        yield put({type:userActions.UPDATE_USER_SUCCESS, data: response.data});

    }catch (e){
        yield put({type:userActions.UPDATE_USER_FAILURE, data: e.message});
        console.log(e.message);
    }
}
export function* callUpdateAsyncTask(action){
    if(taskUpdateAccout) {
        yield cancel(taskUpdateAccout);
    }
    taskUpdateAccout = yield fork(callUpdateAsync, action.data);
    yield delay(0);
}
export function* watchUpdateAccount(){
    yield takeEvery(userActions.UPDATE_USER,callUpdateAsyncTask)
}

let taskGetUser;

export function* callGetUserDetailAsync(params) {
    try {
       // yield put({type:userActions.LOGIN_USER_START,  data:  params});
        let response =  yield get(API_URLS.user.me);
        console.log("Dev",response);
         yield put({type:userActions.GET_USER_SUCCESS, data: response.data});

    }catch (e){
        yield put({type:userActions.GET_USER_FAILURE, data: e.message});
        console.log("get  Failed");
        console.log(e.message);
    }
}
export function* callGetUserDetailAsyncTask(action) {
    //console.log("callLoginAsyncTask:",action.data)
    if(taskGetUser) {
        yield cancel(taskGetUser);
    }
    taskGetUser = yield fork(callGetUserDetailAsync, action.data);
    yield delay(0);
}

export function* watchGetUserDetail(){
    yield takeEvery(userActions.GET_USER,callGetUserDetailAsyncTask)
}