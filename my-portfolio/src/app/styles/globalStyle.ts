import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Play:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    main {
        background: ${(props) => props.theme.color.backgroundColor};
        color: ${(props) => props.theme.color.fontColor};
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h1 {
        font-family: "Play", sans-serif;
        font-weight: 700;
        font-size: 64px;
        color: ${(props) => props.theme.color.primary};
    }
`;
