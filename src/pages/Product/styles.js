import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    padding-bottom: 2rem;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 1rem 1.5rem;
    font-size: 1.5rem;
`;

export const TitleCourse = styled.div`
    margin: 1rem 1.5rem 2rem;
    font-weight: 700;

    h2 {
        color: var(--primary);
        font-size: 1.25rem;
        margin-bottom: 4px;
    }

    h3 {
        font-size: 1.75rem;
    }
`;

export const CourseContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
`;

export const CourseHeader = styled.div`
    display: flex;
    gap: 2rem;
    overflow-x: scroll;
    padding-bottom: 1.25rem;
    margin: 0 1.5rem;

    h3 {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        font-weight: 500;
        align-items: center;
    }

    .active::after {
        content: "";
        width: 2rem;
        height: 4px;
        background-color: var(--primary);
        border-radius: 1rem;
        margin-top: 0.75rem;
    }
`;

export const AddCartButton = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--primary);
    margin: 2rem 1.5rem 0;
    padding: 1rem 0;
    border-radius: 0.5rem;
    color: var(--white);
    font-weight: 600;
    font-size: 1.25rem;
`;