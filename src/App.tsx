import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './views/Login/Login';
import Loading from '@components/Loading/Loading';
import Nav, { NavInterface } from '@components/Nav/Nav';
import Main from'./views/Main/Main';
import My from'./views/My/My';
import Shop from'./views/Shop/Shop';
import Address from'./views/Address/Address';
import ShopCar from'./views/ShopCar/ShopCar';
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from "@src/store";

function App() {
    const [navs, setNavs] = useState<NavInterface[]>([
        {name: 'shop', link: '/main/shop', active: false},
        {name: 'my', link: '/main/my', active: false},
        {name: 'address', link: '/main/address', active: false},
        {name: 'shopCar', link: '/main/shopCar', active: false},
    ]);
  const loading = useSelector<StoreType>((state) => state.loading);
  function navChange(nav: NavInterface, index: number) {
      navs.forEach((data, i) => {
          data.active = i === index;
      })
      setNavs([...navs]);
  }

  return (
      <Router>
        {loading ? <Loading /> : null}
        <Route path="/" exact component={Login} />
        <Route path="/main">
            <Main>
                <Nav navs={navs} change={navChange} />
                <Switch>
                    <Route path="/main/my">
                        <My />
                    </Route>
                    <Route path="/main/shop">
                        <Shop />
                    </Route>
                    <Route path="/main/address">
                        <Address />
                    </Route>
                    <Route path="/main/shopCar">
                        <ShopCar />
                    </Route>
                </Switch>
            </Main>
        </Route>
      </Router>
  );
}

export default App;
