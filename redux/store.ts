
import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  reducers  from "./rootReducer";


const middleware = [thunk];

export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  // assigning store to next wrapper
  const makeStore = () => store;
  
  export const wrapper = createWrapper(makeStore);
