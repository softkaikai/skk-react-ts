import React from "react";
import ReactLoading from 'react-loading';
import styles from './Loading.module.css'

const Loading: React.SFC = () => {
    return (
        <div className={styles.loading}>
            <ReactLoading type={'cylon'} color={'#07d'} height={'20%'} width={'20%'} />
        </div>
    )
}

export default Loading;
