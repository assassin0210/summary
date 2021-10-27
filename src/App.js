import { AboutUs } from "./pages/AboutUs";
import { GlobalStyle } from "./components/GlobalStyle";
import { Nav } from "./components/Nav";
import { ContactUs } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { Route, Switch } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact component={AboutUs} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/work/:id" component={MovieDetail} />
        <Route path="/work" exact component={OurWork} />
      </Switch>
    </div>
  );
}

export default App;
