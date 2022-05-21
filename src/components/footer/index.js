import React from "react";
import { FaBehance, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { FootWrap, FootIcons, FootText } from "./style";
const Footer = () => {
  return (
    <FootWrap>
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
      <FootText>
        Designed by me, Developed by <span>Devcruz</span>
      </FootText>
    </FootWrap>
  );
};

export { Footer };
