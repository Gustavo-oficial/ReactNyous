import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import logo from '../../assets/Logo_teste.svg';
import jwt_decode from 'jwt-decode';

const Menu = () => {

    

    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-nyous');

        
    }

    const renderMenu = () => {
        const token = localStorage.getItem('token-nyous');

        if(token === null){
            return (
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            )
        } else if( jwt_decode(token).role === 'Admin' ){
            return (
                <Nav>
                    <Nav.Link href="/administrador/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/administrador/categorias">Categorias</Nav.Link>
                    <Nav.Link href="/administrador/eventos">Eventos</Nav.Link>
                    <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={event => sair(event)} >Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            )
        } else {
            return (
                <Nav>
                    <Nav.Link href="/eventos">Eventos</Nav.Link>
                    <NavDropdown title={jwt_decode(token).family_name} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={event => sair(event)}>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            )
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src={logo} alt='NYOUS' style={{ width : '64px'}} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;