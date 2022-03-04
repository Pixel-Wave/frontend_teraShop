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
} from './styles'

export function Product() {
    return (
        <Container>
            <Header>
                <ion-icon name="chevron-back-outline"></ion-icon>
                <ion-icon name="cart-outline"></ion-icon>
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
                <OverviewCourses/>
                {/* <ContentCourse/> */}
            </CourseContainer>
            <AnotherCourses/>
            
            <AddCartButton>
                Add To Cart
            </AddCartButton> 
        </Container>
    )
}