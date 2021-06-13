import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { PhimReducer } from "./reducers/PhimReducer";
import { LoadingReducer } from './reducers/LoadingReducer'
import { BookTicketReducer } from './reducers/BookTicketReducer';
import { UserReducer } from './reducers/UserReducer';
import { AdminReducer } from './reducers/AdminReducer';

const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
  BookTicketReducer,
  UserReducer,
  AdminReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
