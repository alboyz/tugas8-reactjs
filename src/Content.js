import React, { Component } from "react";
import Image from "./Image";
import swal from "sweetalert";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Carousel,
  ListGroup,
  Jumbotron,
  Button,
  Form
} from "react-bootstrap";

class Content extends Component {
  constructor(props) {
    super(props);
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }

  sweetAlertFunction() {
    swal("Good job!", "Anda Berhasil Login", "success");
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 7 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
                  alt="Neymar"
                />
                <Carousel.Caption>
                  <h3 className="text-primary">
                    <strong>Neymar PSG</strong>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
                  alt="England"
                />
                <Carousel.Caption>
                  <h3 className="text-primary">
                    <strong>England Celebrate</strong>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                  alt="Sani Rizki"
                />
                <Carousel.Caption>
                  <h3 className="text-primary">
                    <strong>sani-rizki-fauzi-indonesia-u-22</strong>
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <br />
        <Row>
          <Col md={3}>
            <ListGroup>
              <ListGroup.Item active>Liga1 Indonesia </ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={5}>
            <Jumbotron>
              <h1>Divisi Primera</h1>
              <p>Main Untuk Catulunya Gerrard Minta Dihormati</p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
            </Jumbotron>
          </Col>

          <Col className="justify-content-md-center">
            <Image />

            <center>
              <h3> Halaman Login</h3>
            </center>

            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" onClick={this.sweetAlertFunction}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Content;
