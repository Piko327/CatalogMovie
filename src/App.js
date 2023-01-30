
import './App.css';
import { Create ,Dashboard,Delete,Details,Edit,Header,Home,Logout,Login,Register } from './comonents';
import { Route, Routes } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { useState } from 'react';
import { Logout } from './comonents/Logout/Logout';
import { useLocalStorage } from './Hooks/useLocalStorage';
import { DataContext } from './context/DataContext';
function App() {

const [data,setData]= useState({})
const setInfo=(data)=>setData(data)


  return (
 <>

     <AuthProvider>
  < Header/>
  <DataContext.Provider value={{data,setInfo}}>
    <main>
 <Routes>
    <Route path='/' element={ <Home/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Register' element={<Register/> }/>
    <Route path='/Login' element={<Login/> }/>
    <Route path='/Create' element={<Create/>}/>
    <Route path='/Details/:id' element={<Details/>}/>
    <Route path='/Edit/:id' element={<Edit/>}/>
    <Route path='Delete/:id' element={<Delete/>}/>
    <Route path='/Logout' element={<Logout/>}/>
 </Routes>
    </main>
    </DataContext.Provider>
  <footer>
    <p>@MusicLibrary</p>
  </footer>
  </AuthProvider>

</>
  );

}

export default App;
