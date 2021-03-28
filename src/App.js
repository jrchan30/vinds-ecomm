import { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import "./index.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/HomePage";
import Header from "./components/layouts/header/Header";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import ShopPage from "./pages/shop/ShopPage";
import LiquidsPage from "./pages/liquids/LiquidsPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { setCurrentUser } from "./redux/user/userActions";
import { AnimatePresence } from "framer-motion";
import { selectCurrentUser } from "./redux/user/userSelector";
import HeaderBanner from "./components/layouts/header/HeaderBanner";

const App = (props) => {
  const { setCurrentUser } = props;
  const location = useLocation();

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Route exact path="/" component={HeaderBanner} />
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
                props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
              }
            />
          </Switch>
        </div>
      </AnimatePresence>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
