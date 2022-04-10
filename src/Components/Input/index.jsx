import React from "react";
import { Label, Wrapper, Error } from "./style";

export function Input({
    label, 
    name, 
    type, 
    id, 
    placeholder, 
    iconName, 
    value, 
    setValue,
}) {
    return(

        <>
            <Label htmlFor={name}>{label}</Label>
            <Wrapper>
                <ion-icon name={iconName}></ion-icon>
                <input 
                    type={type} 
                    name={name} 
                    id={id} 
                    className="email" 
                    value={value}
                    placeholder={placeholder}
                    onChange={(e)=>setValue(e.target.value)}
                />
            </Wrapper>
        </>
    )
}