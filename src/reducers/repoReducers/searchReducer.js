const SET_VALID_COUNT_DOC = "SET_VALID_COUNT_DOC";
const SET_VALID_INN = "SET_VALID_INN";
const SET_VALID_DATE = "SET_VALID_DATE";
const WRITE_INN = "WRITE_INN";
const WRITE_COUNT_DOC = "WRITE_COUNT_DOC";
const WRITE_DATE_START = "WRITE_DATE_START";
const WRITE_DATE_END = "WRITE_DATE_END";

const initialState = {
    data: {
        inn: null,
        countDoc: null,
        dateStart: null,
        dateEnd: null,
    },
    validCountDoc: null,
    validINN: null,
    validDate: null
};

function search(state = initialState, action){
    switch(action.type){
        case SET_VALID_COUNT_DOC:
            return {
                ...state,
                data: { ...state.data },
                validCountDoc: action.payload
            }
        case SET_VALID_INN:
            return {
                ...state,
                data: { ...state.data },
                validINN: action.payload
            }
        case SET_VALID_DATE:
            return {
                ...state,
                data: { ...state.data },
                validDate: action.payload
            }
        case WRITE_INN:
            return {
                ...state,
                data: {
                    ...state.data,
                    inn: action.payload
                }
            }
        case WRITE_COUNT_DOC:
            return {
                ...state,
                data: {
                    ...state.data,
                    countDoc: action.payload
                }
            }
        case WRITE_DATE_START:
            return {
                ...state,
                data: {
                    ...state.data,
                    dateStart: action.payload
                }
            }
        case WRITE_DATE_END:
            return {
                ...state,
                data: {
                    ...state.data,
                    dateEnd: action.payload
                }
            }
        default:
            return state;
    }
}

export const setValidCountDoc = (value) => ({type: SET_VALID_COUNT_DOC, payload: value});
export const setValidInn = (value) => ({type: SET_VALID_INN, payload: value});
export const setValidDate = (value) => ({type: SET_VALID_DATE, payload: value});
export const writeCountDoc = (value) => ({type: WRITE_COUNT_DOC, payload: value});
export const writeInn = (value) => ({type: WRITE_INN, payload: value});
export const writeDateStart = (value) => ({type: WRITE_DATE_START, payload: value});
export const writeDateEnd = (value) => ({type: WRITE_DATE_END, payload: value});

export { search };