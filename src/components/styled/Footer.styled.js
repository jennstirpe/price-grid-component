import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.lightCyan};
    padding: 1rem 1.75rem;
    color: ${({theme}) => theme.colors.lightestCyan};
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;

    h3 {
        color: #fff;
    }

    ul {
        padding: 0;

        li {
            list-style: none;
            margin: .25rem 0;
        }
    }

    @media (min-width: 1440px) {
        grid-column: 2;
        grid-row: 2;

        border-bottom-left-radius: 0rem;
        padding: 1.5rem 2.25rem;
    }
`