// import React from 'react'
// import { useParams } from 'react-router-dom'



// export default function Update() {
//     const { id }  = useParams();
//     console.log(id)
//     const Submit = async (event) => {

//         event.preventDefault()

//         const requestOptions = {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ PRODUTO: 'Batata doce assada', CATEGORIA: 'Aperitivos', VALOR:28})
//         };

//         let response = await fetch(`https://app-menu-pub.herokuapp.com/menucriado/${id}`, requestOptions);
//         let data = await response.json()
//         console.log(data) 
//     }




//     return (
//         <>
//             <form>
//                 <input></input>
//                 <input></input>
//                 <input></input>
//                 <button onClick={Submit}>Envia bebê</button>
//             </form>

//         </>
//     );
// }

import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
import { useParams } from 'react-router-dom'
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    // CardIcon,
    CardFieldset,
    CardInput,
    // CardOptionsItem,
    // CardOptions,
    // CardOptionsNote,
    CardButton,
    // CardLink
} from "../../css/styles";
import styled from "styled-components";
import Noticacao from '../notificacao/Notificacao'

//import "./styles.css";



export default function Update() {
    const { id } = useParams();
    console.log(id)
    const [valor, setValor] = useState('')
    const [categoria, setCategoria] = useState('')
    const [produto, setProduto] = useState('')
    const [errorValor, setErrorValor] = useState(false)
    const [errorProduto, setErrorProduto] = useState(false)
    const [errorCategoria, setErrorCategoria] = useState(false)
    const [legendaValor, setLegendaValor] = useState('')
    const [legendaProduto, setLegendaProduto] = useState('')
    const [legendaCategoria, setLegendaCategoria] = useState('')
    const [valorCategoria, setValorCategoria] = useState('')
    const [status, setStatus] = useState(false)
    const [typeNotification, setTypeNotification] = useState('')
    const [titleNotification, setTitleNotification] = useState('')

    useEffect(() => {
        getUserAsync()
    },[])

    async function getUserAsync() {
        let response = await fetch(`https://app-menu-pub.herokuapp.com/menu/${id}`);
        let data = await response.json()
        const { ID, PRODUTO, CATEGORIA, VALOR } = data.menus[0]

        // pessa o numero como valor ao select
        switch (CATEGORIA) {
            case 'Comida':
                setValorCategoria(1)
                //setCategoria('Alimentos');
                break;
            case 'Bebidas':
                //setCategoria('Bebidas');
                setValorCategoria(2)
                break;
            case 'Porçoes':
                //setCategoria('Porçoes');
                setValorCategoria(3)
                break;
            case 'Lanches':
                //setCategoria('Lanches');
                setValorCategoria(4)
                break;
            default:
                setCategoria('');
        }
        // converte numero para string
        let valorString = VALOR.toFixed(2).toString()
        //let semVirgula = ''
        // troca virgula por ponto
        if (valorString.includes('.')) {
            console.log("to aqui")
            //semVirgula =
                setValor(valorString.replace('.', ','))
        }
        setProduto(PRODUTO)


    }

    const handleChangeSelect = (event) => {
        setValorCategoria(event.target.value)
        console.log(event.target.value)
        switch (event.target.value) {
            case '1':
                setCategoria('Comida');
                break;
            case '2':
                setCategoria('Bebidas');
                break;
            case '3':
                setCategoria('Porçoes');
                break;
            case '4':
                setCategoria('Lanches');
                break;
            default:
                setCategoria('');
        }

    };

    const handleCancelar = () => {
        setValor('')
        setCategoria('')
        setProduto('')
        setLegendaValor('')
        setLegendaCategoria('')
        setLegendaProduto('')
        // window.location.href='/dashboard'
    }

    const handleValor = (event) => {
        let semVirgula = ''
        // troca virgula por ponto
        if (event.target.value.includes(',')) {

            semVirgula = event.target.value.replace(/,/g, '.')
            setValor(semVirgula)
        } else {
            setValor(event.target.value)
        }
        console.log(semVirgula)

    }

    const Submit = async (event) => {

        event.preventDefault()
        let valorNummber = valor.replace(',', '.')
        console.log(Number(valorNummber))
        console.log(produto)
        let categoriaNome = ''
        if (categoria === '') {
            switch (valorCategoria) {
                case 1:
                    categoriaNome = 'Comida';
                    break;
                case 2:
                    categoriaNome = 'Bebidas';
                    break;
                case 3:
                    categoriaNome = 'Porçoes';
                    break;
                case 4:
                    categoriaNome = 'Lanches';
                    break;
                default:
                    categoriaNome = '';
            }
        } else {

            categoriaNome = categoria
        }
        console.log(categoriaNome)

        let validaProduto = false
        let validaCategoria = false
        let validaValor = false
        if (produto === '') {
            validaProduto = true
            setErrorProduto(true)
            setLegendaProduto('O campo produto é obrigatório')
        } else {
            validaProduto = false
            setErrorProduto(false)
            setLegendaProduto('')
        }

        if (categoriaNome === '') {
            validaCategoria = true
            setErrorCategoria(true)
            setLegendaCategoria('O campo categoria é obrigatório')
        } else {
            validaCategoria = false
            setErrorCategoria(false)
            setLegendaCategoria('')
        }

        if (valorNummber === '') {
            validaValor = true
            setErrorValor(true)
            setLegendaValor('O campo valor é obrigatório')
        } else {
            validaValor = false
            setErrorValor(false)
            setLegendaValor('')
        }

        if (valorCategoria) {
            setLegendaCategoria('')
        }

        if (validaValor === true || validaCategoria === true || validaProduto === true) {
            mudaStatus(true , 0)
                setTypeNotification('error')
                setTitleNotification('Erro ao editar!')
        } else {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ PRODUTO: produto, CATEGORIA: categoriaNome, VALOR: Number(valorNummber) })
            };

            let response = await fetch(`https://app-menu-pub.herokuapp.com/menucriado/${id}`, requestOptions);
            let data = await response.json()
            if (response.status == 200) {
                mudaStatus(true, 1)
                setTypeNotification('sucess')
                setTitleNotification('Editado com sucesso!')
            }else{
                mudaStatus(true , 0)
                setTypeNotification('error')
                setTitleNotification('Erro ao editar!')
            }
        }
    }
    function mudaStatus(type, id) {
        type === true? setStatus(true) : setStatus(false)
        aviso(id)
    }
    function aviso(id) {
        id === 1 ?
        setTimeout(() => {
            console.log("aqui")
            setStatus(false)
            window.location.href='/dashboard'
        }, 2000) :
        setTimeout(() => {
            console.log("aqui")
            setStatus(false)
        }, 2000)
     
    }
    //clearTimeout(aviso)
    const Select = styled.select`
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    //padding-left: 5px;
    font-size: 14px;
    border: none;
    //margin-left: 10px;
    border-bottom: 1px solid #ddd;
    outline: none;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 0px 0px;
    }
    `;


    return (
        <div style={{marginBottom: '35px'}}>
            <CardWrapper>
                <CardHeader>
                    {status ? 
                        <CardHeading style={{marginBotton: '5px'}}><Noticacao type={typeNotification} title={titleNotification}/></CardHeading> 
                        : 
                        null
                        }
                        <CardHeading>Editar Item</CardHeading>
                        
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardInput
                            placeholder="Produto"
                            type="text"
                            value={produto}
                            onChange={event => setProduto(event.target.value)}
                            required />
                        {errorProduto ?
                            <p style={{ fontSize: '0.7rem' }}>{legendaProduto}</p>
                            : null}
                    </CardFieldset>

                    <CardFieldset>
                        <Select value={valorCategoria} onChange={handleChangeSelect}>
                            <option value="" hidden>
                                Selecione
                            </option>
                            <option value={1}>Comida</option>
                            <option value={2}>Bebidas</option>
                            <option value={3}>Porçoes</option>
                            <option value={4}>Lanches</option>
                        </Select>
                        {errorCategoria ?
                            <p style={{ fontSize: '0.7rem' }}>{legendaCategoria}</p>
                            : null}
                    </CardFieldset>

                    <CardFieldset>
                        <CardInput
                            //value={` R$ ${valor}`}
                            value={valor}
                            placeholder="R$ 0,00"
                            type="text"
                            required
                            onChange={handleValor} />
                        {errorValor ?
                            <p style={{ fontSize: '0.7rem' }}>{legendaValor}</p>
                            : null}
                    </CardFieldset>



                    {/* <CardFieldset>
          <CardOptionsNote>Or sign up with</CardOptionsNote>

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
        </CardFieldset>  */}

                    <CardFieldset>
                        <CardButton onClick={Submit} style={{ backgroundColor: '#4dff61' }} type="button">Salvar</CardButton>
                    </CardFieldset>
                    <CardFieldset>
                        <CardButton onClick={handleCancelar} style={{ backgroundColor: '#ff6347' }} type="button">Cancelar</CardButton>
                    </CardFieldset>

                    {/* <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset> */}
                </CardBody>
            </CardWrapper>
        </div>
    );
}
