import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from "../pages/MainPage";
import Layout from "../components/Layout";


const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/pupa">
            <div> no pupa właśnie</div>
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router;