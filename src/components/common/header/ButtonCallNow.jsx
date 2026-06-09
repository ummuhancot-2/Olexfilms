import { config } from "@/helpers/config";

export const ButtonCallNow = ({ className = "" }) => {
  return (
    <a
      href={config.contact.info.phone1.link}
      className={`btn btn-outline-primary mt-4 mt-lg-0 ${className}`}
    >
      CALL NOW
    </a>
  );
};
