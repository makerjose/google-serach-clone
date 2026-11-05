
import GoogleLogo from "./components/GoogleLogo";
import { SearchContainer, FrequentSites } from "./components/SearchComponents";

import "./App.css";

function App() {
  return (
    <div className="app">
      <GoogleLogo />
      <SearchContainer />
      <FrequentSites />
    </div>
  );
}

export default App;
