const WRITE = "WRITE"

const initialState = {
    usedCompanyCount: 0,
    companyLimit: 0
}

function observeInfo(state = initialState, action){
    switch(action.type){
        case WRITE:
            return {
                usedCompanyCount: action.payload.usedCompanyCount,
                companyLimit: action.payload.companyLimit
            };
        default:
            return state;
    }
}

export const write = value => ({type: WRITE, payload: value});

export { observeInfo }