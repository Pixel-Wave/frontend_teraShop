import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Login } from "./styles";
import { Button } from "../../components/Button"

import { useForm } from "../../hooks/useForm";

export function LoginForm() {
    const username = useForm('email');
    const password = useForm();

    return (
        <Login>
            <form action="" className="form-start">
                <Input 
                    label={"email"}
                    iconName={"mail-outline"}
                    type={"text"}
                    name={"email"}
                    id={"email"}
                    placeholder={"Email"}
                    {...username}
                />
                <Input 
                    label={"password"}
                    iconName={"lock-closed-outline"}
                    type={"password"}
                    name={"password"}
                    id={"password"}
                    placeholder={"Password"}
                    {...password}
                />
                <Link to="/login/lost-password">Lost Password</Link>
                <Link to="/home/"><Button >Sign In</Button></Link>
            </form>
            
            <p className="account">Didn't have any account?<Link to="/login" className="signup">Sign Up here</Link></p>
        </Login>
    )
}