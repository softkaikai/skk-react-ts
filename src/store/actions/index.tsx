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
    account: string;
    password: string;
}
export interface UserActionInterface {
    type: Symbol;
    value: UserActionValue
}
export function createUserAction(value: UserActionValue): UserActionInterface {
    return {
        type: UserAction,
        value
    }
}

// address action
export const AddressAction = Symbol('Address');
export interface AddressActionValue {
    addresses: string[];
    default: string;
}
export interface AddressActionInterface {
    type: Symbol;
    value: AddressActionValue
}
export function createAddressAction(value: AddressActionValue): AddressActionInterface {
    return {
        type: AddressAction,
        value
    }
}

// shopCar action
export const ShopCarAction = Symbol('ShopCar');
export interface FoodInterface {
    name: string;
    desc: string;
    num: number;
}
export interface ShopCarActionValue {
    foods: FoodInterface[]

}
export interface ShopCarActionInterface {
    type: Symbol;
    value:ShopCarActionValue
}

export function createShopCarAction(value: ShopCarActionValue) {
    return {
        type: ShopCarAction,
        value
    }
}
