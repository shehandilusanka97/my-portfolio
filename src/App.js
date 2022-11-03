import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import PortfolioPage from './PortfolioPage/PortfolioPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/portfolio" exact element={<PortfolioPage/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
