import React from 'react';
import SignIn from './signComp/signIn';
import NavDesktop from "../navDesk";
import PageName from "../pageName";
import Nav from "../nav";

const SignInPage = () => {

    return (
        <>
            <NavDesktop />
            <Nav color="white" />
            <PageName namePage="MV Agusta Wallpapers" />
            <SignIn />
        </>
    )

}
export default SignInPage;
