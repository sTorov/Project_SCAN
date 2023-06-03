import photo from "../../img/avatar.jpg";

const SET_AUTH = "SET_AUTH";
const CHANGE_SIGNED = "CHANGE_SIGNED";

const initialState = {
    isAuth: false,
    info: {
        name: "Алексей А.",
        photo: photo,
        signed: "Beginner",
    }
}

function account(state = initialState, action){
    switch(action.type){
        case SET_AUTH:
            return {
                info: { ...state.info },
                isAuth: action.payload
            };
        case CHANGE_SIGNED:
            return {
                ...state,
                info: { ...state.info, signed: action.payload }
            };
        default:
            return state;
    }
}

export const setAuth = value => ({type: SET_AUTH, payload: value});
export const changeSigned = value => ({type: CHANGE_SIGNED, payload: value});

export { account };