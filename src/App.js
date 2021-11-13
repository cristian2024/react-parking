import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavDrawer from './components/Navbar/Navbar';
import api from './api/api';

import { Outlet, Link } from 'react-router-dom';


import { Provider } from 'react-redux';
// import generateStore from './redux/store';


function App() {


  // iniciando el store
  // const store = generateStore()
  

  return (
    <div>
      {/* Aqui ira el componente de nav, reemplazar cuanto antes */}
      {/* <h1>Hola mundo</h1>

      

      <Link to="/entradas">Entradas</Link>{" "}
      <Link to="/parqueadero">Parqueadero</Link>
      <Outlet></Outlet> */}
      {/* <Link to="/login">
        Login
      </Link> */}

      <NavDrawer>

      </NavDrawer>

      <Outlet/>
    </div>


    // Provider brinda el store a todos los componentes hijos, por lo que al ponerlo en app, todos los componentes lo tienen a la mano
    // <Provider store={store}>
    //   <div className="App">
    //     <NavDrawer></NavDrawer>
    //     {/* <NavDrawer></NavDrawer>
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>

    //     </header> */}
    //   </div>
    // </Provider>
    
  );
}

export default App;
