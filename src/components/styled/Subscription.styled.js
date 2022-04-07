import styled from "styled-components";

export const StyledSubscription = styled.section`
    background-color: ${({theme}) => theme.colors.cyan};
    padding: 1rem 1.75rem;
    color: #fff;

    .subscription-type {
        font-weight: 400;
    }

    .pricing {
        font-size: .93rem;
        color: rgb(102, 216, 219);
        display: flex;
        align-items: center;
        margin: 0;
    }

    .price {
        font-size: 2rem;
        color: #fff;
        margin-right: 1rem;
    }

    .subscription-desc {
        color: ${({theme}) => theme.colors.lightestCyan};
        letter-spacing: .2px;
        margin: .5rem 0;
    }

    #signup {
        display: block;
        color: #fff;
        text-decoration: none;
        background-color: ${({theme}) => theme.colors.yellow};
        width: 18.5rem;
        height: 3.25rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .4rem;
        font-size: 1.1rem;
        box-shadow: 0rem .25rem 1rem hsl(179, 62%, 35%);
        margin-top: 2rem;
        margin-bottom: .75rem;

        &:hover {
            background-color: hsl(71, 73%, 60%)
        }
    }


    @media (min-width: 1440px) {
        grid-column: 1;
        grid-row: 2;

        border-bottom-left-radius: .5rem;
        padding: 1.5rem 2.25rem;


        #signup {
            width: 16rem;
        }
    }
`