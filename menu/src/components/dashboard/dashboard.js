import React, { useState} from 'react';

// import { Container } from './styles';

export default function Dashboard() {
    const [visivelSenha, setVisivelSenha] = useState(true)
    
  return (
      <>
    <input type={visivelSenha ? 'text' : 'password'}></input>
      </>
  
    );
}

