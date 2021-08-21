import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import 'semantic-ui-css/semantic.min.css';
import NavigationBar from './components/Navbar/NavigationBar';
import RegisterConfirm from './pages/RegisterConfirm';
import {AuthProvider} from './context/auth';


function App() {
  return (

    
    <AuthProvider>
      <Router>
        <NavigationBar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={RegisterConfirm}/>
      </Router>
    </AuthProvider>


  );
}

export default App;
