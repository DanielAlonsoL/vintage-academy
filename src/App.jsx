import {
  HashRouter as Router, 
  Route,
  Routes
} from "react-router-dom";
import Home from "./views/Home";

const App = () => {

  return (
    <div>  
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Routes>
      </Router>
</div>
  );
};

export default App;
