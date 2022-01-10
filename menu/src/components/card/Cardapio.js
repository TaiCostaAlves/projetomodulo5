import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  CardWrappercostumer,
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
  CardParagrafo,
  GridTest
  } from "../../css/styles";


//import "./styles.css";



export default function Cardapio() {

  const [menuData, setMenuData] = useState([])
  useEffect(() => {
    // Aqui que vou chamar a API

  }, [])

  const handleDrawerToggle = () => {
    // setVisivelSenha(!visivelSenha);
  };

  return (

    <div >
      <div style={{ backgroundColor: '#000' }}>
       {/* <div style={{ display: 'grid', gridTemplateRows: '350px 350px', gridGap: '10px', gridTemplateAreas: "'div1 div2' 'div3 div4'", gridTemplateColumns: '1fr 1fr ', width: '1000px', height: '700px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#ffffff' }}> */}
          <GridTest>
          <CardWrappercostumer style={{ gridArea: 'div1', height: '250px' }}>
            <CardHeader>
              <CardHeading>{`Drinks`}</CardHeading>
            </CardHeader>

            <CardBody>
              {/* <CardFieldset>
          <CardInput placeholder="Username" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="E-mail" type="text" required />
        </CardFieldset> */}

              {/* <CardFieldset>
          <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
          <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
        </CardFieldset> */}

              <CardFieldset>
                <CardOptionsNote>Or sign up with</CardOptionsNote>

                {/* <CardOptions>
            <CardOptionsItem>
              <CardIcon className="fab fa-google" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-twitter" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-facebook" big />
            </CardOptionsItem>
          </CardOptions>*/}
              </CardFieldset>

              {/* <CardFieldset>
          <CardButton type="button">Sign Up</CardButton>
        </CardFieldset> */}

              <CardFieldset>
                <CardParagrafo>I already have an account</CardParagrafo>
              </CardFieldset>
            </CardBody>
          </CardWrappercostumer>

          <CardWrappercostumer style={{ gridArea: 'div2', height: '250px' }}>
            <CardHeader>
              <CardHeading>{`Drinks`}</CardHeading>
            </CardHeader>

            <CardBody>
              {/* <CardFieldset>
          <CardInput placeholder="Username" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="E-mail" type="text" required />
        </CardFieldset> */}

              {/* <CardFieldset>
          <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
          <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
        </CardFieldset> */}

              <CardFieldset>
                <CardOptionsNote>Or sign up with</CardOptionsNote>

                {/* <CardOptions>
            <CardOptionsItem>
              <CardIcon className="fab fa-google" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-twitter" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-facebook" big />
            </CardOptionsItem>
          </CardOptions>*/}
              </CardFieldset>

              {/* <CardFieldset>
          <CardButton type="button">Sign Up</CardButton>
        </CardFieldset> */}

              <CardFieldset>
                <CardParagrafo>I already have an account</CardParagrafo>
              </CardFieldset>
            </CardBody>
          </CardWrappercostumer>
          <CardWrappercostumer style={{ gridArea: 'div3', height: '250px' }}>
            <CardHeader>
              <CardHeading>{`Drinks`}</CardHeading>
            </CardHeader>

            <CardBody>
              {/* <CardFieldset>
          <CardInput placeholder="Username" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="E-mail" type="text" required />
        </CardFieldset> */}

              {/* <CardFieldset>
          <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
          <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
        </CardFieldset> */}

              <CardFieldset>
                <CardOptionsNote>Or sign up with</CardOptionsNote>

                {/* <CardOptions>
            <CardOptionsItem>
              <CardIcon className="fab fa-google" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-twitter" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-facebook" big />
            </CardOptionsItem>
          </CardOptions>*/}
              </CardFieldset>

              {/* <CardFieldset>
          <CardButton type="button">Sign Up</CardButton>
        </CardFieldset> */}

              <CardFieldset>
                <CardParagrafo>I already have an account</CardParagrafo>
              </CardFieldset>
            </CardBody>
          </CardWrappercostumer>

          <CardWrappercostumer style={{ gridArea: 'div4', height: '250px' }}>
            <CardHeader>
              <CardHeading>{`Drinks`}</CardHeading>
            </CardHeader>

            <CardBody>
              {/* <CardFieldset>
          <CardInput placeholder="Username" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="E-mail" type="text" required />
        </CardFieldset> */}

              {/* <CardFieldset>
          <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
          <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
        </CardFieldset> */}

              <CardFieldset>
                <CardOptionsNote>Or sign up with</CardOptionsNote>

                {/* <CardOptions>
            <CardOptionsItem>
              <CardIcon className="fab fa-google" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-twitter" big />
            </CardOptionsItem>

            <CardOptionsItem>
              <CardIcon className="fab fa-facebook" big />
            </CardOptionsItem>
          </CardOptions>*/}
              </CardFieldset>

              {/* <CardFieldset>
          <CardButton type="button">Sign Up</CardButton>
        </CardFieldset> */}

              <CardFieldset>
                <CardParagrafo>I already have an account</CardParagrafo>
              </CardFieldset>
            </CardBody>
          </CardWrappercostumer>

          </GridTest >
       {/* </div> */}
      </div>
      <div style={{ backgroundColor: '#000' }}>

      </div>
      
    //</div >
  );
}
