const WRITE_LOGIN = "WRITE_LOGIN";
const WRITE_PASSWORD = "WRITE_PASSWORD";
const SET_VALID_LOGIN = "SET_VALID_LOGIN";
const SET_VALID_PASSWORD = "SET_VALID_PASSWORD";
const SET_IS_AUTH_DENIED = "SET_IS_AUTH_DENIED";

const initialState = {
    data: {
        login: null,
        password: null
    },
    validLogin: null,
    validPassword: null,
    isAuthDenied: false
}

function loginData(state = initialState, action){
    switch(action.type){
        case WRITE_LOGIN:
            return {
                ...state,
                data:{
                    ...state.data,
                    login: action.payload
                }
            };
        case WRITE_PASSWORD:
            return {
                ...state,
                data: {
                    ...state.data,
                    password: action.payload
                }
            }
        case SET_VALID_LOGIN:
            return {
                data: { ...state.data },
                ...state,
                validLogin: action.payload
            };
        case SET_VALID_PASSWORD:
            return {
                data: { ...state.data },
                ...state,
                validPassword: action.payload
            };
        case SET_IS_AUTH_DENIED:
            return {
                data: { ...state.data },
                ...state,
                isAuthDenied: action.payload
            }
        default:
            return state;
    }
}

export const writeLogin = value => ({type: WRITE_LOGIN, payload: value});
export const writePassword = value => ({type: WRITE_PASSWORD, payload: value});
export const setValidLogin = value => ({type: SET_VALID_LOGIN, payload: value});
export const setValidPassword = value => ({type: SET_VALID_PASSWORD, payload: value});
export const setIsAuthDenied = value => ({type: SET_IS_AUTH_DENIED, payload: value});

export { loginData }