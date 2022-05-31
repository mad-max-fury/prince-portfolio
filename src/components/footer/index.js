import React from "react";
import { FaBehance, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { FootWrap, FootIcons, FootText } from "./style";
const Footer = () => {
  const pathname = window?.location?.pathname;
  return (
    <FootWrap
      style={
        pathname === "/"
          ? { width: "fit-content", margin: "0 auto" }
          : { backgroundColor: "none" }
      }
    >
      <FootIcons>
        <a href="http://behance.net/princechijioke">
          <FaBehance size={20} />
        </a>
        <a href="https://twitter.com/princechijioke0?t=XpTgfPH_4_e9SFkOPRhPJA&s=09">
          <FaTwitter size={20} />
        </a>
        <a href="https://www.linkedin.com/in/princeugbuta">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://dribbble.com/princechijioke">
          <FaDribbble size={20} />
        </a>
      </FootIcons>
      {pathname !== "/" ? (
        <FootText>
          Designed by me, Developed by{" "}
          <a href="https://github.com/mad-max-fury" target={"_blank"}>
            Endee__codes
          </a>
        </FootText>
      ) : null}
    </FootWrap>
  );
};

export { Footer };
