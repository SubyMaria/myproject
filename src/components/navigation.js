import "../App.css";
import { Container, Navbar, Nav, Form, NavDropdown ,Dropdown} from "react-bootstrap";
import React, { Component } from "react";
import { VscAccount } from "react-icons/vsc";
export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Nav className="auto">
            <img
              className="logo"
              src="https://i.pinimg.com/474x/1a/3f/05/1a3f057af6164747593083efb2793540.jpg" alt=""
            ></img>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">TV Shows</Nav.Link>
            <Nav.Link href="#action3">Movies</Nav.Link>
            <Nav.Link href="#action4">Channels</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action5">
                Top Categories
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">Language</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">
                Audio Language
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form>
            <label for className="searchbox">
              Search Prime Video
            </label>
            <input
              className="searchbox"
              type="search"
              required
              placeholder="Search"
            ></input>
          </Form>
          <h1 className="profileIcon">
            {" "}
            <VscAccount />{" "}
          </h1>
          <Dropdown className="profileName">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              THOBIO 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1"> Manage Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Your Watchlist</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    );
  }
}
