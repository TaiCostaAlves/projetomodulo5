import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  
} from "../../css/styles";


//import "./styles.css";



export default function Noticacao(props) {
    const {title, type }= props

const CardWrapperNot = styled.div`
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 300px;
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
  `;
  
const CardHeaderNot = styled.header`
    padding-top: 32px;
    padding-bottom: 32px;
  `;
  
const CardHeadingNot = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  `;
  return (
    <div >
    {type === true? 
    <CardWrapperNot>
      <CardHeaderNot>
        <CardHeadingNot>{titulo}</CardHeadingNot>
      </CardHeaderNot>
    </CardWrapperNot> : 
    <CardWrapperNot>
      <CardHeaderNot>
        <CardHeadingNot>{titulo}</CardHeadingNot>
      </CardHeaderNot>
    </CardWrapperNot>}
  </div>
  );
}
