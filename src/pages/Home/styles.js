import styled from "styled-components";

export const Container = styled.main`
    max-width: 40rem;
    height: 40px;
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    max-width: 40rem;
    margin: 0.5rem 1.5rem;
    font-size: 1.25rem;
    margin-bottom: 1.5rem;

    ion-icon {
        font-size: 1.5rem;
        margin-right: 4px;
    }

    nav {
        display: flex;
        align-items: center;
    }

    nav ion-icon {
    color: var(--primary);
    margin-right: 4px;
    }

    .user-avatar {
        min-width: 3rem;
        min-height: 3rem;
        border-radius: 50%;
        background-image: url(${(props) => props.userAvatar});
        background-size: cover;
        background-repeat: no-repeat;
        border: 2px solid var(--primary);
    }
`;

export const Greetings = styled.div`
    margin: 0 1.5rem 1.5rem;

    p {
        font-size: 1rem;
        font-weight: 400;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

export const Search = styled.div`
    display: flex;
    max-width: 40rem;
    align-items: center;
    border: 2px solid var(--grey);
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin: 0 1.5rem 1.5rem;

    ion-icon {
        margin-right: 12px;
        color: var(--grey);
        font-size: 1.5rem;
    }

    input {
        flex: 1;
        outline: none;
        border: none;
        color: var(--dark);
        font-size: 1rem;
        font-weight: 400;
    }

    input::placeholder {
        color: var(--grey);
    }

`

export const ProductsDestack = styled.section`
    max-width: 40rem;
    background-color: var(--grey-light-2);
    border-radius: 1rem;
    padding: 2rem 0 2rem 1.5rem;
`;

export const ListCategories = styled.ul`
    list-style: none;
    overflow-x: scroll;
    overflow-y: none;
    display: flex;
    padding: 1rem 1.5rem 1rem 0;
    margin: none;

    li.active {
        float: left;
        background-color: var(--primary);
        padding: 3px 8px;
        color: var(--white);
        border-radius: 1rem;
    }

    li {
        color: var(--dark-grey);
    }

    li + li {
        margin-left: 12px;
    }

    li a {
        flex: 1;
        white-space: nowrap;
        text-align: center;
        padding: 16px;
        text-decoration: none;
    }
`;

export const ContainerCourse = styled.section`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    margin: 1.25rem 0;
    padding-bottom: 1rem;
`

export const CourseOfCategorySelected = styled.div`
    display: grid;
    width: 320px;
    grid-template-columns: 3fr 2fr;
    gap: 1rem;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 1.25rem 1.5rem;
    margin-right: 1rem;

    .title {
        font-size: 1.5rem;
        font-weight: 700;
    }

    span {
        display: flex;
        align-items: center;
        color: var(--primary);
        font-size: 1rem;
        margin-top: 2rem;
    }

    .image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image img {
    width: 7rem;
}

`
export const HeaderFeatured = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 1.5rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 400;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: var(--dark-grey);
    }
`;

export const FeaturedCourses = styled.div`
    flex: 1;
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    margin: 1.25rem 1.5rem 1.5rem 0;
    padding: 0.5rem;
`;

export const ContentFeaturedCourses = styled.div`
    display: flex;
    row-gap: 1rem;
    align-items: center;
    min-width: 12rem;
    height: 15rem;
    flex-direction: column;
    background-color: var(--white);
    border-radius: 0.5rem;
    text-align: left;

    + * .content-course{
        margin-left: 30px;
    }
    

    .course-image{
        width: 7.5rem;
        height: 7rem;
        border-radius: 8px;
        background-image: url(${(props) => props.CourseImage});
        background-repeat: no-repeat;
        background-size: cover;
    }

    .price {
        text-align: left; 
        padding: 0.5rem;
    }

    h1 {
        font-size: 1rem;
        font-weight: 300;
        padding: 1rem 0 4px;
    }

    h2 {
        font-size: 0.75rem;
        font-weight: bold;
        text-align: left;
        margin: 0.5rem 0 0.3rem;
    } 

    .rating {
        color: var(--primary);
    }
`;



