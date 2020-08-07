import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import LogIn from '../LogIn/index';
import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import ContainerCatalog from '../Catalog/ContainerCatalog';
import DesignProduct from '../Catalog/components/designProduct';
import FinalizeProduct from '../Catalog/components/finalizeProduct';


const Pages = () => (
  <Switch>
    <Route path="/pages/one" component={ExamplePageOne} />
    <Route path="/pages/two" component={ExamplePageTwo} />
    <Route path="/pages/catalog" component={CatalogSteps} />
  </Switch>
);

const CatalogSteps = () => (
  <Switch>
    <Route path="/catalog/product/step/1" component={ContainerCatalog} />
    <Route path="/catalog/product/step/2" component={DesignProduct} />
    <Route path="/catalog/product/step/3" component={FinalizeProduct} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/pages" component={Pages} />
      <Route path="/catalog" component={CatalogSteps} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
