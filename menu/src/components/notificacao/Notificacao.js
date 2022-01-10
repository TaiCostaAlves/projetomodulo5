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
    console.log(props)

const CardWrapperNot = styled.div`
    overflow: hidden;
    //padding: 0 0 5px;
    margin: 5px auto 0;
    width: 200px;
    height: 30px
    font-family: Quicksand, arial, sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
  `;
  
const CardHeaderNot = styled.header`
    padding-top: 5px;
    padding-bottom: 5px;
  `;
  
const CardHeadingNot = styled.h1`
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    color: #ffffff;
  `;
  return (
    <div >
    {type === 'sucess'? 
    <CardWrapperNot style={{backgroundColor: '#4dff61'}}>
      <CardHeaderNot>
        <CardHeadingNot><i style={{color:'#ffffff', marginRight: '10px'}} class="fas fa-exclamation-circle"></i>{title}</CardHeadingNot>
      </CardHeaderNot>
    </CardWrapperNot> : null }
    {type === 'error'?
    <CardWrapperNot style={{ backgroundColor: '#ff6347' }}>
      <CardHeaderNot>
        <CardHeadingNot><i style={{color:'#ffffff', marginRight: '10px'}} class="fas fa-exclamation-circle"></i>{title}</CardHeadingNot>
      </CardHeaderNot>
    </CardWrapperNot>: null}
  </div>
  );
}
