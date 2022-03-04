import React from "react";
import {
    HeaderCart,
    Container,
    Options,
    CartOption,
    ImageOption,
    DataOption,
    ListOrDelete,
    Checkout,
    Button,
} from "./styles";

export function Cart() {
    return(
        <>
            <HeaderCart>
                <ion-icon name="chevron-back-outline"></ion-icon>
                <p>Shopping Cart</p>
                <ion-icon name="trash-outline"></ion-icon>
            </HeaderCart>

            <Container>
                <Options>
                    <CartOption >
                        <DataOption>
                            <ImageOption Image={"https://neuroup.com.br/wp-content/uploads/2021/06/icone-prof-@-cursos-02.png"}></ImageOption>
                            <div>
                                <h1>Curso de truco avançado</h1>
                                <h2>R$ 540,00</h2>
                            </div>

                        </DataOption>
                        <ListOrDelete>
                            <ion-icon name="trash"></ion-icon>
                            <ion-icon name="add"></ion-icon>
                        </ListOrDelete>
                    </CartOption>

                    <CartOption >
                        <DataOption>
                            <ImageOption Image={"https://neuroup.com.br/wp-content/uploads/2021/06/icone-prof-@-cursos-02.png"}></ImageOption>
                            <div>
                                <h1>Curso de truco avançado</h1>
                                <h2>R$ 540,00</h2>
                            </div>

                        </DataOption>
                        <ListOrDelete>
                            <ion-icon name="trash"></ion-icon>
                            <ion-icon name="add"></ion-icon>
                        </ListOrDelete>
                    </CartOption>
                </Options>

                <Checkout>
                    <span>
                        <p>Total 3 courses</p>
                        <strong>RS 9900,00</strong>
                    </span>

                    <Button>
                        Processed to Checkout 
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </Button>
                </Checkout>
            </Container>
        </>
    )
}