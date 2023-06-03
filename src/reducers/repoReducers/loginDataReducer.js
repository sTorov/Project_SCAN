const WRITE_LOGIN = "WRITE_LOGIN";
const WRITE_PASSWORD = "WRITE_PASSWORD";

const initialState = {
    login: null,
    password: null
}

function loginData(state = initialState, action){
    switch(action.type){
        case WRITE_LOGIN:
            return {
                ...state,
                login: action.payload
            };
        case WRITE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        default:
            return state;
    }
}

export const writeLogin = value => ({type: WRITE_LOGIN, payload: value});
export const writePassword = value => ({type: WRITE_PASSWORD, payload: value});

export { loginData }