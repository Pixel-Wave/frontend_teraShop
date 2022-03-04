import React from "react";
import {
    RelatedCourses,
    HeaderRelated,
    BoxCourse,
    CourseItem
} from "./styles"

export function AnotherCourses() {
    return (
        <RelatedCourses>
            <HeaderRelated >
                <h2>Another Courses</h2>
                <button>See All</button>
            </HeaderRelated>
            <BoxCourse>
                <CourseItem>
                    <div></div>
                    <h2>Curso de agiota</h2>
                    <h3>R$ 354,99</h3>
                </CourseItem>
            </BoxCourse>
        </RelatedCourses>
    )
}