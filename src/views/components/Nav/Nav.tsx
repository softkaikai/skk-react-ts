import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import styles from './Nav.module.css'
import classnames from 'classnames/bind';

export interface NavInterface {
    name: string;
    active: boolean;
    [prop: string]: any;
}
interface Props {
    navs: NavInterface[];
    change?: (data: NavInterface, index: number) => any;
}


const Nav: React.FC<Props> = (props) => {
    function navClick (data: NavInterface, index: number) {
        if (props.change) {
            props.change(data, index);
        }
        if (data.link) {
            history.push(data.link);
        }
    }
    const location = useLocation();
    const history = useHistory();
    const cx = classnames.bind(styles);

    return (
        <div className={styles.nav}>
            {
                props.navs.map((nav, index) => {
                    const className = cx({
                        'nav-item': true,
                        'nav-item-active': nav.active || location.pathname.includes(nav.link),
                    })
                    return (
                        <div key={nav.name} className={className} onClick={() => navClick(nav, index)}>{nav.name}</div>
                    )
                })
            }
        </div>
    )
}

export default Nav;
