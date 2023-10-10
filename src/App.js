import Header from './loyout/header/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './loyout/footer/Footer';
import Home from './component/home/Home';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
