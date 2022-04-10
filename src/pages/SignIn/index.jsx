import React from "react"
import { Route, Routes, Link} from "react-router-dom";
import { IoBook} from "react-icons/io5"

import { Button } from "../../components/Button";

import { 
    Container,
    Logo,
} from "./styles"

import { LoginForm } from "./LoginForm";
import { LoginPasswordLost } from "./LoginPasswordLost";

export function SignIn() {
    return(
    <Container>
        <Logo>
            <h1 >Pixel Academy</h1>
            <IoBook/>
        </Logo>
        <LoginForm/>
        <Routes>
            <Route path="/lost-password" element={<LoginPasswordLost/>}/>
        </Routes>
        <Link to="/login/lost-password">Lost Password</Link>
        <Button >Sign In</Button>
        <Link to="/register">
            Didn’t have any account? 
            <span>Sign Up here</span>
        </Link>
    </Container>
    )
}