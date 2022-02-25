import React from "react";
import { 
    Container,
    Header, 
    Greetings, 
    Search,
    ProductsDestack,
    ListCategories,
    ContainerCourse,
    CourseOfCategorySelected,
    HeaderFeatured,
    FeaturedCourses,
    ContentFeaturedCourses

} from "./style";

export function Home() {
    return (
        <Container>
            <Header userAvatar={"https://blogs.opovo.com.br/artesanatodamente/wp-content/uploads/sites/52/2018/08/Esqueceram-de-Mim-740x555.jpg"}>
                <ion-icon name="menu-outline"></ion-icon>
                <nav>
                    <ion-icon name="book"></ion-icon>
                    <p>Pixel Academy</p>
                </nav>
                <div className="user-avatar"></div>
            </Header>

            <Greetings>
                <p>Hi, Saulo</p>
                <h1>What are you looking for today?</h1>
            </Greetings>

            <Search>
                <ion-icon name="search"></ion-icon> 
                <input type="text" placeholder="Search course"/>
            </Search>  

            <ProductsDestack>
                <ListCategories>
                    <li className="active"><a href="#">Verilog</a></li>
                    <li><a href="#">C# and C</a></li>
                    <li><a href="#">verilog</a></li>
                    <li><a href="#">Javascripto</a></li>
                    <li><a href="#">Docker</a></li>
                    <li><a href="#">C lion avançado</a></li>
                    <li><a href="#">Ruby</a></li>
                    <li><a href="#">Cobol</a></li>
                    <li><a href="#">PHP com laravel</a></li>
                    <li><a href="#">Assembly</a></li>
                    <li><a href="#">Rapadura</a></li>
                    <li><a href="#">Java</a></li>
                </ListCategories>

                <ContainerCourse>
                    <CourseOfCategorySelected>
                        <div className="title">
                            <h1>O melhor do java para você</h1>
                            <span>
                                <p>Shop now</p>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </div>
                        <div className="image">
                            <img src="https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png" alt=""></img>
                        </div> 
                    </CourseOfCategorySelected>

                    <CourseOfCategorySelected>
                        <div className="title">
                            <h1>O melhor do java para você</h1>
                            <span>
                                <p>Shop now</p>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </div>
                        <div className="image">
                            <img src="https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png" alt=""></img>
                        </div> 
                    </CourseOfCategorySelected>

                    <CourseOfCategorySelected>
                        <div className="title">
                            <h1>O melhor do java para você</h1>
                            <span>
                                <p>Shop now</p>
                                <ion-icon name="arrow-forward-outline"></ion-icon>
                            </span>
                        </div>
                        <div className="image">
                            <img src="https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png" alt=""></img>
                        </div> 
                    </CourseOfCategorySelected>
                    
                </ContainerCourse>

                <HeaderFeatured>
                    <h2>Featured Products</h2>
                    <p>See All</p>
                </HeaderFeatured>
                
                <FeaturedCourses>
                    <ContentFeaturedCourses 
                        className="content-course" 
                        CourseImage={"https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png"}
                    >
                        <div className="course-image" ></div>
                        <div className="price">
                            <h1>Curso topzera de java</h1>
                            <h2>R$ 2335,49</h2>
                            <div className="rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                        </div>
                    </ContentFeaturedCourses>

                    <ContentFeaturedCourses 
                        className="content-course" 
                        CourseImage={"https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png"}
                    >
                        <div className="course-image" ></div>
                        <div className="price">
                            <h1>Curso topzera de java</h1>
                            <h2>R$ 2335,49</h2>
                            <div className="rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                        </div>
                    </ContentFeaturedCourses>

                    <ContentFeaturedCourses 
                        className="content-course" 
                        CourseImage={"https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png"}
                    >
                        <div className="course-image" ></div>
                        <div className="price">
                            <h1>Curso topzera de java</h1>
                            <h2>R$ 2335,49</h2>
                            <div className="rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                        </div>
                    </ContentFeaturedCourses>

                    <ContentFeaturedCourses 
                        className="content-course" 
                        CourseImage={"https://www.celsonunes.com.br/wp-content/uploads/2018/05/java-logo.png"}
                    >
                        <div className="course-image" ></div>
                        <div className="price">
                            <h1>Curso topzera de java</h1>
                            <h2>R$ 2335,49</h2>
                            <div className="rating">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                        </div>
                    </ContentFeaturedCourses>
                </FeaturedCourses>
            </ProductsDestack> 
        </Container>
    )
}