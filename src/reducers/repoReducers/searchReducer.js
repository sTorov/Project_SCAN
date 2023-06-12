const SET_VALID_COUNT_DOC = "SET_VALID_COUNT_DOC";
const SET_VALID_INN = "SET_VALID_INN";
const SET_VALID_DATE = "SET_VALID_DATE";

const WRITE_INN = "WRITE_INN";
const WRITE_COUNT_DOC = "WRITE_COUNT_DOC";
const WRITE_DATE_START = "WRITE_DATE_START";
const WRITE_DATE_END = "WRITE_DATE_END";
const SET_TONALITY = "SET_TONALITY";

const SET_IN_BUSINESS_NEWS = "SET_IN_BUSINESS_NEWS";
const SET_ONLY_MAIN_ROLE = "SET_ONLY_MAIN_ROLE";
const SET_ONLY_WITH_RISK_FACTORS = "SET_ONLY_WITH_RISK_FACTORS";
const SET_MAX_FULLNESS = "SET_MAX_FULLNESS";
const SET_EXCLUDE_TECH_NEWS = "SET_EXCLUDE_TECH_NEWS";
const SET_EXCLUDE_ANNOUNCEMENTS = "SET_EXCLUDE_ANNOUNCEMENTS";
const SET_EXCLUDE_DIGESTS = "SET_EXCLUDE_DIGESTS";

const initialState = {
    data: {
        inn: null,
        countDoc: null,
        dateStart: null,
        dateEnd: null,
        tonality: "any",
        inBusinessNews: false,
        onlyMainRole: false,
        onlyWithRiskFactors: false,
        maxFullness: false,
        excludeTechNews: true,
        excludeAnnouncements: true,
        excludeDigests: true
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
        case SET_TONALITY:
            return {
                ...state,
                data: {
                    ...state.data,
                    tonality: action.payload
                }
            }
        case SET_IN_BUSINESS_NEWS:
            return {
                ...state,
                data: {
                    ...state.data,
                    inBusinessNews: action.payload
                }
            }
        case SET_ONLY_MAIN_ROLE:
            return {
                ...state,
                data: {
                    ...state.data,
                    onlyMainRole: action.payload
                }
            }
        case SET_ONLY_WITH_RISK_FACTORS:
            return {
                ...state,
                data: {
                    ...state.data,
                    onlyWithRiskFactors: action.payload
                }
            }
        case SET_MAX_FULLNESS:
            return {
                ...state,
                data: {
                    ...state.data,
                    maxFullness: action.payload
                }
            }
        case SET_EXCLUDE_TECH_NEWS:
            return {
                ...state,
                data: {
                    ...state.data,
                    excludeTechNews: action.payload
                }
            }
        case SET_EXCLUDE_ANNOUNCEMENTS:
            return {
                ...state,
                data: {
                    ...state.data,
                    excludeAnnouncements: action.payload
                }
            }
        case SET_EXCLUDE_DIGESTS:
            return {
                ...state,
                data: {
                    ...state.data,
                    excludeDigests: action.payload
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
export const setTonality = (value) => ({type: SET_TONALITY, payload: value});

export const setInBusinessNews = (value) => ({type: SET_IN_BUSINESS_NEWS, payload: value});
export const setOnlyMainRole = (value) => ({type: SET_ONLY_MAIN_ROLE, payload: value});
export const setOnlyWithRiskFactors = (value) => ({type: SET_ONLY_WITH_RISK_FACTORS, payload: value});
export const setMaxFullness = (value) => ({type: SET_MAX_FULLNESS, payload: value});
export const setExcludeTechNews = (value) => ({type: SET_EXCLUDE_TECH_NEWS, payload: value});
export const setExcludeAnnouncements = (value) => ({type: SET_EXCLUDE_ANNOUNCEMENTS, payload: value});
export const setExcludeDigests = (value) => ({type: SET_EXCLUDE_DIGESTS, payload: value});

export { search };