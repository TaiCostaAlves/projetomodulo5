import React, { useEffect, useState } from "react";
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
import { isAuthenticated, setIdUsuario, setNomeUsuario, setTypeUsuario } from '../auth/Auth'
import styled, { css } from "styled-components";
import Noticacao from '../notificacao/Notificacao'




//import "./styles.css";

// import { Container } from './styles';

export default function Dashboard() {
  const [data, setData] = useState([])
  const [status, setStatus] = useState(false)
  const [typeNotification, setTypeNotification] = useState('')
  const [titleNotification, setTitleNotification] = useState('')

  useEffect(() => {
    getUserAsync()
    console.log(!!isAuthenticated())
  }, [])

  async function getUserAsync() {
    let response = await fetch(`https://app-menu-pub.herokuapp.com/menu`);
    let data = await response.json()
    setData(data.menus)
  }
  const deleteItemAsync = async (id) => {
    let response = await fetch(`https://app-menu-pub.herokuapp.com/excluir/${id}`, {
      method: 'DELETE'
    })
    let data = await response.json()
    if (response.status == 200) {
      setTimeout(() => {
        window.location.reload()
      }, 2500)
      mudaStatus(true, 1)
      setTypeNotification('sucess')
      setTitleNotification('Editado com sucesso!')
    } else {
      mudaStatus(true, 0)
      setTypeNotification('error')
      setTitleNotification('Erro ao editar!')
    }


  }

  function mudaStatus(type, id) {
    type === true ? setStatus(true) : setStatus(false)
    aviso(id)
  }
  function aviso(id) {
    id === 1 ?
      setTimeout(() => {
        console.log("aqui")
        setStatus(false)
        window.location.href = '/dashboard'
      }, 2000) :
      setTimeout(() => {
        console.log("aqui")
        setStatus(false)
      }, 2000)

  }
  const handleCadastro = () => {
    window.location.href = '/criar-item-menu'
  }

  const handleEditar = (id) => {
    window.location.href = `/editar-item-menu/${id}`
  }

  const GridLayout = styled.div`
  display: grid;
  align-items: center;
  grid-template-areas:
    "id nome categoria valor actions";
  //grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
  grid-template-columns: 30px 200px 100px 50px 60px;
`;

  return (
    <div style={{ marginBottom: '10px' }}>
      {data.map((item) => (
        <CardWrapper style={{ width: '500px' }}>
          <CardHeader>
            <CardHeading>Lista de itens</CardHeading>
            <CardOptions>
              <GridLayout>
                <CardHeading style={{ gridArea: 'id', fontSize: '12px' }}>{item.ID}</CardHeading>
                <CardHeading style={{ gridArea: 'nome', fontSize: '12px' }}>{item.PRODUTO}</CardHeading>
                <CardHeading style={{ gridArea: 'categoria', fontSize: '12px' }}>{item.CATEGORIA}</CardHeading>
                <CardHeading style={{ gridArea: 'valor', fontSize: '12px' }}>{`R$ ${item.VALOR.toFixed(2)}`}</CardHeading>
                <CardOptionsItem style={{ gridArea: 'actions' }}>
                  <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} onClick={() => { handleEditar(item.ID) }} className="fas fa-edit" />
                  <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} onClick={() => { deleteItemAsync(item.ID) }} className="fas fa-trash-alt" />
                  <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} onClick={handleCadastro} className="fas fa-plus-circle" />
                </CardOptionsItem>
              </GridLayout>
            </CardOptions>
            {status ?
              <CardHeading style={{ marginBotton: '5px' }}><Noticacao type={typeNotification} title={titleNotification} /></CardHeading>
              :
              null
            }
          </CardHeader>
        </CardWrapper>
      ))}
    </div>
  );
}




