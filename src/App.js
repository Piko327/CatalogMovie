
import './App.css';
import {Header} from "../src/comonents/Header/Header"
import { Home } from './comonents/Home/Home';
import { Dashboard } from './comonents/Dashboard/Dashboard';
import { Register } from './comonents/Register/Register';
import { Login } from './comonents/Login/Login';
import { Create } from './comonents/Create/Create';
import { Details } from './comonents/Details/Details';
import { Edit } from './comonents/Edit/Edit';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
 
    <body>
  
  < Header/>
    <main>
 <Routes>
   
    <Route path='/' element={ <Home/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Register' element={<Register/> }/>
    <Route path='/Login' element={<Login/> }/>
    <Route path='/Create' element={<Create/>}/>
    <Route path='/Details' element={<Details/>}/>
    <Route path='/Edit' element={<Edit/>}/>
      
 
  


    </Routes>
    </main>
 


  <footer>
    <p>@MusicLibrary</p>
  </footer>
</body>
   
  );
}

export default App;
