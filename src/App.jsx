import './App.css';
import Login from './pages/login';
import Planet from './pages/planet';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <h1>Star Wars</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/planet" element={<Planet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
