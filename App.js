import react from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Service from "./components/service";
import Work from "./components/work";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Switch>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/about" component={About} exact>
          <About />
        </Route>

        <Route path="/service" component={Service} exact>
          <Service />
        </Route>

        <Route path="/work" component={Work} exact>
          <Work />
        </Route>

        <Route path="/contact" component={Contact} exact>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
