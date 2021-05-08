import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingReducer, userReducer } from './reducers';
import { UserActionValue } from "@store/actions";

export type StoreType = {
    loading: boolean,
    user: UserActionValue,
}

export const store = createStore(
    combineReducers({
        loading: loadingReducer,
        user: userReducer,
    }),
    {
        loading: false,
        user: {
            account: '',
            password: '',
        }
    },
    applyMiddleware(thunk)
);

export type StoreDispatch = typeof store.dispatch;
export type StoreGetStore = typeof store.getState;

