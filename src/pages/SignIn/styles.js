import styled from "styled-components";

export const Container = styled.main`
	background: 
		url("https://images.unsplash.com/photo-1558021211-6d1403321394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80"), 
		linear-gradient(#00000090,#000)
	;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow-y: hidden;
	max-width: 640px;
	height: 100vh;
	background-blend-mode: color-burn;
`;

export const Audio = styled.div`
	text-align: center;
	color: #fff;
	margin-top: 106px;
	margin-bottom: 247px;


	.audio .header-start {
		font-weight: bold;
		font-size: 51.05px;
		letter-spacing: 0.638095px;
	}

	.audio .p-start {
		font-weight: bold;
		font-size: 14px;
		letter-spacing: 0.2px;
	}
`;

export const Login = styled.div`
	input {
		border: none;
		outline: none;
		display: flex;
		align-items: center;
		border: none;
		padding: 12px 0;
		width: 80%;
	}

	.input ion-icon {
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}

	.input {
		display: flex;
		background-color: var(--white);
		align-items: center;
		margin-bottom: 12px;
		border-radius: 4px;
	} 	

	.forgot {
		color: #fff;
		display: block;
		margin-top: 20px;
		margin-bottom: 32px;
		text-align: center;
	}

	.btn {
		min-width: 326px;
		border: none;
		border-radius: 10px;
		padding: 15px 15px;
		background: #0ACF83;
		color: #fff;
		margin-bottom: 24px;
		transition: ease-in-out .1s;
	}

	.btn:hover {
		background: #147a53;
	}

	.account {
		font-weight: 400;
		font-size: 14px;
		color: #fff; 
		text-align: center;  
	}

	.signup {
		font-weight: 400;
		font-size: 14px;
		color: #0ACF83;
	}

`;


/* .login {
	text-align: center;
}
.login form {
	display: grid;
	margin-left: 20px;
	margin-right: 20px;
    
}
.login input {
	margin-top: 20px;
	padding: 15px 15px;
    min-width: 326px;
	border-radius: 10px;
	border: none;
    outline: none;
} */