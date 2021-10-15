import styles from './App.module.css';
// import {Home} from './pages/index'
import { BrowserRouter,Route,Switch } from "react-router-dom";
import {HomePage,Register,SignIn,DetailPage} from './pages'
function App() {
  return (
    <div className={styles.App}>
    <BrowserRouter>
  <Switch>
    {/* 首页 */}
  <Route exact path="/" component={HomePage}/>
  <Route path="/signIn" component={SignIn} />
  <Route path="/register" component={Register} />
  <Route path="/detail/:touristRouteId" component={DetailPage}/>
  <Route render={()=> <h1> 404 Not Found 去找 PaceMak1r 了</h1> }/>
  </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
