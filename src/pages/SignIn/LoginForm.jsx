import React from "react";
import { Input } from "../../components/Input";
import { Login } from "./styles";

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
            </form>
        </Login>
    )
}