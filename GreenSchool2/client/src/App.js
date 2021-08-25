import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import 'semantic-ui-css/semantic.min.css';
import NavigationBar from './components/Navbar/NavigationBar';
import RegisterConfirm from './pages/RegisterConfirm';
import {AuthProvider} from './context/auth';
import Profile from './pages/Profile';
import {LoggedInRoute , LoggedOutRoute} from './util/AuthRoute';



function App() {
  return (

    
    <AuthProvider>
      <Router>
        <NavigationBar />
        <LoggedOutRoute exact path='/' component={Home}/>
        <LoggedInRoute exact path='/login' component={Login}/>
        <LoggedInRoute exact path='/register' component={RegisterConfirm}/>
        <LoggedOutRoute exact path='/:userId/profile' component={Profile}/>

      </Router>
    </AuthProvider>


  );
}

export default App;
