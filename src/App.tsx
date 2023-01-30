import { Home } from "./pages/Home/Home";
import { GlobalStyles } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles />

      <Home />
    </div>
  );
};
