// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import {
//   CardWrappercostumer,
//   CardHeader,
//   CardHeading,
//   CardBody,
//   CardIcon,
//   CardFieldset,
//   CardInput,
//   CardOptionsItem,
//   CardOptions,
//   CardOptionsNote,
//   CardButton,
//   CardParagrafo,
//   GridTest
//   } from "../../css/styles";


// //import "./styles.css";



// export default function Cardapio() {

//   const [menuData, setMenuData] = useState([])
//   useEffect(() => {
//     // Aqui que vou chamar a API

//   }, [])

//   const handleDrawerToggle = () => {
//     // setVisivelSenha(!visivelSenha);
//   };

//   return (

//     <div >
//       <div style={{ backgroundColor: '#000' }}>
//        {/* <div style={{ display: 'grid', gridTemplateRows: '350px 350px', gridGap: '10px', gridTemplateAreas: "'div1 div2' 'div3 div4'", gridTemplateColumns: '1fr 1fr ', width: '1000px', height: '700px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#ffffff' }}> */}
//           <GridTest>
//           <CardWrappercostumer style={{ gridArea: 'div1', height: '250px' }}>
//             <CardHeader>
//               <CardHeading>{`Drinks`}</CardHeading>
//             </CardHeader>

//             <CardBody>
//               {/* <CardFieldset>
//           <CardInput placeholder="Username" type="text" required />
//         </CardFieldset>

//         <CardFieldset>
//           <CardInput placeholder="E-mail" type="text" required />
//         </CardFieldset> */}

//               {/* <CardFieldset>
//           <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
//           <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardOptionsNote>Or sign up with</CardOptionsNote>

//                 {/* <CardOptions>
//             <CardOptionsItem>
//               <CardIcon className="fab fa-google" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-twitter" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-facebook" big />
//             </CardOptionsItem>
//           </CardOptions>*/}
//               </CardFieldset>

//               {/* <CardFieldset>
//           <CardButton type="button">Sign Up</CardButton>
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardParagrafo>I already have an account</CardParagrafo>
//               </CardFieldset>
//             </CardBody>
//           </CardWrappercostumer>

//           <CardWrappercostumer style={{ gridArea: 'div2', height: '250px' }}>
//             <CardHeader>
//               <CardHeading>{`Drinks`}</CardHeading>
//             </CardHeader>

//             <CardBody>
//               {/* <CardFieldset>
//           <CardInput placeholder="Username" type="text" required />
//         </CardFieldset>

//         <CardFieldset>
//           <CardInput placeholder="E-mail" type="text" required />
//         </CardFieldset> */}

//               {/* <CardFieldset>
//           <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
//           <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardOptionsNote>Or sign up with</CardOptionsNote>

//                 {/* <CardOptions>
//             <CardOptionsItem>
//               <CardIcon className="fab fa-google" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-twitter" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-facebook" big />
//             </CardOptionsItem>
//           </CardOptions>*/}
//               </CardFieldset>

//               {/* <CardFieldset>
//           <CardButton type="button">Sign Up</CardButton>
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardParagrafo>I already have an account</CardParagrafo>
//               </CardFieldset>
//             </CardBody>
//           </CardWrappercostumer>
//           <CardWrappercostumer style={{ gridArea: 'div3', height: '250px' }}>
//             <CardHeader>
//               <CardHeading>{`Drinks`}</CardHeading>
//             </CardHeader>

//             <CardBody>
//               {/* <CardFieldset>
//           <CardInput placeholder="Username" type="text" required />
//         </CardFieldset>

//         <CardFieldset>
//           <CardInput placeholder="E-mail" type="text" required />
//         </CardFieldset> */}

//               {/* <CardFieldset>
//           <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
//           <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardOptionsNote>Or sign up with</CardOptionsNote>

//                 {/* <CardOptions>
//             <CardOptionsItem>
//               <CardIcon className="fab fa-google" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-twitter" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-facebook" big />
//             </CardOptionsItem>
//           </CardOptions>*/}
//               </CardFieldset>

