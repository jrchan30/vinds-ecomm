import { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { AnimatePresence } from "framer-motion";

import "./index.css";
import HomePage from "./pages/homepage/HomePage";
import Header from "./components/layouts/header/Header";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import ShopPage from "./pages/shop/ShopPage";
import LiquidsPage from "./pages/liquids/LiquidsPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import { selectCurrentUser } from "./redux/user/userSelector";
import HeaderBanner from "./components/layouts/header/HeaderBanner";
import Footer from "./components/layouts/footer/Footer";
import { checkUserSession } from "./redux/user/userActions";

const App = ({ currentUser, checkUserSession }) => {
  const location = useLocation();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Route exact path="/" component={HeaderBanner} />
      <div style={{ minHeight: "calc(100vh - 501px)" }}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <div className="container mx-auto h-full px-5 md:px-20">
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={HomePage} />
              <Route path="/liquids" component={LiquidsPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  currentUser ? <Redirect to="/" /> : <SignInSignUp />
                }
              />
            </Switch>
          </div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
