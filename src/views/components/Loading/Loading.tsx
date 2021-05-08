import React from "react";
import ReactLoading from 'react-loading';
import styles from './Loading.module.css';

const Loading: React.SFC = () => {
    return (
        <div className={styles.loading}>
            <ReactLoading type={'cylon'} color={'#fff'} height={'100px'} width={'100px'} />
        </div>
    )
}

export default Loading;
