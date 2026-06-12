import { config } from "@/helpers/config";
import Link from "next/link";
import { Container } from "react-bootstrap";
import "./topbar.scss";

export const Topbar = () => {
  const location = config.contact.info.address;
  const phone = config.contact.info.phone1.value;

  return (
    <div className="topbar" itemScope itemType="https://schema.org/LocalBusiness">
      <Container>
        <div className="slogan">
          <span className="sloganText" itemProp="description">
            {config.project.slogan}
          </span>
          <address
            className="sloganAddress"
            itemScope
            itemType="https://schema.org/PostalAddress"
            itemProp="address"
          >
            <span itemProp="streetAddress">{location.value}</span>
          </address>
          <meta itemProp="name" content={config.project.name} />
          <meta itemProp="telephone" content={phone} />
          <meta itemProp="url" content={config.contact.website} />
        </div>
      </Container>
    </div>
  );
};
