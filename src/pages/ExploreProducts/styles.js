import styled from "styled-components"

export const Container = styled.section`
    max-width: 40rem;
`
export const Header = styled.header`
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;

    ion-icon {
        font-size: 1.5rem;
    }
`;

export const ResultSearch = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0 1.5rem 1rem;

    p {
        font-size: 1rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
    }
`;

export const ShortBy = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 1.5rem 2rem;
    gap: 2rem;
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    border: solid 2px var(--grey);

    ion-icon {
        font-size: 1.25rem;
    }

    h3 {
        font-size: 1rem;
        font-weight: 300;
    }
`;

export const ShortByContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    align-items: center;
    overflow-x: scroll;
    white-space: nowrap;
    padding: 0.5rem 0;
    h3 {
        font-size: 1rem;
        font-weight: 300;
    }

    h3.active {
        padding: 0.25rem 1rem;
        background-color: var(--primary);
        color: var(--white);
        font-weight: 500;
        border-radius: 0.5rem;
    } 
`;

export const CoursesContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: var(--grey-light-1);
    border-radius: 1rem;
    padding: 1.5rem 0.75rem;
`;

export const Course = styled.div`
    width: 10rem;
    background-color: var(--white);
    border-radius: 0.5rem;
    padding: 0.75rem 0.75rem;
    align-items: center;
    justify-content: center;
`;

export const CourseImage = styled.div`
    background-image: url(${(props)=>props.Image});
    background-repeat: no-repeat;
    background-size: contain;
    height: 8rem;
    margin-Bottom: 1rem ;
    
`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 4px;
    }

    h3 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.75rem;
    }
`;

export const Reviews = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        display: flex;
        align-items: center;
        font-size: 14px;
        ion-icon {
            color: var(--primary);
        }
    }

    p {
        font-size: 14px;
        white-space: nowrap;
    }


`;
