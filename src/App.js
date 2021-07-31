import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Food from "./components/Food";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { Container } from "atomize";
import Checkout from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Container>
            <Route path="/" exact component={Food}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/checkout" component={Checkout}></Route>
          </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
