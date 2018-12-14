import * as actiontypes from './actiontypes';

export const setLoginToken = (response) => {
    return {
        payload: response,
        type: actiontypes.SET_LOGIN_TOKEN
    }
}

export const loginFailed = () => {
    
    return {
        payload: {
            error: 'Unknown error has occurred'
        },
        type: actiontypes.LOGIN_FAIL
    }
}

export const initLogin = (query) => {
    return {
        type: actiontypes.INIT_LOGIN,
        query 
    }
}