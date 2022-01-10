import React from 'react';
import './pub.css'
import home from '../../assets/home.jpg'
import bar from '../../assets/bar.jpg'
// import drink from '../../assets/drink.jpg'


export default function Pub() {
    return (
        <> 
        
            <div className="primeiraImg"> 
                <img src={bar} alt="Bar" className="pub_imagem"></img>
                <h1 className="pub_titulo">Stack Pub <br/> slogan </h1>       
            </div>

            <div className="quemSomos"> 
                <h1 className="texto_qs">O Pub feito para aqueles que querem <br/> viver uma experiência totalmente nova</h1> 
                <p className='texto_qs2'>O Stack Pub surgiu quando o grupo resolveu oferecer algo diferenciado <br/> no mercado brasileiro ao misturar o Brasil com o Reino Unido.</p> 
                <p className='texto_qs2'>Oferecemos aos nossos clientes uma seleção incrível de cervejas, destilados, <br/> drinks e petiscos.</p>     
                <p className='texto_qs2'>Inaugurado no dia 13 de janeiro de 2022.</p>
            </div>

            <div className="segundaImg"> 
                <img src={home} alt="Bar" className="pub_imagem"></img>    
            </div>            
        </>
    );
}