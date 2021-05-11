import React from 'react';
import styles from './InputNum.module.css';
import classnames from "classnames/bind";

interface Props {
    num: number;
    change: (num: number) => void;
}

const InputNum: React.FC<Props> = (props) => {
    const cx = classnames.bind(styles);
    function add() {
        props.change(props.num + 1);
    }
    function minus() {
        const result = props.num - 1;
        props.change(result > 0 ? result : 0);
    }
    function numChange(num: string) {
        let result = Number(num);
        props.change(result > 0 ? result : 0);
    }
    return (
        <div>
            <span className={cx('circle')} onClick={minus}>-</span>
            <input
                type="number"
                className={cx('num-input')}
                value={props.num}
                onChange={e => numChange(e.target.value)}
            />
            <span className={cx('circle')} onClick={add}>+</span>
        </div>
    )
}

export default InputNum;
