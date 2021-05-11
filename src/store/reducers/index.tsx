import { LoadingActionInterface, LoadingAction, UserAction, UserActionValue, UserActionInterface, AddressActionValue, AddressActionInterface, AddressAction, ShopCarAction, ShopCarActionInterface, ShopCarActionValue } from "@store/actions";

export function loadingReducer(state = false, action: LoadingActionInterface) {
    if (action.type === LoadingAction) {
        return action.value;
    }
    return state;
}

export function userReducer(state: UserActionValue = {account: '', password: ''}, action: UserActionInterface) {
    if (action.type === UserAction) {
        return action.value;
    }
    return state;
}

export function addressReducer(state: AddressActionValue = {addresses: [], default: ''}, action: AddressActionInterface) {
    if (action.type === AddressAction) {
        return action.value;
    }

    return state;
}

export function shopCarReducer(state: ShopCarActionValue = {foods: []}, action: ShopCarActionInterface) {
    if (action.type === ShopCarAction) {
        return action.value;
    }

    return state;
}
