// Loading action
export const LoadingAction = Symbol('Loading');
export interface LoadingActionInterface {
    type: Symbol;
    value: boolean;
}
export function createLoadingAction(value: boolean): LoadingActionInterface {
    return {type: LoadingAction, value}
}

// user action
export const UserAction = Symbol('User');
export interface UserActionValue {
    account: string,
    password: string;
}
export interface UserActionInterface {
    type: Symbol,
    value: UserActionValue
}
export function createUserAction(value: UserActionValue): UserActionInterface {
    return {
        type: UserAction,
        value
    }
}
