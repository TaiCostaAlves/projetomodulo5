import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h>Olá Pub</h>} />
        <Route path="/criar-item-menu" element={<Form/>} />
        <Route path="/criar-item-menu" element={<Form/>} />
        <Route path="/criar-item-menu" element={<Form/>} />
        <Route path="*" element={<h1>Erro 404</h1>} />
        </Routes> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
