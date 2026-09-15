import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins">
      <hr className="border-slate-200" />

      <div className="footer-container">
        <p>
          © 2026 <strong>Chirag Garg</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              target={link.link.startsWith("http") ? "_blank" : undefined}
              rel={
                link.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-lg hover:text-blue-500"
              aria-label={link.name}
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;