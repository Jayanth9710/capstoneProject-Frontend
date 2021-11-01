import './App.css';
import {DataProvider} from "./ContextData";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RoomUpload from './RoomUpload';
import Login from './Login';
import SearchPage from './SearchPage';
import Home from './Home'
import Header from "./Header";
import Footer from "./Footer";
import Register from './Register'
import BookedRooms from './BookedRooms';

function App() {
  return (
    <div className="App">
      <Router>
      <DataProvider>
        <Header />
        <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path="/roomsbooked" component={BookedRooms} exact={true}/>
        <Route path='/host' component={RoomUpload} exact={true}/>
        <Route path='/search' component={SearchPage} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
          <Route path='/login' component={Login} exact={true}/>
        </Switch>
        </DataProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
