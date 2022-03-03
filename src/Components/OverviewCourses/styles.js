import styled from "styled-components";


export const PresentationVideos = styled.section`
    display: flex;
    gap: 1rem;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: scroll;
    background-color: var(--grey-light-1);

`;

export const Video = styled.iframe`
    height:20rem;
    border-radius: 1rem;
`;

export const Reviews = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5rem 1.5rem 0;
    gap: 1.5rem;

    button {
        border: none;
        background-color: var(--white);
        color: var(--dark-grey);
        font-size: 1rem;
    }
`;

export const TitleReview = styled.h3`
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
`;

export const ItemReview = styled.div`
    display: flex;
    gap: 1rem;
`;


export const UserImage = styled.div`
    min-width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-image: url(${(props)=>props.ImageSource});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const Testimonial = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-size: 1rem;
    }
`;

export const NameUser = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        font-size: 1rem;
        font-weight: 400;
    }

    h5 {
        font-size: 0.75rem;
        color: var(--dark-grey);
    }
`;

export const Stars = styled.div`
    font-size: 1rem;
    color: var(--primary);
`;