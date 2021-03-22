// import Header from "./components/Header";
import Directory from "./components/Directory";
import Header from "./components/layouts/Header";
// import Homepage from "./Homepage";
import "./index.css";
import Homepage from "./pages/Homepage";
import TestComponent from "./components/TestComponent";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto h-full px-20">
        <Route exact path="/" component={Homepage} />
      </div>
    </div>
  );
}

export default App;
