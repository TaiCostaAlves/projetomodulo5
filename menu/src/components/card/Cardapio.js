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
} from "../../css/styles";


//import "./styles.css";



export default function Cardapio() {

  const [menuData, setMenuData] = useState([])
useEffect(()=>{
 // Aqui que vou chamar a API
  
},[])

  const handleDrawerToggle = () => {
    // setVisivelSenha(!visivelSenha);
};

  return (
    <div >
    <CardWrappercostumer>
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
  </div>
  );
}
