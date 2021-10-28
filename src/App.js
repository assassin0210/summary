import { AboutUs } from "./pages/AboutUs";
import { GlobalStyle } from "./components/GlobalStyle";
import { Nav } from "./components/Nav";
import { ContactUs } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { Route, Switch, useLocation } from "react-router-dom";
import { MovieDetail } from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/work/:id" component={MovieDetail} />
          <Route path="/work" exact component={OurWork} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
