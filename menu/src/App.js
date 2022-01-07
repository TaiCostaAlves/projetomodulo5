import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/menu/Menu'
import Cadastro from './components/form/Cadastro'
import Update from './components/editar/Update'
import Pub from './components/principal/Pub'
import Dashboard from './components/dashboard/dashboard'



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Pub/>} />
          <Route path="/criar-item-menu" element={<Cadastro/>} />
          <Route path="/listar-item-menu" element={<Menu/>} />
          <Route path="/editar-item-menu/:id" element={<Update/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="*" element={<h1>Erro 404</h1>} />
        </Routes> 
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
