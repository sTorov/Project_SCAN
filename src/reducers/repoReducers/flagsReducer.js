const SET_OBSERVE_INFO_LOADED = "SET_OBSERVE_INFO_LOADED";
const SET_DROPDOWN_OPEN = "SET_DROPDOWN_OPEN";

const initialState = {
    isObserveInfoLoaded: false,
    isDropdownOpen: false,
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
            }
        default:
            return state;
    }
}

export const setObserveInfoLoaded = value => ({type: SET_OBSERVE_INFO_LOADED, payload: value});
export const setDropdownOpen = value => ({type: SET_DROPDOWN_OPEN, payload: value});

export { flags };