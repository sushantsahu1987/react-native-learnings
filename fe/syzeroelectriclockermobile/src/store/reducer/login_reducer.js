import * as actiontypes from '../actions/actiontypes';

const initialState = {
    payload: { }
}

const reducer = (state = initialState, action) => {

    switch(action.type) {

        case actiontypes.SET_LOGIN_TOKEN:
            return {...state, payload: action.payload};

        case actiontypes.LOGIN_FAIL:
            return {...state, error: action.error};

        default: return state;

    }

}

export default reducer;