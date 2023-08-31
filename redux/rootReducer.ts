import { combineReducers } from "redux";
import { clanGroupReducer } from "./clangroup/clangroup.reducers";
import { featuresReducer } from "./features/features.reducer";
import { userReducer } from "./user/user.reducer";

export const reducers = combineReducers({
    features:featuresReducer,
    user: userReducer,
    clangroup:clanGroupReducer
});



export default reducers;