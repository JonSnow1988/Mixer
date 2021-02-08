import React, { useState, useEffect } from "react";

import CartIcon from "../CartIcon";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";

import { getFirestore } from "../../Firebase/firebase";

const detectCurrentCategory = (pathname) => {
  return pathname.split("/").slice(-1).pop();
};

const NavBar = () => {
  const { push } = useHistory();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("categories");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("no results");
        }
        setCategories(
          querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      })
      .catch((error) => {
        console.log("Error searching categories", error);
      });
  }, []);

  console.log(categories);
  const { pathname } = useLocation();

  const [currentCategory, setCurrentCategory] = React.useState(
    pathname === "/" || pathname === "/cart"
      ? "none"
      : detectCurrentCategory(pathname)
  );

  useEffect(() => {
    if (pathname === "/") {
      setCurrentCategory("none");
    }
  }, [pathname]);

  const handleChange = ({ target: { value } }) => {
    setCurrentCategory(value);
    push(value === "none" ? "/" : `/categories/${value}`);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Toto's House</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/" />
            <Nav.Link to="/Cart">
              <CartIcon />
            </Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item value={currentCategory} onChange={handleChange}>
                Mecanico
              </NavDropdown.Item>
              <NavDropdown.Item value={currentCategory} onChange={handleChange}>
                Membrana
              </NavDropdown.Item>
              <NavDropdown.Item value={currentCategory} onChange={handleChange}>
                Mouse
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item value={currentCategory} onChange={handleChange}>
                Headset
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            {categories.map((category) => (
              <Form inline key={category.id} calue={category.key}>
                {category.name}
              </Form>
            ))}
            ,<Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
