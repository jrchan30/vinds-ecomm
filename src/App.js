import { useState, useEffect } from "react";
import Header from "./components/layouts/Header";
import "./index.css";
import HomePage from "./pages/homepage/HomePage";
import { Switch, Route } from "react-router-dom";
import LiquidsPage from "./pages/liquids/LiquidsPage";
import ShopPage from "./pages/shop/ShopPage";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import { auth } from "./firebase/firebaseUtils";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // let unsubscribeFromAuth = null;

  useEffect(() => {
    let unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
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
}

export default App;
