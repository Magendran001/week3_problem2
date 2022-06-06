import { createStore, combineReducers, applyMiddleware } from "redux";
import authreducer from "./auth/reducer";
import applicationreducer from "./app/reducer";



const logger = (store) => (next) => (action) => {

    if (typeof action == "function") {
        return action(store)
    }

    return next(action)
}


const rootreducer = combineReducers({ authreducer, applicationreducer })
const store = createStore(rootreducer, applyMiddleware(logger));

export default store