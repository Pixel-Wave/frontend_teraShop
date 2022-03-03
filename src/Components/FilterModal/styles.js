import styled from "styled-components";

export const Container = styled.section`
    max-width: 40rem;
    border-radius: 1rem;
    padding-bottom: 2rem;

    h2 {
        font-size: 1rem;
        font-weight: 400;
        margin: 0 0 0.75rem 1.25rem
    }


    background-color: aliceblue;
`;

export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 0.5rem;
    padding: 1.5rem 1.5rem 2rem;
    h2 {
        font-size: 1.25rem;
        font-weight: 700;
    }

    ion-icon {
        font-size: 1.5rem;
    }
`

export const Categories = styled.div`
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding-bottom: 1rem;
    margin: 0 1.5rem 2rem;
    align-items: center;
    

    h3 {
        font-size: 1rem;
        color: var(--dark-grey);
        font-weight: 500;
    }
    
    .active {
        padding: 4px 1rem;
        background-color: var(--primary);
        color: var(--white);
        border-radius: 1rem;
    }
`

export const SortBy = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 1.5rem 2rem;
    gap: 0.75rem;
    

    h3 {
        font-size: 1rem;
        font-weight: 500;
        color: var(--dark-grey);
        padding: 0.5rem 1rem;
        border: 1px solid var(--dark-grey);
        border-radius: 0.5rem;
    }

    .active {
        background-color: var(--primary);
        color: var(--white);
        border: none;
    }
`

export const Range = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 0 1.5rem 2rem;

    input {
        flex: 1;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: solid 1px var(--grey);
        font-size: 1rem;
        ::-webkit-input-placeholder {
            color: var(--grey);
        }

        :focus {
            outline: 2px solid var(--primary);
        }
    }
`

export const ButtonFilter = styled.div`
    flex: 1;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    background-color: var(--primary);
    color: var(--white);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 1.5rem;
    text-align: center;
`
