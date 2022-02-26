import React from "react";
import { 
    Container,
    Header,
    Search,
    ContainerLastest,
    LastestSearch,
    PopularCourses,
    Course,
    CourseInfos
} from "./styles";

export function SearchPage() {
    return(
        <Container>
            <Header >
                <ion-icon name="chevron-back-outline"></ion-icon>
                <h2>Search</h2>
                <ion-icon name="cart-outline"></ion-icon>
            </Header>

            <Search>
                <ion-icon name="search"></ion-icon> 
                <input type="text" placeholder="Search course"/>
            </Search>
            
            <ContainerLastest>
                <h2>Lastest Search</h2>
                <LastestSearch>
                    <span>
                        <ion-icon name="time-outline"></ion-icon>
                        <p>pwa com react js</p>
                    </span>
                    <ion-icon name="close-outline"></ion-icon>
                </LastestSearch>
                <LastestSearch>
                    <span>
                        <ion-icon name="time-outline"></ion-icon>
                        <p>pwa com react js</p>
                    </span>
                    <ion-icon name="close-outline"></ion-icon>
                </LastestSearch>
            </ContainerLastest>

            <PopularCourses>
                <h2>Popular Courses</h2>
                <Course logoCourse="https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg">
                    <div className="image"></div>
                    <CourseInfos>
                        <h2>Cursinho no talento de delphi</h2>
                        <h3>R$ 19500,00</h3>
                        <div>
                            <div>
                                <ion-icon name="star"></ion-icon>
                                <h3>4.6</h3>
                                <p>1200 Reviews</p>
                            </div>
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                        </div>
                    </CourseInfos>
                </Course>
                
                <Course logoCourse="https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg">
                    <div className="image"></div>
                    <CourseInfos>
                        <h2>Cursinho no talento de delphi</h2>
                        <h3>R$ 19500,00</h3>
                        <div>
                            <div>
                                <ion-icon name="star"></ion-icon>
                                <h3>4.6</h3>
                                <p>1200 Reviews</p>
                            </div>
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                        </div>
                    </CourseInfos>
                </Course>

                <Course logoCourse="https://i.pinimg.com/564x/59/9c/0e/599c0e80767eb7cc13a987766e22171b.jpg">
                    <div className="image"></div>
                    <CourseInfos>
                        <h2>Cursinho no talento de delphi</h2>
                        <h3>R$ 19500,00</h3>
                        <div>
                            <div>
                                <ion-icon name="star"></ion-icon>
                                <h3>4.6</h3>
                                <p>1200 Reviews</p>
                            </div>
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                        </div>
                    </CourseInfos>
                </Course>
            </PopularCourses> 
            
        </Container>
    );
}