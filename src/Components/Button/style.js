import styled from "styled-components";

export const Wrapper = styled.button`
    width: 100%;
    border-radius: 10px;
    padding: 15px 15px;
    background: #0ACF83;
    color: #fff;
    margin-bottom: 24px;
    transition: 100ms;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    
    :hover {
        background: #147a53;
    }


    div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        ion-icon {
            display: none;
            visibility: hidden;
        }
    }

    .iconActive {
        justify-content: space-between;
        ion-icon {
            display: inherit;
            visibility: visible;
            font-size: 1.5rem;
        }
    }
	

`;