const WRITE_INFO_DOC_AND_RISK = "WRITE_INFO_DOC_AND_RISK";
const WRITE_IDS = "WRITE_IDS";
const WRITE_LAST_LOADED_DOCS = "WRITE_LAST_LOADED_DOCS";
const SET_IS_LOADED = "SET_IS_LOADED";
const SET_LAST_INDEX_DOC_LOADED = "SET_LAST_INDEX_DOC_LOADED";

const initialState = {
    docData: {
        infoDocAndRisk: [],
        ids: [],
    },
    lastLoadedDocs: [],
    lastIndexDocLoaded: 0,
    isLoaded: false
}


function result(state = initialState, action){
    switch(action.type){
        case WRITE_INFO_DOC_AND_RISK:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: action.payload,
                    ids: [ ...state.docData.ids ]
                },
                lastLoadedDocs: [ ...state.lastLoadedDocs ]
            };
        case WRITE_IDS:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: action.payload
                },
                lastLoadedDocs: [ ...state.lastLoadedDocs ]
            };
        case WRITE_LAST_LOADED_DOCS:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: [ ...state.docData.ids ]
                },
                lastLoadedDocs: action.payload
            };
        case SET_IS_LOADED:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: [ ...state.docData.ids ]
                },
                lastLoadedDocs: [ ...state.lastLoadedDocs ],
                isLoaded: action.payload
            }
        case SET_LAST_INDEX_DOC_LOADED:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: [ ...state.docData.ids ]
                },
                lastLoadedDocs: [ ...state.lastLoadedDocs ],
                lastIndexDocLoaded: action.payload
            }
        default:
            return state;
    }
}

export const writeInfoDocAndRisk = (value) => ({type: WRITE_INFO_DOC_AND_RISK, payload: value});
export const writeIds = (value) => ({type: WRITE_IDS, payload: value});
export const writeLastLoadedDocs = (value) => ({type: WRITE_LAST_LOADED_DOCS, payload: value});
export const setIsLoaded = (value) => ({type: SET_IS_LOADED, payload: value});
export const setLastIndexDocLoaded = (value) => ({type: SET_LAST_INDEX_DOC_LOADED, payload: value});

export { result }
