import "./App.Scss";
import './assets/css/utils/fonts.scss';
import './assets/css/utils/buttons.scss';
import LandingPage from "./pages/LandingPage";

function App(): JSX.Element {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
