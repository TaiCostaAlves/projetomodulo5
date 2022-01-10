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
import { setLogin, setIdUsuario, setNomeUsuario, setTypeUsuario } from '../auth/Auth'



//import "./styles.css";

// import { Container } from './styles';

export default function Login() {
    const [visivelSenha, setVisivelSenha] = useState(true)
    //const [visvelLista, setVisivelLista] = useState(true)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [errorEmail, setErrorEmail] = React.useState(false)
    const [errorSenha, setErrorSenha] = React.useState(false)
    const [legendaSenha, setLegendaSenha] = React.useState('')
    const [legendaEmail, setLegendaEmail] = React.useState('')


    const handleDrawerToggle = () => {
        setVisivelSenha(!visivelSenha);
    };

    const handleSubmit = () => {
        console.log(senha)
        // const logins = {
        //   email: email,
        //   password: senha
        // }
        let emailConfirma = 'melhores@gmail.com'
        let senhaConfirma = '12345@T8'
        let validaEmail = false
        let validaSenha = false

        if (email === "") {
            validaEmail = true
            setErrorEmail(true)
            setLegendaEmail('O campo email é obrigatório')
        } else if (email !== emailConfirma) {
            validaEmail = true
            setErrorEmail(true)
            setLegendaEmail('Email incorreto')
        } else {
            validaEmail = false
            setErrorEmail(false)
            setLegendaEmail('')
        }
        if (senha === "") {
            validaSenha = true
            setErrorSenha(true)
            setLegendaSenha('O campo senha é obrigatório')
        } else if (senha !== senhaConfirma) {
            validaSenha = true
            setErrorSenha(true)
            setLegendaSenha('Senha incorreta')
        } else {
            validaSenha = false
            setErrorSenha(false)
            setLegendaSenha('')
        }

        console.log(validaEmail)
        console.log(validaSenha)
        if (validaEmail === true || validaSenha === true) {
            setLogin('')
        } else {
            setLogin('124567')
            setIdUsuario('melhores@gmail.com')
            setTimeout(() => { window.location.href = "/dashboard" }, 500)

        }
        //setNomeUsuario(response.data.user.name)
        //setTypeUsuario(response.data.user.external_user)
    }

    return (
        <div style={{marginBottom: '19px'}}>
            {/* <div style={{ backgroundColor: '#000' }}> */}
            {/*  <div style={{ display: 'grid', gridGap:'10px', gridTemplateColumns:'1fr 1fr', width: '700px', height: '700px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#ffffff' }}> */}
            {/* <div style={{ gridColumn: '1', backgroundColor: "#ff6347" }}></div>
                <div style={{ gridColumn: '2', backgroundColor: "#000000" }}></div>
                {/* <CardWrapper style={{ gridColumn: '1'}}> */}
            <CardWrapper >
                <CardHeader>
                    <CardHeading>Login Pub</CardHeading>
                </CardHeader>

                <CardBody>
                    {/* <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset> */}

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
                    </CardFieldset>
                </CardBody>
            </CardWrapper>
        </div>
    );
}




