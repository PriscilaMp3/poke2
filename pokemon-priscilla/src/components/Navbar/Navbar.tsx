import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar className="justify-content-between d-flex Navi">
      <img
        className="imagenPokemon"
        src="https://archives.bulbagarden.net/media/upload/a/a7/Sun_Version_logo_Jp.png"
        alt=""
      />
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col className="boton" xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <div></div>
    </Navbar>
  );
}
export default NavBar;
