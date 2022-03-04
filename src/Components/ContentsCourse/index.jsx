import React from "react"
import {
    ContainerModules,
    CourseContents, 
    Module,
    HeaderModule,
    ItemModule,
    CardItem,
    SeeMoreModules,
} from './styles';

export function ContentCourse() {
    return(
        <CourseContents>
            <h3>Presentations</h3>
            <p>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Obcaecati cupiditate nulla repellendus 
                maxime pariatur quidem dolores beatae
                blanditiis commodi in, repudiandae provident 
                delectus labore recusandae fuga, 
                eveniet sapiente placeat rem.
            </p>
            <h3>modules</h3>
            <ContainerModules>
                <Module>
                    <HeaderModule>
                        <span className="active" >
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <h1>Introdução ao curso</h1>
                        </span>
                        <p>32 aulas</p>
                    </HeaderModule>
                    <ItemModule className="active">
                        <CardItem className="free">
                            <span>
                                <button>
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </button>
                                    <h2>Como preparar atum</h2>
                            </span>
                                <p>03:45</p>
                        </CardItem>

                        <CardItem className="free">
                            <span>
                                <button>
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </button>
                                    <h2>Como preparar atum</h2>
                            </span>
                                <p>03:45</p>
                        </CardItem>
                    </ItemModule>
                </Module>

                <Module>
                    <HeaderModule>
                        <span className="active" >
                            <ion-icon name="ellipse-outline"></ion-icon>
                            <h1>Introdução ao curso</h1>
                        </span>
                        <p>32 aulas</p>
                    </HeaderModule>
                    <ItemModule className="active">
                        <CardItem className="free">
                            <span>
                                <button>
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </button>
                                    <h2>Como preparar atum</h2>
                            </span>
                                <p>03:45</p>
                        </CardItem>

                        <CardItem className="free">
                            <span>
                                <button>
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </button>
                                    <h2>Como preparar atum</h2>
                            </span>
                                <p>03:45</p>
                        </CardItem>
                    </ItemModule>
                </Module>
                <SeeMoreModules>
                    Mais 145 Sessoes
                </SeeMoreModules>
            </ContainerModules>
        </CourseContents>
    );
}
