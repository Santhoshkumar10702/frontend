import {Outlet, Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Booking from './components/Booking';
import BookingConfirmation from './components/BookingConfirmation/BookingConfirmation';
import {persistor, store} from './store';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<BasicLayout />}>
            <Route index element={<Main />} />
            <Route path="booking" element={<Booking />} />
            <Route
              path="booking-confirmation"
              element={<BookingConfirmation />}
            />
          </Route>
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
