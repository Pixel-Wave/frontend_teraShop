
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--primary: #33cc95;
		--accent: #ffc120;
		--red: #F21F00;

		--white: #ffffff;
		--dark: #191919;
		--dark-grey: #7f7f7f;
		--grey: #bababa;
		--grey-light-1: #f3f3f3;
		--grey-light-2: #f6f6f6;

		--overlay: #33cc9580;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93, 75%;
		}

		@media (max-width: 720px) {
			font-size: 87, 5%;
		}
	}

	body {
		-webkit-font-smooth: antialiased;
	}

	body,
	input,
	textarea,
	button {
		font-family: "DM Sans", sans-serif;
		font-weight: 400;
	}

	h1{
		font-family: 'Montserrat', sans-serif;
	}
	
	h2,
	h3,
	h4,
	h5,
	h6,
	strong{
		font-family: "DM Sans", sans-serif;
	}

	a {
		text-decoration: none;
		color: currentColor;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`

