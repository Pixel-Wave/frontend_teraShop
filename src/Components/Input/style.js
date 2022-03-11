import styled from "styled-components";

export const Label = styled.label`
    display: inline-block;
    color: white;
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 0.75rem;
`;

export const Wrapper = styled.div`
    display: flex;
    background-color: var(--white);
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;

    :focus{
        background-color: red;
    }
    
    :hover{
        border: solid 1px var(--primary);
        box-shadow: 0 0 1px 2px var(--primary);
    }
    input {
		border: none;
		outline: none;
		display: flex;
		align-items: center;
		border: none;
		padding: 12px 0;
		width: 90%;
	} 	

    ion-icon {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
`;

export const Error = styled.p`
    color: var(--error);
`;