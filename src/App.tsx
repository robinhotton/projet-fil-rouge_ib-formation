import "./App.Scss";
import Footer from "./commons/Footer/Footer";
import Header from "./commons/header/Header";
import Router from "./router/Router";

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
