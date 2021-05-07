import React from "react";

const Login: React.SFC = () => {

    return (
        <div>
            <label htmlFor="">
                账号：
                <input type="text"/>
            </label>
            <label htmlFor="">
                密码：
                <input type="password"/>
            </label>
        </div>
    )
}

export default  Login;
