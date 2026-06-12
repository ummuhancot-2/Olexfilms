import { Col, Container, Row } from "react-bootstrap";
import { Logo } from "../header/Logo";
import { config } from "@/helpers/config";
import { MainMenu } from "../header/MainMenu";
import { SocialMenu } from "./SocialMenu";
import { ContactMenu } from "./ContactMenu";
import "./footer.scss";
import { Olex } from "./Olex";

export const Footer = () => {
  return (
    <footer className="footer bg-body-secondary ">
      <Container>
        <Row >
          <Col xs={12}>
            <Olex />
            <p className="text">{config.project.description}</p>
          </Col>

          <Col xs={6} xl={4}>
            <h3 style={{margin: '20px 0'}}>Links</h3>
            <MainMenu />
          </Col>

          <Col xs={6} xl={4}>
            <h3 style={{margin: '20px 0'}}>Social</h3>
            <SocialMenu />
          </Col>

          <Col xl={4}>
            <h3 style={{margin: '20px 0'}}>Contact</h3>
            <ContactMenu />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
