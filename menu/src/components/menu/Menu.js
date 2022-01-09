import React, { useEffect , useState} from 'react';


export default function Menu() {
    const [data, setData] = useState([])
    useEffect(() => {getUserAsync()}, [])
    
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
        console.log(data)
        console.log(id)
    } 
   
    return (
        <>
        
            {data.map((item)=> (
                <ul>
                    <li>{item.ID}</li>
                    <li>{item.PRODUTO}</li>
                    <li>{item.CATEGORIA}</li>
                    <li>{item.VALOR}</li>
                    <button onClick={() => {deleteItemAsync(item.ID)}}>Excluir</button>
                </ul>
            ))}
           
        </>
    );
}