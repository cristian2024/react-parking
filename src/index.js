import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Expenses from './components/tests/Expenses';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider,MuiThemeProvider } from '@material-ui/core';
import { createTheme } from '@mui/material';
import generateStore from './redux/store';
import Login from './components/login/Login';

import { Provider } from 'react-redux';

// import palette from './others/palette'

const palette  = createTheme({
  palette: {
    primary: {
      // main: '#14FFEC'
      main: '#ffff6f'
    },
    secondary: {
      main: '#0D7377'
    },
    background:{
      main: '#323232'
    }
  }
})

const store = generateStore()
ReactDOM.render(
  <ThemeProvider theme={palette}>
    
    <Provider store={store}>
      {/* aqui se ponen las rutas que usara la app */}
      <BrowserRouter>
        <Routes>
          <Route>
            {/* la Ruta app es la ruta principal de la aplicacion, pero el login y register no son hijos de ella */}
            <Route path="/" element={ <App />}>
              {/* Ruta para las entradas */}
              <Route path="entradas" element={<Login></Login>}>
                {/* Colocar el componente correpondiente a entrada y salida */}
              </Route>
              {/* Ruta para el parqueadero */}
              <Route path="parqueadero">
                {/* Colocar el componente correpondiente a parqueadero */}
                Parqueadero
              </Route>

              <Route path="residentes">
                {/* Colocar el componente correpondiente a residentes */}
                Residentes
              </Route>

              <Route path="hogares">
                {/* Colocar el componente correpondiente a hogares */}
                Hogares
              </Route>

              <Route path="vehiculos">
                {/* Colocar el componente correpondiente a vehiculos */}
                vehiculos
              </Route>
            </Route>
            <Route path="login" element={<Login></Login>}>

            </Route>
          </Route>
        </Routes>
        {/* <Routes>
          <Route exact path= "/" element= {<App />} >
            <Route path = 'expenses' element = {<Expenses/>}/>
          </Route>
          

          
        </Routes>
        <App /> */}
      </BrowserRouter>
    </Provider>
    
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
