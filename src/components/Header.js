import React from 'react';
import{Nav,Navbar,NavDropdown,Container,Image}from 'react-bootstrap';

const Header = () => {

     
    return(
        <header>
         <Navbar className='navbar-style' expand="lg">
          <Container>
             <Navbar.Brand href="#home" className='navbar-brand'> 
             <Image className='img-style' src='/images/VTU-IMG1.jpg' alt='img'/>
             <h6 className='logo-text'> Vishweshwaraya Training Institute[VTU] </h6>
             </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              

          <NavDropdown title="Academic" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Admissions</NavDropdown.Item>
             <NavDropdown.Item href="#">Circulars & Notification</NavDropdown.Item>
             <NavDropdown.Item href="#">Cirtificate Issue</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Examination" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Examination Quidelines</NavDropdown.Item>
             <NavDropdown.Item href="#">Examination Applications</NavDropdown.Item>
             <NavDropdown.Item href="#">Results</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
             <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
             <NavDropdown.Item href="#">Electronice & communication Engg</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Staff Logins" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>
          </NavDropdown>

          </Nav>

        </Navbar.Collapse>

          </Container>

         </Navbar>
        
        </header>
    )
}

export default Header