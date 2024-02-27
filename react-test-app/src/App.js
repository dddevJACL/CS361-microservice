import './App.css';
import HouseList from './pages/HouseList';
import Search from './pages/Search';
import SingleHouse from './pages/SingleHouse';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HouseList />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<SingleHouse />} />
      </Routes>
      

    </div>
  );
}

export default App;
