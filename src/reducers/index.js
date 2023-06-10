import { combineReducers } from "@reduxjs/toolkit";

import { account } from "./repoReducers/accountReducer";
import { observeInfo } from "./repoReducers/observeInfoReducer";
import { flags } from "./repoReducers/flagsReducer";
import { loginData } from "./repoReducers/loginDataReducer";
import { search } from "./repoReducers/searchReducer";
import { result } from "./repoReducers/resultReducer";

export const reducers = combineReducers({
    account,
    observeInfo,
    flags,
    loginData,
    search,
    result,
});