import "./NavbarComponents.css";
import { Link } from "react-router-dom";
import {FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
export const socialIcons = [
  <FaLinkedin />,
  <FaGithub />,
  <FaFacebook />,
];
export const Logo = (
  <Link to="/" className="logo">
    Shehan Dilusanka
  </Link>
);

export const navItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "about" },
  { name: "Projects", id: "portfolio" },
  { name: "FAQ's", id: "faq" },
  { name: "Appointment", id: "appointment" },
];
