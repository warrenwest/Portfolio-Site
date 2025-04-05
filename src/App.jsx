import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="header">
      <Header />
    </div>,
    <div className="portfolio-app">
      <Outlet />
    </div>,
    <div className="footer">
      <Footer />
    </div>
  );
}

export default App;
