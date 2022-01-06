import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/menu/Menu'
import Cadastro from './components/form/Cadastro'
import Update from './components/editar/Update'
import './App.css'



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Olá Pub</h1>} />
          <Route path="/criar-item-menu" element={<Cadastro/>} />
          <Route path="/listar-item-menu" element={<Menu/>} />
          <Route path="/editar-item-menu/:id" element={<Update/>} />
          <Route path="*" element={<h1>Erro 404</h1>} />
        </Routes> 
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
