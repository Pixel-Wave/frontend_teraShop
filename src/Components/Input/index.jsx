import React from "react";
import { Label, Wrapper, Error } from "./style";

export function Input({label, name, type, id, placeholder, iconName, value, onChange, onBlur, error}) {
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
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            </Wrapper>
            {error && <Error>{error}</Error>}
        </>
    )
}