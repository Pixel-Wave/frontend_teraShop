import React from "react";
import { AnotherCourses } from "../../Components/AnotherCourses";
import { OverviewCourses } from "../../Components/OverviewCourses";
import { ContentCourse } from "../../Components/ContentsCourse";

import {
	Container,
	Header,
	TitleCourse,
	CourseContainer,
	CourseHeader,
	AddCartButton,
} from "./styles";

import { Link } from "react-router-dom";

export function Product() {
	return (
		<Container>
			<Header>
				<Link to="/explore"><ion-icon name="chevron-back-outline"></ion-icon></Link>
				<Link to="/shop">
					<ion-icon name="cart-outline"></ion-icon>
				</Link>
			</Header>

			<TitleCourse>
				<h2>R$ 13900,00</h2>
				<h3>Cursão cheroso de java</h3>
			</TitleCourse>

			<CourseContainer>
				<CourseHeader>
					<h3 className="active">Overview</h3>
					<h3>Content</h3>
				</CourseHeader>
				<OverviewCourses />
				{/* <ContentCourse/> */}
			</CourseContainer>
			<AnotherCourses />

			<Link to="/shop">
				<AddCartButton>Add To Cart</AddCartButton>
			</Link>
		</Container>
	);
}
