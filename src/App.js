import Header from "./components/layouts/Header";
import "./index.css";
import HomePage from "./pages/homepage/HomePage";
import { Route } from "react-router-dom";
import LiquidsPage from "./pages/liquids/LiquidsPage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto h-full px-20">
        <Route exact path="/" component={HomePage} />
        <Route path="/liquids" component={LiquidsPage} />
        <Route path="/shop" component={ShopPage} />
      </div>
    </div>
  );
}

export default App;
