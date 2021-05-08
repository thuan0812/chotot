import {fromJS} from 'immutable';
import userActions from '../constants/user';
import {getTokenData,saveTokenData,clearTokenData} from '../helpers/sessionStorage';

const defaultMapState = fromJS({
    isFetching: false,
    isFailure: false,
    token: getTokenData(),
    data: null
});

export default function User(state = defaultMapState, {type: actionType, data: data}) {
    switch (actionType) {
        case userActions.LOGIN_USER_START:
            clearTokenData();
            return state.set('token',null)
                .set('isFetching',true)
                .set('isFailure',false);
        case userActions.LOGIN_USER_SUCCESS:
            saveTokenData(data.jwt);
            return state.set('token',fromJS(data))
                   .set('isFetching',false);
        case userActions.LOGIN_USER_FAILURE:
            clearTokenData();
            return state.set('token',null)
                .set('isFetching',false)
                .set('isFailure',true);
        case userActions.LOGOUT_USER:
            clearTokenData();
            return state.set('token',null)
                .set('data',null)
                .set('isFetching',false)
                .set('isFailure',false);
        case userActions.GET_USER_SUCCESS:
            return state.set('data',fromJS(data));
        case userActions.GET_USER_FAILURE:
            clearTokenData();
            return state.set('token',null)
                .set('isFetching',false)
                .set('isFailure',true);
        case userActions.UPDATE_USER_START:
            return state.set('isFetching',true);
        case userActions.UPDATE_USER_SUCCESS:
            return state.set('data',fromJS(data)).set('isFetching',false);
        case userActions.UPDATE_USER_AVATAR:
            return state.set('data',fromJS({...state.get('data').toJS(),...data}));

        case userActions.UPDATE_USER_NOTI:
            console.log("UPDATE_USER_NOTI",data);
            if(typeof data.unread!='undefined'){
                let data_update = state.get('data').toJS();
                data_update.notifications.unread = data.unread;
                return state.set('data',fromJS(data_update));
            }
            return state;
        default:
            return state;
    }
}