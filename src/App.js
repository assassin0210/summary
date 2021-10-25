import { AboutUs } from "./pages/AboutUs";
import { GlobalStyle } from "./components/GlobalStyle";
import { Nav } from "./components/Nav";
import { ContactUs } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/ourWork" component={OurWork} />
      </Switch>
    </div>
  );
}

export default App;
