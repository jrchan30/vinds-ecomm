// import Header from "./components/Header";
import Directory from "./components/Directory";
import Header from "./components/layouts/Header";
// import Homepage from "./Homepage";
import "./index.css";
import Homepage from "./pages/homepage/Homepage";
import TestComponent from "./components/TestComponent";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto h-full px-20">
        <TestComponent />
        {/* <Directory /> */}
        <Homepage />
      </div>
    </div>
  );
}

export default App;
