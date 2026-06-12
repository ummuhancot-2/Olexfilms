"use client";

import Nav from "react-bootstrap/Nav";
import menuItems from "@/helpers/data/main-menu.json";
import Link from "next/link";
import "./MainMenu.scss";

export const MainMenu = ({ items = menuItems, ...props }) => {
  return (
    <div className="main-menu">
    <Nav {...props} className="main-menu__nav">
      {items.map((item) => (
        <Nav.Link key={item.link} href={item?.link} as={Link} >
          <i className={item?.icon}></i>
          &nbsp;
          {item?.title}
        </Nav.Link>
      ))}
    </Nav>
    </div>
  );
};
