import { config } from "@/helpers/config";
import "./ButtonCallNow.scss";

export const ButtonCallNow = ({ className = "" }) => {
  const instagram = config.contact.socialMedia.instagram;
  const whatsapp = config.contact.socialMedia.whatsapp;
  const callNow = config.contact.info.phone1;

  return (
    <div className={`button-actions mt-4 mt-lg-0 ${className}`}>
      <a
        href={instagram.url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-call-now btn-instagram"
        aria-label="Instagram"
        title="Instagram"
      >
        <i className={instagram.icon}></i>
      </a>
      <a
        href={whatsapp.url}
        target="_blank"
        rel="noreferrer"
        className="btn btn-call-now btn-whatsapp"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <i className={whatsapp.icon}></i>
      </a>
      <a
        href={callNow.link}
        className="btn btn-call-now btn-phone"
        aria-label="Call Now"
        title="Call Now"
      >
        <i className={callNow.icon}></i>
      </a>
    </div>
  );
};
