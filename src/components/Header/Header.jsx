import React from 'react'
import './styles.css'

const Header = () => {
  return (
    <header>
        <div className='marquee-box'>
            <marquee className='sm-text' direction="left" scrollamount="5" behavior="scroll">¡Conocé nuestras ofertas <span className='marquee-link sm-text'>acá</span>! <span>&#128512;</span></marquee>
            <div className='marquee-right'>
                <p className='sm-text'>Información Importante</p>
                <p className='sm-text'>Preguntas Frecuentes</p>
            </div>
        </div>
        <nav>
            <div className='nav-links-box'>
                <h1 className='subtitle logo'>Viajanding</h1>
                <ul>
                    <li className='text'>Home</li>
                    <li className='text'>About</li>
                    <li className='text'>Flights</li>
                    <li className='text'>Contact</li>
                </ul>
            </div>
            <div className='nav-auth-box'>
                <button className='login-btn text'>Login</button>
                <button className='singIn-btn text'>Sign In</button>
            </div>
        </nav>
    </header>
  )
}

export default Header