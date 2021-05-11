import React from 'react';
import Item from '@components/Item/Item'
import MenuIcon from '@components/MenuIcon/MenuIcon'

const My: React.FC = () => {
    return (
        <div>
            <Item title={'kaikai'}>
                <MenuIcon desc={'我的地址'} type={'11'} />
                <MenuIcon desc={'我的订单'} type={'22'} />
            </Item>
        </div>
    )
}

export default My
