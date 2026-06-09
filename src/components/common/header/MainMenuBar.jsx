"use client";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Logo } from "./Logo";
import Image from "next/image";
import { config } from "@/helpers/config";
import { MainMenu } from "./MainMenu";
import { ButtonCallNow } from "./ButtonCallNow";
import "./MainMenuBar.scss";

export const MainMenuBar = () => {
  return (
    <div className="main-menu-video-header">
      {/* <div className="video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video/video.mp4" type="video/mp4" />
          <source src="/video/video.MOV" type="video/quicktime" />
          <p>Video oynatılmıyor. Lütfen tarayıcı destekli bir .mp4 dosyası kullanın.</p>
        </video>
      </div> */}

      <Navbar
        expand="lg"
        sticky="top"
        className="bg-body-tertiary main-menu-bar"
        collapseOnSelect
      >
        <Container>
          <Logo />
          <Navbar.Toggle />
          <Navbar.Offcanvas
            id="main-menu"
            aria-labelledby="main-menu"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="main-menu-title">
                <Image
                  src="/img/logos/logo-one-line.png"
                  width={253}
                  height={29}
                  alt={config.project.name}
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <MainMenu className="justify-content-center flex-grow-1" />
              <ButtonCallNow />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
