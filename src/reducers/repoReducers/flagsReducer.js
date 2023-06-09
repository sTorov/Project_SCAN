const SET_DROPDOWN_OPEN = "SET_DROPDOWN_OPEN";

const initialState = {
    isDropdownOpen: false,
}

function flags(state = initialState, action){
    switch(action.type){
        case SET_DROPDOWN_OPEN:
            return {
                ...state,
                isDropdownOpen: action.payload
            };        
        default:
            return state;
    }
}

export const setDropdownOpen = value => ({type: SET_DROPDOWN_OPEN, payload: value});

export { flags };