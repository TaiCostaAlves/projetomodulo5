import React from 'react';



export default function Cadastro() {
    
    const Submit = async (event) => {
        event.preventDefault()
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ PRODUTO: 'Batata doce frita', CATEGORIA: 'Aperitivos', VALOR:26})
        };
       
        let response = await fetch('https://app-menu-pub.herokuapp.com/cria-menu', requestOptions);
        let data = await response.json()
        console.log(data) 
    }

    
    

    return (
        <>
            <form>
                <input></input>
                <input></input>
                <input></input>
                <button onClick={Submit}>Envia bebê</button>
            </form>
           
        </>
    );
}