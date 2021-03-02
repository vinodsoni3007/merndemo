import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appbar from './Appbar';
import SignIn from './SignIn';
import Signup from './signup'
import { UserProvider } from './UserContext';
import Profile from './Profile';
import StudentsList from './StudentsList';


function App() {
  const appStyle = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between'

  }
  return (


    <Router>
      <UserProvider>
        <div className="App">

          <Appbar />
          <div style={appStyle}>
            {/* <Header name="Hitesh" age="3434" /> */}
            <Switch >
              <Route exact path = '/' component={SignIn} />
              <Route exact path = '/login' component={SignIn} />
              <Route exact path = '/signup' component={Signup} />
              <Route exact path = '/home' component={Home} />
              <Route exact path = '/profile' component={Profile} />
              <Route exact path = '/studentslist' component={StudentsList} />
              
              {/* <Route exact path='/footer' component={Footer} /> */}

            </Switch>
            <Footer />
          </div>

        </div>
      </UserProvider>
    </Router>



  );
}

export default App;
