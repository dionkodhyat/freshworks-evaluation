import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../img/logo.png'

const NavigationBar = () => {
    return (
    <>
    <Navbar bg="dark">
        <img src={logo} alt="Logo"/>;
    </Navbar>
    </>
    )
}

export default NavigationBar
