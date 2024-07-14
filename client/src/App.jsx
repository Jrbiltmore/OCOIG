
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/authActions';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Grants from './pages/Grants';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/app.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/grants" component={Grants} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
