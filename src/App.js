import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./index.css";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/HomePage";
import Header from "./components/layouts/Header";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import ShopPage from "./pages/shop/ShopPage";
import LiquidsPage from "./pages/liquids/LiquidsPage";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { setCurrentUser } from "./redux/user/userActions";

const App = (props) => {
  const { setCurrentUser } = props;
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
      <div className="container mx-auto h-full px-20">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/liquids" component={LiquidsPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
