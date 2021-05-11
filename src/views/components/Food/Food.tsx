import React from 'react';
import styles from './Food.module.css';
import classnames from 'classnames/bind';
import InputNum from "@components/InputNum/InputNum";

export interface Props {
    name: string;
    desc: string;
    num: number;
    disabled?: boolean;
    change?: (num: number) => void;
}

const Food: React.FC<Props> = (props) => {
    const cx = classnames.bind(styles);
    function numChange(num: number) {
        if (props.change) {
            props.change(num);
        }
    }
    return (
        <div className={cx('food')}>
            <p className={cx('food-name')}>{props.name}</p>
            <p>{props.desc}</p>
            {props.disabled ? props.num : <InputNum num={props.num} change={numChange} />}
        </div>
    )
}

export default Food;
