// import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfilesList from "./components/ProfilesList";
import ProfileDetail from "./components/ProfileDetail";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Loader from "./components/Loder";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        {/* <Loader/> */}
        <Switch>
          <Route path="/" exact component={ProfilesList} />
          <Route path="/profile/:id" exact component={ProfileDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
