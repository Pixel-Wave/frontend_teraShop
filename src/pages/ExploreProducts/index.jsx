import React from "react";
import {
	Container,
	Header,
	ResultSearch,
	ShortBy,
	FilterContainer,
	ShortByContainer,
	CoursesContainer,
	Course,
	CourseImage,
	ContainerInfos,
	Reviews,
} from "./styles";

import { Link } from "react-router-dom";

export function ExploreProducts() {
	return (
		<Container>
			<Header>
				<Link to="/home">
					<ion-icon name="chevron-back-outline"></ion-icon>
				</Link>
				<Link to="/shop">
					<ion-icon name="cart-outline"></ion-icon>
				</Link>
			</Header>
			<ResultSearch>
				<p>java</p>
				<h1>Javascripto</h1>
			</ResultSearch>

			<ShortBy>
				<FilterContainer>
					<ion-icon name="options-outline"></ion-icon>
					<h3>Filter</h3>
				</FilterContainer>
				<ShortByContainer>
					<h3 className="active">Populatity</h3>
					<h3>Newest</h3>
					<h3>Oldest</h3>
					<h3>High Price</h3>
					<h3>Low Price</h3>
					<h3>Review</h3>
				</ShortByContainer>
			</ShortBy>

			<CoursesContainer>
				<Course>
					<CourseImage
						Image={
							"https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg"
						}
					/>
					<ContainerInfos>
						<h2>Cobol</h2>
						<h3>R$ 23459.00</h3>
						<Reviews>
							<span>
								<ion-icon name="star"></ion-icon>
								<p>4.9</p>
							</span>
							<p>89 Reviews</p>
							<ion-icon name="ellipsis-vertical-outline"></ion-icon>
						</Reviews>
					</ContainerInfos>
				</Course>

				<Course>
					<CourseImage
						Image={
							"https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg"
						}
					/>
					<ContainerInfos>
						<h2>Cobol</h2>
						<h3>R$ 23459.00</h3>
						<Reviews>
							<span>
								<ion-icon name="star"></ion-icon>
								<p>4.9</p>
							</span>
							<p>89 Reviews</p>
							<ion-icon name="ellipsis-vertical-outline"></ion-icon>
						</Reviews>
					</ContainerInfos>
				</Course>

				<Course>
					<CourseImage
						Image={
							"https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg"
						}
					/>
					<ContainerInfos>
						<h2>Cobol</h2>
						<h3>R$ 23459.00</h3>
						<Reviews>
							<span>
								<ion-icon name="star"></ion-icon>
								<p>4.9</p>
							</span>
							<p>89 Reviews</p>
							<ion-icon name="ellipsis-vertical-outline"></ion-icon>
						</Reviews>
					</ContainerInfos>
				</Course>

				<Course>
					<CourseImage
						Image={
							"https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg"
						}
					/>
					<ContainerInfos>
						<h2>Cobol</h2>
						<h3>R$ 23459.00</h3>
						<Reviews>
							<span>
								<ion-icon name="star"></ion-icon>
								<p>4.9</p>
							</span>
							<p>89 Reviews</p>
							<ion-icon name="ellipsis-vertical-outline"></ion-icon>
						</Reviews>
					</ContainerInfos>
				</Course>

				<Course>
					<CourseImage
						Image={
							"https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg"
						}
					/>
					<ContainerInfos>
						<h2>Cobol</h2>
						<h3>R$ 23459.00</h3>
						<Reviews>
							<span>
								<ion-icon name="star"></ion-icon>
								<p>4.9</p>
							</span>
							<p>89 Reviews</p>
							<ion-icon name="ellipsis-vertical-outline"></ion-icon>
						</Reviews>
					</ContainerInfos>
				</Course>
			</CoursesContainer>
		</Container>
	);
}
