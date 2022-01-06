import React from 'react'
import { useParams } from 'react-router-dom'



export default function Update() {
    const { id }  = useParams();
    console.log(id)
    const Submit = async (event) => {

        event.preventDefault()
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ PRODUTO: 'Batata doce assada', CATEGORIA: 'Aperitivos', VALOR:28})
        };
       
        let response = await fetch(`https://app-menu-pub.herokuapp.com/menucriado/${id}`, requestOptions);
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