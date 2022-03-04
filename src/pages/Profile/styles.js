import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    max-width: 40rem;
    padding: 1rem 1.5rem;
    ion-icon {
        font-size: 1.25rem;
    }
    h2 {
        font-size: 1rem;
    }
    div {
        color: white;
    }
`;

export const Container = styled.div`
    display: flex;
    max-width: 40rem;
    flex-direction: column;
    margin-bottom: 2rem;


    h2 {
        font-size: 14px;
        font-weight: 500;
        color: var(--dark-grey);
        margin: 1.25rem 1.5rem;
    }
`;

export const UserContainer = styled.div`
    display: flex;
    padding: 2rem 1.5rem;
    gap: 1rem;
    align-items: center;
    border-bottom: 1px solid var(--grey-border);

    span {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        h3 {
            font-size: 1rem;
            font-weight: 500;
        }
        p{
            font-size: 14px;
            font-weight: 300;
            color: var(--dark-grey);
        }
    }
`;

export const UserAvatar = styled.div`
    min-width: 4rem;
    height: 4rem;
    background-image: url(${(props)=>props.Avatar});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    border: 3px solid var(--primary);
`;

export const ConfigCard = styled.div`
    display: flex;
    font-size: 1rem;
    font-weight: 500;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-border);
`;
