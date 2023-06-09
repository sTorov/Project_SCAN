const WRITE = "WRITE";
const SET_OBSERVE_INFO_LOADED = "SET_OBSERVE_INFO_LOADED";

const initialState = {
    data: {
        usedCompanyCount: 0,
        companyLimit: 0,
    },
    isObserveInfoLoaded: false,
}

function observeInfo(state = initialState, action){
    switch(action.type){
        case WRITE:
            return {
                ...state,
                data: {
                    usedCompanyCount: action.payload.usedCompanyCount,
                    companyLimit: action.payload.companyLimit
                }
            };
        case SET_OBSERVE_INFO_LOADED:
            return {
                data: { ...state.data },
                isObserveInfoLoaded: action.payload
            };
        default:
            return state;
    }
}

export const write = value => ({type: WRITE, payload: value});
export const setObserveInfoLoaded = value => ({type: SET_OBSERVE_INFO_LOADED, payload: value});

export { observeInfo }