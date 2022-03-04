import React from "react";

import {
    Header,
    Container,
    UserContainer,
    UserAvatar,
    ConfigCard,
} from "./styles"

export function Profile(params) {
    return (
        <>
            <Header>
                <ion-icon name="chevron-back-outline"></ion-icon>
                <h2>Profile</h2>
                <div>.</div>
            </Header>
            <Container>
                <UserContainer>
                    <UserAvatar Avatar={"https://img.r7.com/images/2013/12/03/15_34_30_214_file?dimensions=771x420&no_crop=true"}/>
                    <span>
                        <h3>Andrea Hirata</h3>
                        <p>genoveva@gmail.com</p>
                    </span>
                </UserContainer>
                <h2>General</h2>
                <ConfigCard>Edit Profile</ConfigCard>
                <ConfigCard>WishList</ConfigCard>
                <ConfigCard>Notifications</ConfigCard>
                <h2>Legal</h2>
                <ConfigCard>Terms of Use</ConfigCard>
                <ConfigCard>Privacy Police</ConfigCard>
                <h2>Personal</h2>
                <ConfigCard>Report a Bug</ConfigCard>
                <ConfigCard>Logout</ConfigCard>
            </Container>
        </>
    )
}