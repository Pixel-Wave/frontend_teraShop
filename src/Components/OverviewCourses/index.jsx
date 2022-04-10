import React from "react";

import {
    PresentationVideos,
    Video,
    Reviews,
    TitleReview,
    ItemReview,
    UserImage,
    Testimonial,
    NameUser,
    Stars
} from "./styles";

export function OverviewCourses({ImageSource}) {
    return (
        <>
            <PresentationVideos >
                <Video src="https://www.youtube.com/embed/sTX0UEplF54"></Video>
                <Video src="https://www.youtube.com/embed/sTX0UEplF54"></Video>
                <Video src="https://www.youtube.com/embed/sTX0UEplF54"></Video>
                <Video src="https://www.youtube.com/embed/sTX0UEplF54"></Video>
            </PresentationVideos>

            <Reviews>
                <TitleReview>
                    Review (102)
                </TitleReview>
                <ItemReview>
                    <UserImage ImageSource={ImageSource}/>
                    <Testimonial>
                        <NameUser>
                            <p>John Doe</p>
                            <h5>345 Month ago</h5>
                        </NameUser>
                        <Stars>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </Stars>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                        
                    </Testimonial>

                </ItemReview>

                <ItemReview>
                    <UserImage ImageSource={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfwNzIsKhQlro4NJjJkJtNNAPrbpPdH3Q8Q&usqp=CAU"}/>
                    <Testimonial>
                        <NameUser>
                            <p>John Doe</p>
                            <h5>1 Month ago</h5>
                        </NameUser>
                        <Stars>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </Stars>
                        <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua.
                        </p>
                        
                    </Testimonial>

                </ItemReview>
                <button>See All Reviews</button>
            </Reviews>
        </>
    )
}