import styled from "styled-components";

export const CourseContents  = styled.div`
    padding: 0 1.5rem;
    h3 {
        padding-bottom: 4px;
        font-size: 1.25rem;
        margin-top: 1rem;
    }
    p {
        color: var(--dark-grey);
    }
`;

export const ContainerModules = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Module = styled.div`
    flex:  1;
    display: flex;
    flex-direction: column;

    margin-bottom: 0.25rem;
`;

export const HeaderModule = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--grey-light-1);

    h1 {
        font-size: 1.25rem;
        font-weight: 600;
    }

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        ion-icon{
            color: var(--primary);
            font-size: 1.5rem;
            font-weight: 700;
        }
    }
`;

export const ItemModule = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CardItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0.5rem 1rem;
    gap: 1rem;

    span {
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }


    button {
        border: none;
        background-color: var(--white);
    }

    h2 {
        font-size: 1rem;
        font-weight: 500;
    }

    ion-icon {
        font-size: 24px;
    }
`;

export const SeeMoreModules = styled.button`
    display: flex;
    justify-content: center;
    border: 1px solid var(--overlay);
    background-color: var(--grey-light-2);
    padding: 0.5rem;
`;