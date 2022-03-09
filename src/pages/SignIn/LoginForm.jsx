import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input";
import { Login } from "./styles";
import { Button } from "../../Components/Button"

export function LoginForm() {
    return (
        <Login>
            <form action="" class="form-start">
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
                <Link to="/login/lost-password">Lost Password</Link>
                {/* <a href="#" class="forgot">Forgot Password</a> */}
                {/* <button class="btn">Sign in</button> */}

                
                <Button >Sign In</Button>
            </form>
            
            <p class="account">Didn't have any account? <a href="#" class="signup">Sign Up here</a></p>
        </Login>
    )
}