import React, {} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './views/Login/Login';
import Loading from '@components/Loading/Loading';
import Main from'./views/Main/Main'
import { useSelector, useDispatch } from 'react-redux';
import { StoreType } from "@src/store";

function App() {
  const loading = useSelector<StoreType>((state) => state.loading)

  return (
      <Router>
        {loading ? <Loading /> : null}
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
      </Router>
  );
}

export default App;
