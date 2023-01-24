
import './App.css';
import {Header} from "../src/comonents/Header/Header"
import { Home } from './comonents/Home/Home';
import { Dashboard } from './comonents/Dashboard/Dashboard';
import { Register } from './comonents/Register/Register';
import { Login } from './comonents/Login/Login';
import { Create } from './comonents/Create/Create';
import { Details } from './comonents/Details/Details';
import { Edit } from './comonents/Edit/Edit';
function App() {
  return (
    <div className="App">
    <body>
  <div id="wrapper">
   <Header/>

    <main>
      {/* <!-- Home page --> */}
    <Home/>
{/* 
      {/* <!-- Dashboard page --> */}
    <Dashboard/>

      {/* <!-- Register Page (Only for Guest users) --> */}
     <Register/>

      {/* <!-- Login Page (Only for Guest users) --> */}
  <Login/>

      {/* <!-- Create Page (Only for logged-in users) --> */}
   <Create/>
      {/* <!-- Details page --> */}
  <Details/>
<Edit/>
  

    </main>
  </div>
  <footer>
    <p>@MusicLibrary</p>
  </footer>
</body>
    </div>
  );
}

export default App;
