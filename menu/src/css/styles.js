import styled, { css } from "styled-components";

export const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

// export const Headers = styled.header`
// top: 0; 
// max-height: 70px;
// width: 100vw;
// display: grid;
// grid-template-areas: "logo nav";
// background-color: #282c34;
// box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2)
// @media (max-width: 700px) {
// grid-template-areas: "logo burger" "nav nav";
// }

// img {
// grid-area: logo;
// height: 70px;
// }

// nav {
// display: grid;
// grid-area: nav;
// grid-template-columns: repeat(4, auto);
// align-items: center;
// justify-items: center;

//     a {
//         color: #fff;
//         font-size: 20px;
//         font-weight: 500;
//         transition: 0.5s;
//         text-decoration: none;


//         &:hover {
//         transform: scale(1.1);
//     }
//     }


//     @media (max-width: 700px) {
//         grid-template-rows: repeat(4, auto);
//         grid-template-columns: none;
//         grid-row-gap: 20px;
//         padding: 30px 0 30px;
//         background: rgba(40, 44, 47, 0.95);
//         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//         border-bottom-left-radius: 10px;
//         border-bottom-right-radius: 10px;
//     }
//     button {
//         padding: 10px;
//         outline: none;
//         border: none;
//         font-size: 20px;
//         color: #fff;
//         font-weight: 600;
//         background-color: rgba(255, 0, 0, 0.5);
//         box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);
//         border-radius: 10px;
//         cursor: pointer;
//         transition: 70ms;

//     &:active {
//         transform: translateY(3px);
//         box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
//         }
//     }

// }





// }

// `;

// export const Logo = styled.img`
// grid-area: logo;
// height: 70px;
// `;



// export const Button = styled.button`
// display: none;
// grid-area: burger;
// margin: 0 20px 0 0;
// padding: 0;
// justify-self: end;
// font-size: 40px;
// border: none;
// background: none;
// outline: none;
// transition: 0.1s;

// &:active {
//     transform: scale(1.2);
//   }

// @media (max-width: 700px) {
//     display: inline;
// }
// `;

// Card ===============================================

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
    font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;


//cardcostumer================================================
export const GridTest = styled.div`
  display: grid;
  height: 700px;
  width:1000px;
  grid-template-rows: 350px 350px;
  grid-template-areas:
    "div1, div2"
    "div3, div4";
    text-align: center;
  grid-gap: 0.25rem;
//  transition: all 0.25s ease-in-out;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    // grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "div1"
      "div2"
      "div3"
      "div4";
  }
`;
export const CardWrappercostumer = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  height: 400px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
   


`;
// export const CardWrappercostumer2 = styled.div`
//   overflow: hidden;
//   grid-area: div2;
//   padding: 0 0 32px;
//   margin: 48px auto 0;
//   width: 300px;
//   height: 400px;
//   font-family: Quicksand, arial, sans-serif;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
//   border-radius: 5px;



// `;
// export const CardWrappercostumer3 = styled.div`
//   overflow: hidden;
//   grid-area: div3;
//   padding: 0 0 32px;
//   margin: 48px auto 0;
//   width: 300px;
//   height: 400px;
//   font-family: Quicksand, arial, sans-serif;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
//   border-radius: 5px;



// `;
// export const CardWrappercostumer4 = styled.div`
//   overflow: hidden;
//   grid-area: div4;
//   padding: 0 0 32px;
//   margin: 48px auto 0;
//   width: 300px;
//   height: 400px;
//   font-family: Quicksand, arial, sans-serif;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
//   border-radius: 5px;



// `;
export const CardParagrafo = styled.p`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  // border-bottom: 1px solid #ddd;
  // cursor: pointer;
  // transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;