//               {/* <CardFieldset>
//           <CardButton type="button">Sign Up</CardButton>
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardParagrafo>I already have an account</CardParagrafo>
//               </CardFieldset>
//             </CardBody>
//           </CardWrappercostumer>

//           <CardWrappercostumer style={{ gridArea: 'div4', height: '250px' }}>
//             <CardHeader>
//               <CardHeading>{`Drinks`}</CardHeading>
//             </CardHeader>

//             <CardBody>
//               {/* <CardFieldset>
//           <CardInput placeholder="Username" type="text" required />
//         </CardFieldset>

//         <CardFieldset>
//           <CardInput placeholder="E-mail" type="text" required />
//         </CardFieldset> */}

//               {/* <CardFieldset>
//           <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
//           <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardOptionsNote>Or sign up with</CardOptionsNote>

//                 {/* <CardOptions>
//             <CardOptionsItem>
//               <CardIcon className="fab fa-google" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-twitter" big />
//             </CardOptionsItem>

//             <CardOptionsItem>
//               <CardIcon className="fab fa-facebook" big />
//             </CardOptionsItem>
//           </CardOptions>*/}
//               </CardFieldset>

//               {/* <CardFieldset>
//           <CardButton type="button">Sign Up</CardButton>
//         </CardFieldset> */}

//               <CardFieldset>
//                 <CardParagrafo>I already have an account</CardParagrafo>
//               </CardFieldset>
//             </CardBody>
//           </CardWrappercostumer>

//           </GridTest >
//        {/* </div> */}
//       </div>
//       <div style={{ backgroundColor: '#000' }}>

//       </div>
      
//     //</div >
//   );
// }
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
//import { isAuthenticated, setIdUsuario, setNomeUsuario, setTypeUsuario } from '../auth/Auth'
import styled, { css } from "styled-components";
import myImage from '../../assets/comida-cardapio.jpg';



