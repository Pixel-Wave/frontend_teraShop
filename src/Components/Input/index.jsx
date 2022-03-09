import React from "react";
import { Label, Wrapper, Error } from "./style";

export function Input({label, type, name, id, placeholder, iconName, error}) {
    return(
        <>
            <Label htmlFor={name}>{label}</Label>
            <Wrapper>
                <ion-icon name={iconName}></ion-icon>
                <input type={type} name={name} id={id} class="email" placeholder={placeholder}></input>
            </Wrapper>
            <Error>{error}</Error>
        </>
    )
}