import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../image/Logo.png";
import cart from "../image/myCart.png";
import './header.css'
// this is header to full screen
const Header = () => {
  return (
    // this is navbar
    <Navbar expand="lg" style={{ margin: "15px 50px" }}>
      <Container fluid>
        {/* this is logo tp web site */}
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo"
            style={{
              maxWidth: "120px",
            }}
          />
        </Navbar.Brand>
        {/* this is button show in mobil  */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className="">
          {/* this link to page  */}
          <Nav
            style={{
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Nav.Link className="hover-btn" style={{ color: "#000000", fontSize:"25px" }}>Home</Nav.Link>
            <Nav.Link  className="hover-btn" style={{ color: "#000000" ,fontSize:"25px" }}>catalogue</Nav.Link>
            <Nav.Link  className="hover-btn" style={{ color: "#000000" , fontSize:"25px" }}>contactus</Nav.Link>
            <Nav.Link   className="hover-btn" style={{ color: "#000000" , fontSize:"25px" }}>help</Nav.Link>
          </Nav>
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0 15px",
            }}
          >
            {/* this is cart to add product */}
            <Nav.Link>
              <img
                src={cart}
                alt="card"
                style={{ maxWidth: "50px" }}
              />
            </Nav.Link>
            {/* to rigistar and sigin  */}
            <Nav.Link
             className="btn-styles"
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
