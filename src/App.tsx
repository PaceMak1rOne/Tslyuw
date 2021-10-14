import styles from './App.module.css';
// import {Home} from './pages/index'
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {HomePages} from './pages'
function App() {
  return (
    <div className={styles.App}>
    <BrowserRouter>
  <Switch>
  <Route exact path="/" component={HomePages}/>
  </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
