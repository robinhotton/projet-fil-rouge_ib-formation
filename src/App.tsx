import "./App.Scss";
import "./assets/css/utils/fonts.scss";
import "./assets/css/utils/buttons.scss";
import Router from "./router/Router";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
