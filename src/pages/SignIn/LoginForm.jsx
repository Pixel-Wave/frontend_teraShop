import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input";
import { Login } from "./styles";

export function LoginForm() {
    return (
        <Login>
            <form action="" class="form-start">
                {/* <div class="input">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" name="email" id="email" class="email" placeholder="Email"></input>
                </div> */}

                <Input 
                    label={"email"}
                    iconName={"mail-outline"}
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    placeholder={"Email"}
                    error={"error"}
                />
                <Input 
                    label={"password"}
                    iconName={"lock-closed-outline"}
                    type={"password"}
                    name={"password"}
                    id={"password"}
                    placeholder={"Password"}
                    error={"error"}
                />

                {/* <div class="input">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" id="password" class="password" placeholder="Password"></input>
                </div> */}
            </form>
            <Link to="/login/lost-password">Lost Password</Link>
            {/* <a href="#" class="forgot">Forgot Password</a> */}
            <button class="btn">Sign in</button>
            <p class="account">Didn't have any account? <a href="#" class="signup">Sign Up here</a></p>
        </Login>
    )
}