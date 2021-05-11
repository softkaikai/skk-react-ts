import React from 'react';
import styles from './MenuIcon.module.css';
import classnames from 'classnames/bind';

interface Props {
    type: string;
    desc: string;
}

const MenuIcon: React.FC<Props> = (props) => {
    const cx = classnames.bind(styles);
    return (
        <div className={cx('menu')}>
            <div className={cx('menu-icon')}>{props.type}</div>
            <p>{props.desc}</p>
        </div>
    )
}

export default MenuIcon;
