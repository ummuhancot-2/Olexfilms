"use client";

import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import "./Logo.scss";

export const Logo = () => {
  return (
    <Navbar.Brand href="/" as={Link}>
      <Image
        src="/logo/logo.png"
        width={178}
        height={168}
        alt={config.project.name}
        priority
      />
    </Navbar.Brand>
  );
};