export default function Cardapio() {
    const [data, setData] = useState([])
    const [dataFiltradaBebidas, setDataFiltradaBebidas] = useState([])
    const [dataFiltradaComidas, setDataFiltradaComidas] = useState([])
    useEffect(() => { getUserAsync() }, [])

    async function getUserAsync() {
        let response = await fetch(`https://app-menu-pub.herokuapp.com/menu`);
        let data = await response.json()
        const dataFiltradaBebida = data.menus.filter((item) => item.CATEGORIA == 'Bebidas' || item.CATEGORIA == 'BEBIDA')
        const dataFiltradaComida = data.menus.filter((item) => item.CATEGORIA == 'Comida')
        setDataFiltradaBebidas(dataFiltradaBebida)
        setDataFiltradaComidas(dataFiltradaComida)
        console.log(data.menus)
        setData(data.menus)
    }
    // const deleteItemAsync = async (id) => {
    //     let response = await fetch(`https://app-menu-pub.herokuapp.com/excluir/${id}`, {
    //         method: 'DELETE'
    //     })
    //     let data = await response.json()
    //     console.log(data)
    //     console.log(id)
    // } 

    // return (
    //     <>

    //         {data.map((item)=> (
    //             <ul>
    //                 <li>{item.ID}</li>
    //                 <li>{item.PRODUTO}</li>
    //                 <li>{item.CATEGORIA}</li>
    //                 <li>{item.VALOR}</li>
    //                 <button>Excluir</button>
    //             </ul>
    //         ))}

    //     </>
    // );

    const GridLayout = styled.div`
    display: grid;
    align-items: center;
    grid-template-areas:
      "id nome categoria valor actions";
    //grid-template-rows: 1fr 1fr 1fr 1fr  ;
    grid-template-columns: 10px 150px 100px 50px;
  `;

    const GridGeral = styled.div`
   display: grid;
   align-items: center;
   grid-template-areas:
     "bebida comida";
   //grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
   grid-template-columns: 1fr 1fr;
 `;

 const CardWrapper1 = styled.div`
  overflow: hidden;
  padding: 0 0 10px;
  margin: 10px auto 0;
  width: 800px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

    return (
        <div>
            <CardWrapper1 style={{ width: '800px' }}>
                <img style={{width:'100%', height: '200px' }} src={myImage}></img>
                <GridGeral >
                    <CardWrapper1 style={{ gridArea: 'comida', width: '350px' }}>
                        <CardHeader>
                            <CardHeading>Comidas</CardHeading>
                            <CardOptions>
                                <GridLayout>
                                  

                                    <CardHeading style={{ gridArea: 'id', fontSize: '12px' }}>id</CardHeading>
                                    <CardHeading style={{ gridArea: 'nome', fontSize: '12px' }}>Nome</CardHeading>
                                    <CardHeading style={{ gridArea: 'categoria', fontSize: '12px' }}>Categoria</CardHeading>
                                    <CardHeading style={{ gridArea: 'valor', fontSize: '12px' }}>Valor</CardHeading>
                                </GridLayout>
                                {dataFiltradaComidas.map((item) => (
                                    <GridLayout>
                                        <CardHeading style={{ gridArea: 'id', fontSize: '12px' }}>{item.ID}</CardHeading>
                                        <CardHeading style={{ gridArea: 'nome', fontSize: '12px' }}>{item.PRODUTO}</CardHeading>
                                        <CardHeading style={{ gridArea: 'categoria', fontSize: '12px' }}>{item.CATEGORIA}</CardHeading>
                                        <CardHeading style={{ gridArea: 'valor', fontSize: '12px' }}>{item.VALOR}</CardHeading>
                                        {/* <CardOptionsItem style={{ gridArea: 'actions' }}>
                                    <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} className="fas fa-edit" />
                                    <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} className="fas fa-trash-alt" />
                                    <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} className="fas fa-plus-circle" />
                                </CardOptionsItem> */}
                                    </GridLayout>
                                ))}
                            </CardOptions>
                        </CardHeader>
                    </CardWrapper1>
                    <CardWrapper1 style={{ gridArea: 'bebida', width: '350px' }}>
                        <CardHeader>
                            <CardHeading>Bebidas</CardHeading>
                            <CardOptions>
                                <GridLayout>
                                    <CardHeading style={{ gridArea: 'id', fontSize: '12px' }}>id</CardHeading>
                                    <CardHeading style={{ gridArea: 'nome', fontSize: '12px' }}>Nome</CardHeading>
                                    <CardHeading style={{ gridArea: 'categoria', fontSize: '12px' }}>Categoria</CardHeading>
                                    <CardHeading style={{ gridArea: 'valor', fontSize: '12px' }}>Valor</CardHeading>
                                </GridLayout>
                                {dataFiltradaBebidas.map((item) => (
                                    <GridLayout>
                                        <CardHeading style={{ gridArea: 'id', fontSize: '12px' }}>{item.ID}</CardHeading>
                                        <CardHeading style={{ gridArea: 'nome', fontSize: '12px' }}>{item.PRODUTO}</CardHeading>
                                        <CardHeading style={{ gridArea: 'categoria', fontSize: '12px' }}>{item.CATEGORIA}</CardHeading>
                                        <CardHeading style={{ gridArea: 'valor', fontSize: '12px' }}>{item.VALOR}</CardHeading>
                                        {/* <CardOptionsItem style={{ gridArea: 'actions' }}>
                                    <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} className="fas fa-edit" />
                                    <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} className="fas fa-trash-alt" />
                                    <CardIcon style={{ paddingLeft: "1.5px", paddingRight: '1.5px' }} className="fas fa-plus-circle" />
                                </CardOptionsItem> */}
                                    </GridLayout>
                                ))}
                            </CardOptions>
                        </CardHeader>
                    </CardWrapper1>
                </GridGeral>
            </CardWrapper1>
        </div>
    );
}
