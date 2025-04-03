import React from 'react';
// import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import {
  Button,
  Nav,
  Navbar,
  // NavDropdown,
  // OverlayTrigger,
  // Overlay,
  // Tooltip,
  // Form,
  // FormControl,
  // Button,
} from 'react-bootstrap';
import styled from 'styled-components';
import { ReactComponent as Logo } from './tepedu300.svg';
const Styles = styled.div`
  .navbar {
    background-color: lightgrey;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;

    &:hover {
      color: grey;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="sm" bg="light" variant="light">
      <Navbar.Brand href="https://www.tepedu.dk/">
        <Logo alt="" width="130" height="35" className="d-inline-block align-top" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Dropdown size="sm">
              <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
                Basis
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item size="sm" href="/" target="_blank">
                  Lineær funktion
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/linje2" target="_blank">
                  Linje bestemt ved 2 punkter
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/ligninger" target="_blank">
                  Skæring mellem 2 linjer
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item size="sm" href="/linjer" target="_blank">
                  Addition af 2 linjer
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
          <Nav.Item>
            <Dropdown size="sm">
              <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
                Optimering
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item size="sm" href="/pris" target="_blank">
                  P og punkt-priselasticitet
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/elasticitet" target="_blank">
                  Priselasticitet ARC
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/elasticitet2" target="_blank">
                  Krydspriselasticitet
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/optimering" target="_blank">
                  Optimering basis
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/optimering2" target="_blank">
                  Optimering
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item size="sm" href="/kalkulation" target="_blank">
                  Fordelingskalkulation
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/kalkulation2" target="_blank">
                  Bidragskalkulation
                </Dropdown.Item>
                <Dropdown.Item size="sm" href="/kalkulation3" target="_blank">
                  Retrograde kalkulation
                </Dropdown.Item>

                <Dropdown.Divider />
                <Dropdown.Item size="sm" href="/lp" target="_blank">
                  Lineær programmering
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item size="sm" href="/CD" target="_blank">
                  Produktionsfunktion langt sigt
                </Dropdown.Item>
              </Dropdown.Menu>
              <Button size="sm" href="/video" target="_blank" variant="warning">
                Video
              </Button>
            </Dropdown>
          </Nav.Item>
          {/* <Nav.Item>
              <Dropdown size="sm">
                  <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
                    Opgaver
                  </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item size="sm" href="/opg" target="_blank">Opgave optimering basis</Dropdown.Item>
                      
                  </Dropdown.Menu>
            </Dropdown>
          </Nav.Item> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="https://www.tepedu.dk/">Link 1 højre</Nav.Link>
          <Nav.Link eventKey={2} href="https://www.tepedu.dk/">Link 2 højre</Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

// export const NavigationBar = () => (

//   <Navbar bg="light" expand="lg">
// <Navbar.Brand href="https://www.tepedu.dk/">
//        <Logo
//            alt=""
//            width="120"
//            height="35"
//            className="d-inline-block align-top"
//          />
//        </Navbar.Brand>

//   <Navbar.Toggle sticky="top" aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link size="sm" href="#link">Link</Nav.Link>
//       <NavDropdown size="sm" title="Lineær funktion" id="basic-nav-dropdown">
//         <NavDropdown.Item href="/" target="_blank">Lineær funktion</NavDropdown.Item>
//         <NavDropdown.Item href="/linje2" target="_blank">Linje bestemt ved 2 punkter</NavDropdown.Item>
//         <NavDropdown.Item href="/ligninger" target="_blank">Skæring mellem 2 linjer</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="/linjer" target="_blank">Addition af 2 linjer</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl size="sm" type="text" placeholder="Søg" className="mr-sm-2" />
//       <Button size="sm" >Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>

// );
