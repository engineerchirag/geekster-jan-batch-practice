import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,  Card, Button, CardTitle, CardText, Row, Col, Jumbotron, Container
  } from 'reactstrap';

const Charts = ()=> {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);

return (
    <div>
    <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">reactstrap</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>Simple Text</NavbarText>
      </Collapse>
    </Navbar>
  </div>
  <div>
  <Jumbotron fluid>
    <Container fluid>
      <h1 className="display-3">Fluid jumbotron</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
    </Container>
  </Jumbotron>
</div>
  <Row>
      <Col >
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col >
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="danger">Go somewhere</Button>
        </Card>
      </Col>
      <Col >
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="warning">Go somewhere</Button>
        </Card>
      </Col><Col >
      <Card body>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="info">Go somewhere</Button>
      </Card>
    </Col>
    </Row>
    </div>
  
);
}


export default Charts;