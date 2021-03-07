
import './App.css';
import Header from './COMPONENTS/Header/Header';
import Shop from './COMPONENTS/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './COMPONENTS/Order/OrderReview.js';
import Manage from './COMPONENTS/Manage/Manage.js';
import Refresh from './COMPONENTS/Refresh/Refresh.js';
import ProductDetailed from './/COMPONENTS/ProductDetailed/ProductDetailed'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (

    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
           
            <Shop></Shop>
          </Route>
          <Route path="/orderReview">
             <OrderReview></OrderReview>
          </Route>
          <Route exact path="/">
               <Shop></Shop>
          </Route>
          <Route path="/Manage">
              <Manage></Manage>
          </Route>
          <Route path="/refreshPage">
            <Refresh></Refresh>
          </Route>
          <Route path="/product/:productKey">
               <ProductDetailed></ProductDetailed>
          </Route>
          <Route path='*' >
            <h1 style={{ textAlign: 'center' }}>Wrong Inventory</h1>
          </Route>
        </Switch>
      </Router>
    


    </div>

  );
}

export default App;
