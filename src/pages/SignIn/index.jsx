import React from "react"
import { 
    Container,
    Audio,
    Login,
} from "./styles"

export function SignIn() {
    return(
    <Container>
        <Audio>
            <h1 class="header-start">Pixel Academy</h1>
            <p class="p-start">It's modular and designed to last</p>
        </Audio>

        <Login>
            <form action="" class="form-start">
                <div class="input">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" name="email" id="email" class="email" placeholder="Email"></input>
                </div>

                <div class="input">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" id="password" class="password" placeholder="Password"></input>
                </div>
            </form>

            <a href="#" class="forgot">Forgot Password</a>
            <button class="btn">Sign in</button>
            <p class="account">Didn't have any account? <a href="#" class="signup">Sign Up here</a></p>
        </Login>
    </Container>
    )
}


