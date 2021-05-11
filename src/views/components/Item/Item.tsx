import React from 'react';
import Title from '@components//Title/Title'
import styles from './Item.module.css';
import classNames from 'classnames/bind';

interface Props {
    title: string;
}

const Item: React.FC<Props> = (props) => {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('item')}>
            <Title>{props.title}</Title>
            <div>{props.children}</div>
        </div>
    )
}


export default Item;
