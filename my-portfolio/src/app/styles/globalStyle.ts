import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Play:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-image: ${props => props.theme.background.backgroundImage};
        background-position: fixed;
        background-size: cover;
    }

    h1 {
        font-family: "Play", sans-serif;
        font-size: 64px;
        color: ${(props) => props.theme.color.primary};
    }
`;