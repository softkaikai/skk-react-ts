import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from "@src/store";
import { UserActionValue, createUserAction, createLoadingAction } from "@store/actions";
import { useHistory } from 'react-router-dom';
import { StoreDispatch, PromiseDispatch } from '@src/store';

const Login: React.SFC = () => {
    const [ account, setAccount ] = useState('');
    const [ password, setPassword ] = useState('');
    const loginDispatch = useDispatch<PromiseDispatch>();
    const dispatch = useDispatch();
    const user = useSelector<StoreType, UserActionValue>(state => state.user);
    const history = useHistory();

    function login() {
        loginDispatch((dispatch) => {
            dispatch(createLoadingAction(true));
            dispatch(createUserAction({
                account,
                password
            }));
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('')
                }, 300)
            })
        }).then(() => {
            dispatch(createLoadingAction(false));
        })

        history.push('/main');
    }

    return (
        <div>
            <label htmlFor="">
                账号：
                <input type="text" value={account} onChange={e => setAccount(e.target.value)}/>
            </label>
            <label htmlFor="">
                密码：
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <button onClick={login}>登录</button>
        </div>
    )
}

export default  Login;
