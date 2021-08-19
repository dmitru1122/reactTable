import { React } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/index';
import '../theme/main.scss';

import Header from '../components/main-layout/header/Header';
import Footer from '../components/main-layout/footer/Footer';
import HomePage from '../components/pages/home-page/HomePage';
import Request from '../components/pages/request/Request';
import createLoacalStorage from '../fakeDb/connect';

function App() {
  createLoacalStorage();
  return (
    <div className='App'>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/request/:id' component={Request} />
            <Route exact path='/' component={HomePage} />
            <Route component={HomePage} />
            <Footer />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
