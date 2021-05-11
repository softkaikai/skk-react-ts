import React from 'react';
import styles from './ShopCar.module.css';
import classnames from 'classnames/bind';
import { useDispatch, useSelector } from "react-redux";
import { ShopCarActionValue, createShopCarAction } from "@store/actions";
import { StoreType } from "@src/store";
import Food from "@components/Food/Food";

const ShopCar: React.FC = (props) => {
    const shopCar = useSelector<StoreType, ShopCarActionValue>(state => state.shopCar);
    const dispatch = useDispatch();
    const cx = classnames.bind(styles);

    function createOrder() {
        dispatch(createShopCarAction({foods: []}))
    }

    return (
        <div>
            <div>我的购物车：</div>
            {
                shopCar.foods.map(food => {
                    return (
                        <Food disabled key={food.name} {...food} />
                    )
                })
            }
            <div>总价：100元</div>
            <div>
                <button onClick={createOrder}>提交订单</button>
            </div>
        </div>
    )
}

export default ShopCar;
