import React from "react";
import {IoBook} from "react-icons/io5"

import { useForm } from "../../hooks/useForm";
import { Input } from "../../components/Input";

import {
    Container, 
    Content, 
    Logo, 
    Form
} from "./styles"

export function SignUp() {
    const [username, setUsername] = React.useState(); 
    const [password, setPassword] = React.useState(); 

    function handleCreateUser(event) {
        event.preventDefault();
        console.log(username, password);
    }

    return (
        <Container>
            <Content>
                <Logo>
                    <IoBook/>
                    <h1>Pixel Academy</h1>
                </Logo>
                <Form onSubmit={handleCreateUser}>
                    <Input 
                        label={"email"}
                        iconName={"mail-outline"}
                        type={"email"}
                        name={"email"}
                        id={"email"}
                        placeholder={"Email"}
                        value={username}
                        setValue={setUsername}
                    />
                    <Input 
                        label={"password"}
                        iconName={"lock-closed-outline"}
                        type={"password"}
                        name={"password"}
                        id={"password"}
                        placeholder={"Password"}
                        value={password}
                        setValue={setPassword}
                    />
                    <button>Enviar</button>
                </Form>
            </Content>
        </Container>
    )
}