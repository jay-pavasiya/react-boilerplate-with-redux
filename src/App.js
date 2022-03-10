import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routers from './routes';
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Routers history={history} />
    </Router>
  );
}

export default App;
