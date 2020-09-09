import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';
import ContainerCatalog from '../Catalog/ContainerCatalog';
import DesignProduct from '../Catalog/components/designProduct';
import FinalizeProduct from '../Catalog/components/finalizeProduct';
import ECommerce from '../ECommerce';
import Orders from '../Orders';
import LinkExisting from '../ExistLinkProducts';
import BillingPage from '../Billing';
import TradePortalDashboard from '../TradePortal/dashboardTradePortal/index';
import Shops from '../TradePortal/shops';
import RecentContainer from '../TradePortal/shops/components/RecentContainer';

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route exact path="/" component={ECommerce} />
      <Route path="/dashboard" component={ECommerce} />
      <Route path="/catalog/product/step/1" component={ContainerCatalog} />
      <Route path="/catalog/product/step/2" component={DesignProduct} />
      <Route path="/catalog/product/step/3" component={FinalizeProduct} />
      <Route path="/orders" component={Orders} />
      <Route path="/link-existing-products" component={LinkExisting} />
      <Route path="/billing" component={BillingPage} />
      {/* tradeportal */}
      <Route path="/trade-portal/dashboard" component={TradePortalDashboard} />
      <Route path="/trade-portal/shops" component={Shops} />
      <Route path="/trade-portal/manage-shop" component={RecentContainer} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route path="/log_in" component={LogIn} />
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
