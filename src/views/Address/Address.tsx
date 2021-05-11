import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StoreType, PromiseDispatch } from "@src/store";
import { AddressActionValue, createLoadingAction, createAddressAction } from "@store/actions";

const Address: React.FC = () => {
    const address = useSelector<StoreType, AddressActionValue>((state) => state.address);
    const [newAddress, setNewAddress] = useState('');
    const addressDispatch = useDispatch<PromiseDispatch>();
    const dispatch = useDispatch();
    function addNewAddress() {
        if (!newAddress) return;
        addressDispatch((dispatch) => {
            address.addresses.push(newAddress);
            dispatch(createLoadingAction(true));
            dispatch(createAddressAction({...address}))
            return new Promise<string>((resolve) => {
                setTimeout(() => {
                    resolve('')
                }, 300)
            })
        }).then(() => {
            dispatch(createLoadingAction(false))
        })
    }

    function setDefaultAddress(data: string) {
        addressDispatch((dispatch) => {
            address.default = data;
            dispatch(createLoadingAction(true));
            dispatch(createAddressAction({...address}))
            return new Promise<string>((resolve) => {
                setTimeout(() => {
                    resolve('')
                }, 300)
            })
        }).then(() => {
            dispatch(createLoadingAction(false))
        })
    }

    return (
        <div>
            <div>我的地址：</div>
            <ul>
                {
                    address.addresses.map(data => {
                        return (
                            <li key={data}>
                                {data}
                                {data === address.default
                                    ? '（默认）'
                                    : <span style={{'marginLeft': '10px', 'color': '#07d'}} onClick={() => setDefaultAddress(data)}>设置为默认</span>}
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <input type="text" value={newAddress} onChange={e => setNewAddress(e.target.value)}/>
                <button onClick={addNewAddress}>新增地址</button>
            </div>
        </div>
    )
}

export default Address;
