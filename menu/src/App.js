import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h>Olá Pub</h>} />
          <Route path="/criar-item-menu" element={<h1>Oi</h1>} />
          <Route path="/editar-item-menu" element={<h1>Oi</h1>} />
          <Route path="/excluir-item-menu" element={<h1>Oi</h1>} />
          <Route path="*" element={<h1>Erro 404</h1>} />
        </Routes> 
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
