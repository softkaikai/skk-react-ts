import React, { useState, useEffect } from 'react';
import Food from "@components/Food/Food";

import { FoodInterface } from "@store/actions";
import { useDispatch, useSelector } from "react-redux";
import { createShopCarAction } from "@store/actions";
import { useHistory } from 'react-router-dom';
import { StoreType } from "@src/store";
import { ShopCarActionValue } from "@store/actions";

const Shop: React.FC = () => {
    const shopCar = useSelector<StoreType, ShopCarActionValue>(state => state.shopCar);
    const [foods, setFoods] = useState<FoodInterface[]>([
        {name: '苹果', desc: '好吃的红苹果', num: 0},
        {name: '红土豆', desc: '好吃的红土豆', num: 0},
        {name: '黑土豆', desc: '好吃的黑土豆', num: 0},
    ]);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        foods.forEach(food => {
            const shopCarFood = shopCar.foods.find(i => i.name === food.name);
            if (shopCarFood) {
                food.num = shopCarFood.num;
            }
        })
        setFoods([...foods])
    }, []);

    function foodChange(index: number, num: number) {
        foods[index].num = num;
        setFoods([...foods]);
    }

    function toShopCar() {
        dispatch(createShopCarAction({foods}))
        history.push('/main/shopCar');
    }

    return (
        <div>
            <h4>食品小卖部</h4>
            {
                foods.map((food, index) => {
                    return (
                        <Food key={food.name} {...food} change={(num) => foodChange(index, num)} />
                    )
                })
            }
            <div>已选 {foods.filter(food => food.num > 0).length} 件商品</div>
            <div>
                <button onClick={toShopCar}>提交</button>
            </div>
        </div>
    )
}

export default Shop
