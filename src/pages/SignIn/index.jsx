import React from "react"
import { Route, Routes} from "react-router-dom";
import { 
    Container,
    Audio,
} from "./styles"

import { LoginForm } from "./LoginForm";
import { LoginPasswordLost } from "./LoginPasswordLost";

export function SignIn() {
    return(
    <Container>
        <Audio>
            <h1 className="header-start">Pixel Academy</h1>
            <p className="p-start">It's modular and designed to last</p>
        </Audio>
        <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route path="/lost-password" element={<LoginPasswordLost/>}/>
        </Routes>
    </Container>
    )
}