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

	a {
		color: white;
	}
`;

export const Logo = styled.div`
	text-align: center;
	color: #fff;
	margin-top: 106px;


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
	width: 80%;
	.forgot {
		color: #fff;
		display: block;
		margin-top: 20px;
		margin-bottom: 32px;
		text-align: center;
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