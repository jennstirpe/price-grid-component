import styled from 'styled-components';

export const StyledMain = styled.main`
    width: 22rem;
    box-shadow: 0px 5px 10px hsl(204, 43%, 85%);

    @media (min-width: 1440px) {
        width: 44rem;
        height: 34rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
`