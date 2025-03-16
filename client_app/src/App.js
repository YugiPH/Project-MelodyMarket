import "./CSS/animate.css";
import "./CSS/helper.css";
import "./CSS/magnific-popup.css";
import "./CSS/material-design-iconic-font.min.css";
import "./CSS/meanmenu.css";
import "./CSS/nice-select.css";
import "./CSS/slick.css";
import "./CSS/venobox.css";
import "./CSS/style.css";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Share/Header";
import Home from "./Home/Home";
import Footer from "./Share/Footer";
import Checkout from "./Checkout/Checkout";
import OrderSuccess from "./Order/OrderSuccess";
import OrderFail from "./Order/OrderFail";
import { lazy, Suspense } from "react";

const Shop = lazy(() => import("./Shop/Shop"));
const Detail_Product = lazy(() => import("./DetailProduct/Detail_Product"));
const Cart = lazy(() => import("./Cart/Cart"));
const Favorite = lazy(() => import("./Favorite/Favorite"));
const Event = lazy(() => import("./Event/Event"));
const DetailEvent = lazy(() => import("./Event/DetailEvent"));
const Contact = lazy(() => import("./Contact/Contact"));
// const SignIn = lazy(() => import("./Auth/SignIn"));
// const SignUp = lazy(() => import("./Auth/SignUp"));
// const History = lazy(() => import("./History/History"));
// const Profile = lazy(() => import("./Profile/Profile"));
// const Search = lazy(() => import("./Search/Search"));
// const OrderMomo = lazy(() => import("./Order/OrderMomo"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense
          fallback={
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop/:id" component={Shop} />
            <Route path="/detail/:id" component={Detail_Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/favorite" component={Favorite} />

            <Route exact path="/event" component={Event} />
            <Route path="/event/:id" component={DetailEvent} />

            <Route path="/contact" component={Contact} />
            <Route path="/success" component={OrderSuccess} />
            <Route path="/fail" component={OrderFail} />

            {/* Tạm ẩn các chức năng đăng nhập & tài khoản */}
            {/* <Route path="/signin" component={SignIn} /> */}
            {/* <Route path="/signup" component={SignUp} /> */}
            {/* <Route path="/momo" component={OrderMomo} /> */}
            {/* <Route path="/history" component={History} /> */}
            {/* <Route path="/profile/:id" component={Profile} /> */}
            {/* <Route path="/search" component={Search} /> */}
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
