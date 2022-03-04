import styled from "styled-components";

export const HeaderCart = styled.header`
    max-width: 40rem;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    font-size: 1.5rem;

    p {
        font-size: 1rem;
        font-weight: 700;
    }
`;

export const Container = styled.section`
    max-width: 40rem;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1.5rem;
`;

export const Options = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y: scroll;
    margin-top: 2rem;
`;

export const CartOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const ImageOption = styled.div`
    min-width: 5.5rem;
    height: 5.5rem;
    background-image: url(${(props)=> props.Image});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const DataOption = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    h1 {
        font-size: 1.25rem;
        font-weight: 500;
    }
    h2 {
        font-size: 1rem;
        font-weight: 700;
    }
`;

export const ListOrDelete = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;

    ion-icon {
        padding: 0.3rem;
        border-radius: 4px;
        font-size: 1.5rem;
        font-weight: 700;
        
        :first-child {
            color: var(--red);
            border: solid 2px var(--red);
        }

        :last-child {
            color: var(--primary);
            border: solid 2px var(--primary);
        }
    }
`;

export const Checkout = styled.div`
    display: flex;
    flex-direction: column;

    span {
        display: flex;
        justify-content: space-between;
        p {
            font-size: 1rem;
            font-weight: 500;
        }
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    background-color: var(--primary);
    align-items: center;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: var(--white);
    font-size: 1.25rem;
    margin: 1.5rem 0 0;
    border: none;
    ion-icon {
        font-size: 1.5rem;
    }
`;
