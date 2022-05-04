import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: white;
    padding: 1.25rem 1.75rem;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem; 

    h1 {
        color: ${({theme}) => theme.colors.cyan};
    }

    span {
        color: ${({theme}) => theme.colors.yellow};
        font-weight: 700;
    }

    .description {
        color: ${({theme}) => theme.colors.grayishBlue};
        line-height: 1.55rem;
        font-size: .93rem;
    }


    @media (min-width: 1440px) {
        grid-column: span 2;
        grid-row: 1;

        padding: 1.5rem 2.25rem 0rem 2.25rem;

        h2 {
            font-size: 1.75rem;
            margin-bottom: 1.75rem;
        }

        span {
            font-size: 1.25rem;
            font-weight: 700;
        }

        .description {
            line-height: 1.75rem;
            font-size: 1.1rem;
        }
    }
`