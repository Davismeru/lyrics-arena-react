import Create from "./Create";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import ShowLyrics from "./ShowLyrics";
import Notfound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path = '/'>
              <Homepage />
            </Route>

            <Route path = '/create'>
              <Create />
            </Route>

            <Route path = '/lyrics/:id'>
              <ShowLyrics />
            </Route>
            <Route path = '*'>
              <Notfound />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;