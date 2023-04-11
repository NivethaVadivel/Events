import './App.css';
import {Route,Routes} from 'react-router-dom'
import { AddHotel } from './addHotel/addinghotel';
import { Adminhome } from './adminhome/adminhome';
import { AdminNav } from './adminnav/adminNav';

function App() {
  return (
    <div className="App">
      <AdminNav/>
      <Routes>
      <Route path="/home" element={<Adminhome/>}></Route>
      <Route path="/addHotel" element={<AddHotel/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
