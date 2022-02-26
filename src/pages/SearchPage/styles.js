import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 40rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    align-items: center;
    margin-bottom: 1rem;

    ion-icon {
        font-size: 1.5rem;
    }

    h2 {
        font-size: 1rem;
        font-weight: 600;
    }
`;

export const Search = styled.div`
    display: flex;
    max-width: 40rem;
    align-items: center;
    border: 2px solid var(--grey);
    padding: 0.75rem;
    border-radius: 0.5rem;
    margin: 0 1.5rem 2rem;

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

export const ContainerLastest = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 1.5rem;
    gap: 1.25rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 500;
    }
`;

export const LastestSearch = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
        font-size: 1.5rem;
    }

    span {
        display: flex;
        gap: 4px;
    }

    span ion-icon {
        color: var(--dark-grey);
    }
`;

export const PopularCourses = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1.5rem 2rem 1.5rem;
    gap: 1.5rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 500;
    }
`;

export const Course = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 0.5rem;
    background-color: #FDFDFD;
    box-shadow: 2px 2px 6px  var(--grey);

    .image{
        width: 5rem;
        height: 5rem;
        background-image: url(${(props)=> props.logoCourse});
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: 1rem;
        border-radius: 0.5rem;
    }

`;

export const CourseInfos = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h2 {
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 4px;
    }

    h3 {
        font-size: 1rem;
        font-weight: bold;
    }

    div {
        flex: 1;
        display: flex;
        align-items: center;
        margin-top: 0.75rem;

        div {
            display: flex;
            gap: 8px;
            
            ion-icon{
                color: var(--primary);
                font-size: 1.5rem;
            }

            p {
                padding-left: 8px;
                font-weight: 400;
            }
        }
    }
`;