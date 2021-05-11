import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { loadingReducer, userReducer, addressReducer, shopCarReducer } from './reducers';
import { UserActionValue, AddressActionValue, ShopCarActionValue } from "@store/actions";

export type StoreType = {
    loading: boolean,
    user: UserActionValue,
    address: AddressActionValue,
    shopCar: ShopCarActionValue,
}

export const store = createStore(
    combineReducers({
        loading: loadingReducer,
        user: userReducer,
        address: addressReducer,
        shopCar: shopCarReducer,
    }),
    {
        loading: false,
        user: {
            account: '',
            password: '',
        },
        address: {
            addresses: ['成都党中央', '宜宾党中央'],
            default: '',
        },
        shopCar: {
            foods: []
        }
    },
    applyMiddleware(thunk)
);

export type StoreDispatch = typeof store.dispatch;
export type StoreGetStore = typeof store.getState;
export interface PromiseDispatch {
    (fn: (dispatch: StoreDispatch) => Promise<string>): ReturnType<typeof fn>
}

