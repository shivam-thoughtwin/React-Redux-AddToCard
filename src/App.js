import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path='/' element={<Cards />} />
          <Route path='/cart/:id' element={<CardDetails />} />
        </Routes>
    </>
  );
}

export default App;
