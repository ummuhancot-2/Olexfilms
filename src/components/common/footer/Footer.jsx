import { Col, Container, Row } from "react-bootstrap";
import { Logo } from "../header/Logo";
import { config } from "@/helpers/config";
import { MainMenu } from "../header/MainMenu";
import { SocialMenu } from "./SocialMenu";
import { ContactMenu } from "./ContactMenu";
import { ButtonCallNow } from "./ButtonCallNow";
import "./footer.scss";
import { Olex } from "./Olex";

export const Footer = () => {
  return (
    <footer className="footer bg-body-secondary">
      <Container>
        <Row >
          <Col xs={12}>
            <Olex />
            <p className="mt-3">{config.project.description}</p>
          </Col>

          <Col xs={6} xl={4}>
            <h3>Links</h3>
            <MainMenu />
          </Col>

          <Col xs={6} xl={4}>
            <h3>Social</h3>
            <SocialMenu />
          </Col>

          <Col xl={4}>
            <h3>Contact</h3>
            <ContactMenu />
            <ButtonCallNow className="mt-3" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
