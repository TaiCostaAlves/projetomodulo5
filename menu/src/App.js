import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/menu/Menu'
import Cadastro from './components/form/Cadastro'
import Update from './components/editar/Update'
import Pub from './components/principal/Pub'
import Dashboard from './components/dashboard/Dashboard'
import Cardapio from './components/card/Cardapio'
//import PrivateRoute from './components/auth/PrivateRoute'
//import { Component } from 'react'
import { isAuthenticated, response } from "./components/auth/Auth";
import { } from "react-router-dom";
import Login from './components/login/Login'
import Contato from './components/contato/contato'

function RequireAuth({ children, redirectTo }) {
  let isAuthenticatede = isAuthenticated();
  console.log(isAuthenticatede)
  return isAuthenticatede ? children : <Navigate to={redirectTo} />;
}

function Public({ children, redirectTo }) {
  let isAuthenticatede = false;
  console.log(isAuthenticatede)
  console.log(children)
  return isAuthenticatede ? children : <Navigate to={redirectTo} />;
}

// const PrivateRoute = ({ component: Component, redirectTo, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>

//       isAuthenticated() ? (
//         <Component {...props} />
//       ) :
//         (
//           // <Navigate to={{ pathname: "/", state: { from: props.location } }} />
//           <Navigate to={redirectTo} />
//         )
//     }
//   />
// );



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Pub />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contato' element={<Contato/>} />
          {/* Rotas Privadas */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth redirectTo="/login">
                <Dashboard />
              </RequireAuth>

            }
          />
           <Route
            path="/criar-item-menu"
            element={
              <RequireAuth redirectTo="/login">
                <Cadastro />
              </RequireAuth>

            }
          />
           <Route
            path="/editar-item-menu/:id"
            element={
              <RequireAuth redirectTo="/login">
                {<Update />}
              </RequireAuth>

            }
          />

          <Route path="/listar-item-menu" element={<Menu />} />
          {/* <Route path="/editar-item-menu/:id" element= {<Update />}/> */}

          {/* Rota que não existem */}
          <Route path="*" element={<h1>Erro 404</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
