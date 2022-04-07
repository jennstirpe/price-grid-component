import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Karla', sans-serif;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({theme}) => theme.colors.lightGray};
    }

    @media (min-width: 1440px) {
        body {
            height: 100vh;
        }
    }
`