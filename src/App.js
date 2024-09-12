
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import Header from './components/Header';
import Orders from './components/Orders';
import Logout from './components/Logout';
import Contact from './components/Contact';
import Navbars from './components/Navbars';
import Onepage from './components/Onepage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div >
<Router>
      
     <Routes>
      <Route path='/reactapp' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/'element={<Login/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/Header' element={<Header/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/orders' element={<Orders/>}></Route>
        <Route path='/navbar' element={<Navbars/>}></Route>
        <Route path='/orders/:id' element={<Onepage />} />
       
     </Routes> 
      </Router>
    </div>
  );
}

export default App;
