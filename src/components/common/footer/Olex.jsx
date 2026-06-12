"use client";

import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";

export const Olex = () => {
  return (
    <Navbar.Brand href="/Anasayfa" as={Link}>
      <Image
        src="/logo/olex.png"
        width={168}
        height={88}
        alt={config.project.name}
      

      />
    </Navbar.Brand>
  );
};
