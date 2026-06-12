"use client";

import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { config } from "@/helpers/config";
import "./SocialMenu.scss";

const menuItems = Object.entries(config.contact.socialMedia);

export const SocialMenu = (props) => {
  return (
    <div className="social-menu">
    <Nav {...props} className="social-menu__nav">
      {menuItems.map((item) => (
        <Nav.Link 
        key={item[0]} 
        href={item[1].url} 
        as={Link}   
        target="_blank"   
        rel="noopener noreferrer">
          <i className={item[1].icon}></i>
          &nbsp;
          {item[0]}
        </Nav.Link>
      ))}
    </Nav>
    </div>
  );
};
