import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@font-face {
    font-family: Metropolis Medium;
    src: url('./fonts/Metropolis.otf');
}

* {
    
        // box-sizing:border-box;
        font-size: 62.5%;
        font-family: 'Metropolis', sans-serif;
        margin:0;
        padding:0;
    }
    body{
      background:${colors.general_bg};
      height:fit-content ;
     
    
    }
  
    h1, h2, h3, h4, h5, h6 {
        color: ${colors.secondary_text_color};
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
    }

    p {
        color: ${colors.regular_text_color};
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.2rem;
    }

    h5 {
        font-size: 1rem;
    }

    h6 {
        font-size: 0.85rem;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        text-align:center;
        color: ${colors.white};
        font-family:"Metropolis", sans-serif;
    }
    
`;
