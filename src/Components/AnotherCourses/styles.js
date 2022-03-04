import styled from "styled-components";

export const RelatedCourses = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--grey-light-1);
    padding: 1.75rem 1.5rem 1.25rem;
`;

export const HeaderRelated = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    align-items: center;
    h2 {
        font-size: 1rem;
        font-weight: 400;
    }
    button {
        border: none;
        color: var(--dark-grey);
    }
`;

export const BoxCourse = styled.div`
    display: flex;
    overflow-x: scroll;
    padding-bottom: 1rem;
`

export const CourseItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: var(--white);
    min-width: 14rem;
    height: 20rem;
    padding: 10px;
    border-radius: 8px;
    div {
        flex: 1;
        height: 16rem;
        border-radius: 8px;
        background-image: url("https://i0.wp.com/desenhosinfantis.com/Imagens/desenho-do-naruto.png");
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 400;
    }

    h3 {
        font-size: 14px;
        font-weight: 700;
    }
`