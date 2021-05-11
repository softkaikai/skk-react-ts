import React from "react";

const Main: React.FC = (props) => {
    const style = {
        margin: '20px'
    }
    return (
        <div style={style}>{props.children}</div>
    )
}

export default Main;
