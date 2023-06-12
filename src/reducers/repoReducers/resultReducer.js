const WRITE_INFO_DOC_AND_RISK = "WRITE_INFO_DOC_AND_RISK";
const WRITE_IDS = "WRITE_IDS";
const APPEND_LOADED_DOCS = "APPEND_LOADED_DOCS";
const SET_IS_LOADED = "SET_IS_LOADED";
const SET_LAST_INDEX_DOC_LOADED = "SET_LAST_INDEX_DOC_LOADED";

const RESET_DATA = "RESET_DATA";

const initialState = {
    docData: {
        infoDocAndRisk: [],
        ids: [],
    },
    loadedDocs: [],
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
                loadedDocs: [ ...state.loadedDocs ]
            };
        case WRITE_IDS:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: action.payload
                },
                loadedDocs: [ ...state.loadedDocs ]
            };
        case APPEND_LOADED_DOCS:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: [ ...state.docData.ids ]
                },
                loadedDocs: [ ...state.loadedDocs, ...action.payload ]
            };
        case SET_IS_LOADED:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: [ ...state.docData.ids ]
                },
                loadedDocs: [ ...state.loadedDocs ],
                isLoaded: action.payload
            }
        case SET_LAST_INDEX_DOC_LOADED:
            return {
                ...state,
                docData: {
                    infoDocAndRisk: [ ...state.docData.infoDocAndRisk ],
                    ids: [ ...state.docData.ids ]
                },
                loadedDocs: [ ...state.loadedDocs ],
                lastIndexDocLoaded: action.payload
            }
        case RESET_DATA:
            return initialState;
        default:
            return state;
    }
}

export const writeInfoDocAndRisk = (value) => ({type: WRITE_INFO_DOC_AND_RISK, payload: value});
export const writeIds = (value) => ({type: WRITE_IDS, payload: value});
export const appendLoadedDocs = (value) => ({type: APPEND_LOADED_DOCS, payload: value});
export const setIsLoaded = (value) => ({type: SET_IS_LOADED, payload: value});
export const setLastIndexDocLoaded = (value) => ({type: SET_LAST_INDEX_DOC_LOADED, payload: value});

export const resetData = () => ({type: RESET_DATA});

export { result }
