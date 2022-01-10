import React from 'react';
import './contato.css'

export default function Contato() {
    return (
        <>
             <div className="contato"> 
                <h1 className='titulo'>Localização</h1>
                <p className='texto-contato'>R. Hans Staden, 20 - Botafogo, Rio de Janeiro - RJ, 22281-060</p>
                <h1 className='titulo'>Horário de funcionamento</h1>
                <p className='texto-contato'>Quarta e Quinta: 16h - 0h <br/> Sexta: 16h - 1h <br/> Sábado: 14h - 1h <br/> Domingo: 14h - 20h</p>
                <h1 className='titulo'>Contato</h1>
                <p className='texto-contato'>Telefone: (11)98563-2200 <br/> E-mail: stackpub@stackpub.com</p>
                <br/>
                <p className='texto-contato'>Se beber, não dirija!</p>
            </div>
        </>
    )
}