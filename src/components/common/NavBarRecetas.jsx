
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink,   } from 'react-router-dom';


const NavBarRecetas = () => {
    return (
        <>
           <Navbar expand="lg" className="bg-success">
      <Container>
        <NavLink className='nav-link'to={'/'} end>Blog de Recetas</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link'to={'/'} end>Inicio</NavLink>
            <NavLink className='nav-link'to={'administrador'} >Administracion</NavLink>            
            <NavLink className='nav-link'to={'Login'} >Login</NavLink>
            <NavLink className='nav-link'to={'Nosotros'} >Nosotros</NavLink>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default NavBarRecetas;