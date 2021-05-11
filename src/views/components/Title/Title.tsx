import React from 'react';

const Title: React.FC = (props) => {
    const styles = {
        'lineHeight': '30px',
        'fontSize': '16px',
        'fontWeight': 700
    }
    return (
        <div style={styles}>{props.children}</div>
    )
}

export default Title;
