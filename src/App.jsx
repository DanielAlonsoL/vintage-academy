import {
  Route,
  Routes
} from "react-router-dom";
import Home from "./views/Home";

const App = () => {

  return (
    <div>  
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
        </Routes>
</div>
  );
};

export default App;
