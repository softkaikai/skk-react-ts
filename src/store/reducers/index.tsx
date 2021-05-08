import { LoadingActionInterface, LoadingAction, UserAction, UserActionValue, UserActionInterface } from "@store/actions";

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
