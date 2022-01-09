import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardInput,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
  CardLink
} from "../../css/styles";
import { login, setIdUsuario, setNomeUsuario, setTypeUsuario } from '../auth/Auth'



//import "./styles.css";

// import { Container } from './styles';

export default function Dashboard() {
  


  const handleDrawerToggle = () => {
    //setVisivelSenha(!visivelSenha);
  };

  const handleSubmit = () => {
  
  }

  return (
    <div >
      <CardWrapper>
        <CardHeader>
          <CardHeading>Login Pub</CardHeading>
          <CardOptions>
                <CardOptionsItem>
                  <CardIcon className="fas fa-edit" big />
                </CardOptionsItem>
    
                <CardOptionsItem>
                  <CardIcon className="fas fa-trash-alt" big />
                </CardOptionsItem>
    
                <CardOptionsItem>
                  <CardIcon className="fab fa-facebook" big />
                </CardOptionsItem>
              </CardOptions>
        </CardHeader>

        <CardBody>
          {/* <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="E-mail"
              type="text"
              required
              autoFocus
              // error={errorEmail}
              // helperText={legendaEmail}
              value={email}
              onChange={event => setEmail(event.target.value)} />
            {errorEmail ?
              <p style={{ fontSize: '0.7rem' }}>{legendaEmail}</p>
              : null}
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Password"
              type={visivelSenha ? 'text' : 'password'}
              required
              value={senha}
              onChange={(event) => { setSenha(event.target.value) }}
            />
            <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
            {errorSenha ?
              <p style={{ fontSize: '0.7rem' }}>{legendaSenha}</p>
              : null}
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>Fazer login com:</CardOptionsNote>

            <CardOptions>
                <CardOptionsItem>
                  <CardIcon className="fab fa-google" big />
                </CardOptionsItem>
    
                <CardOptionsItem>
                  <CardIcon className="fab fa-twitter" big />
                </CardOptionsItem>
    
                <CardOptionsItem>
                  <CardIcon className="fab fa-facebook" big />
                </CardOptionsItem>
              </CardOptions>
          </CardFieldset>

          <CardFieldset>
            <CardButton onClick={handleSubmit} type="button">Entrar</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink>Esqueci minha senha</CardLink>
          </CardFieldset> */}
        </CardBody>
      </CardWrapper>
    </div>
  );
}




