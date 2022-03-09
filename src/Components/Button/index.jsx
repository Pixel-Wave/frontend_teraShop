import React from "react";
import { Wrapper } from "./style";

export function Button({children, iconName, className, ...props}) {
    return(
        <Wrapper {...props}>
            <div  className={className}>
                {children}
                <ion-icon name={iconName}></ion-icon>
            </div>
        </Wrapper>
    )
}