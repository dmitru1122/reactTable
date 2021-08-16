import { React, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/index';
import '../theme/main.scss';

import Header from '../components/main-layout/header/Header';
import Footer from '../components/main-layout/footer/Footer';
import HomePage from '../components/pages/home-page/HomePage';
// import AddRequest from '../components/pages/add-request/AddNewRequest';
// import EditRequest from '../components/pages/edit-request/EditRequest';
// import Request from '../components/pages/request/Request';
import { createLoacalStorage } from '../fakeDb/sampleData';

const Request = lazy(() => import('../components/pages/request/Request'));
const EditRequest = lazy(() => import('../components/pages/edit-request/EditRequest'));
const AddRequest = lazy(() => import('../components/pages/add-request/AddNewRequest'));

function App() {
  createLoacalStorage();
  return (
    <div className='App'>
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Header />
            <Switch>
              <Route exact path='/addRequest/:id' component={AddRequest} />
              <Route exact path='/editRequest/:id' component={EditRequest} />
              <Route exact path='/editRequest/:id' component={EditRequest} />
              <Route exact path='/request/:id' component={Request} />
              <Route exact path='/' component={HomePage} />
              <Route component={HomePage} />
              <Footer />
            </Switch>
          </Router>
        </Suspense>
      </Provider>
    </div>
  );
}

export default App;
