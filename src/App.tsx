import {Outlet, Routes, BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Booking from './components/Booking';

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
  <Router>
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<Main />} />
        <Route path="booking" element={<Booking />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
