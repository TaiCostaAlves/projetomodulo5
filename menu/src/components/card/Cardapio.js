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


//import "./styles.css";



export default function Cardapio() {

  const [visivelSenha, setVisivelSenha] = useState(true)

  const handleDrawerToggle = () => {
    setVisivelSenha(!visivelSenha);
};
  return (
    <div >
    <CardWrapper>
      <CardHeader>
        <CardHeading>Sign in</CardHeading>
      </CardHeader>

      <CardBody>
        <CardFieldset>
          <CardInput placeholder="Username" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="E-mail" type="text" required />
        </CardFieldset>

        <CardFieldset>
          <CardInput placeholder="Password" type={visivelSenha ? 'text' : 'password'} required />
          <CardIcon onClick={handleDrawerToggle} className="fa fa-eye" eye small />
        </CardFieldset>

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

        <CardFieldset>
          <CardButton type="button">Sign Up</CardButton>
        </CardFieldset>

        <CardFieldset>
          <CardLink>I already have an account</CardLink>
        </CardFieldset>
      </CardBody>
    </CardWrapper>
  </div>
  );
}
