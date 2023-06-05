const SET_OBSERVE_INFO_LOADED = "SET_OBSERVE_INFO_LOADED";
const SET_DROPDOWN_OPEN = "SET_DROPDOWN_OPEN";
const SET_VALID_LOGIN = "SET_VALID_LOGIN";
const SET_VALID_PASSWORD = "SET_VALID_PASSWORD";
const SET_IS_AUTH_DENIED = "SET_IS_AUTH_DENIED";

const initialState = {
    isObserveInfoLoaded: false,
    isDropdownOpen: false,
    validLogin: null,
    validPassword: null,
    isAuthDenied: false,
}

function flags(state = initialState, action){
    switch(action.type){
        case SET_OBSERVE_INFO_LOADED:
            return {
                ...state,
                isObserveInfoLoaded: action.payload
            };
        case SET_DROPDOWN_OPEN:
            return {
                ...state,
                isDropdownOpen: action.payload
            };
        case SET_VALID_LOGIN:
            return {
                ...state,
                validLogin: action.payload
            };
        case SET_VALID_PASSWORD:
            return {
                ...state,
                validPassword: action.payload
            };
        case SET_IS_AUTH_DENIED:
            return {
                ...state,
                isAuthDenied: action.payload
            }
        default:
            return state;
    }
}

export const setObserveInfoLoaded = value => ({type: SET_OBSERVE_INFO_LOADED, payload: value});
export const setDropdownOpen = value => ({type: SET_DROPDOWN_OPEN, payload: value});
export const setValidLogin = value => ({type: SET_VALID_LOGIN, payload: value});
export const setValidPassword = value => ({type: SET_VALID_PASSWORD, payload: value});
export const setIsAuthDenied = value => ({type: SET_IS_AUTH_DENIED, payload: value});

export { flags };