import React from 'react'
import { Container,Row,Col,Image,Card } from 'react-bootstrap'
import estambul from "../../assets/estambul.jpg";
import granada from "../../assets/granada.jpg";
import oporto from "../../assets/oporto.jpg";
import ciqueterre from "../../assets/cinqueterre.jpg";
function Destinations() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container fluid className="destinationscontainer w-75">
        <h3 className="mb-4">Looking for inspiration?</h3>
        <h5>We got you covered!</h5>
        <Row fluid>
          <Col md={3}>
            <Card className="bg-dark text-white">
              <Card.Img src={ciqueterre} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Cinque Terre</Card.Title>
              </Card.ImgOverlay>
            </Card>

            {/* <Image src={estambul} className="suggesteddestinations"></Image> */}
          </Col>
          <Col md={3}>
            {/* <Image src={estambul} height={200} className="suggesteddestinations"></Image> */}
            <Card className="bg-dark text-white">
              <Card.Img src={granada} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Granada</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="bg-dark text-white">
              <Card.Img src={estambul} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Estambul</Card.Title>
              </Card.ImgOverlay>
            </Card>
            {/* <Image src={estambul} className="suggesteddestinations"></Image> */}
          </Col>
          <Col md={3}>
            <Card className="bg-dark text-white">
              <Card.Img src={oporto} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Oporto</Card.Title>
              </Card.ImgOverlay>
            </Card>
            {/* <Image src={estambul} className="suggesteddestinations"></Image> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Destinations