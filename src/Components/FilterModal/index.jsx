import React from "react";
import { 
    Container,
    HeaderModal,
    Categories,
    SortBy,
    Range,
    ButtonFilter
} from "./styles";

export function FilterModal (){
    return (
        <Container>
            <HeaderModal>
                <h2>Filter</h2>
                <ion-icon name="close-outline"></ion-icon>
            </HeaderModal>

            <h2>Categories</h2>
            <Categories>
                <h3>Javascripto</h3>
                <h3>Javascripto</h3>
                <h3 className="active">Javascripto</h3>
                <h3>Javascripto</h3>
                <h3>Javascripto</h3>
                <h3>Javascripto</h3>
            </Categories>

            <h2>Sorty By</h2>
            <SortBy>
                <h3>Javascripto</h3>
                <h3 className="active">Javascripto</h3>
                <h3>Javascripto</h3>
                <h3>Javascripto</h3>
                <h3>Javascripto</h3>
                <h3>Javascripto</h3>
            </SortBy>

            <h2>Price Range</h2>
            <Range>
                <input type="number" placeholder="Min Price"/>
                <input type="number" placeholder="Max Price"/>
            </Range>

            <ButtonFilter>
                Apply Filter
            </ButtonFilter>
        </Container>
    );
}