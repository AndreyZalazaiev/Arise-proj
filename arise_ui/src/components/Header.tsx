import React, {useEffect, useState} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {useKeycloak} from "@react-keycloak/web";
import {KeycloakProfile} from "keycloak-js";
import {MarginWrapperDiv} from "../styles/CommonStyles";
import {Redirect} from "react-router";
import {Button} from "@material-ui/core";

export const Header = () => {
    const {keycloak} = useKeycloak();
    const [profile, setProfile] = useState<KeycloakProfile>();
    useEffect(() => {
        keycloak
            .loadUserProfile()
            .then(r => setProfile(r));
    }, [keycloak.authenticated])

    const redirectHome = () => {
        return <Redirect to={"/"}/>
    }
    const onClick = async () => {
        await keycloak.logout();
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="container-fluid">
                <Nav.Item>
                    <MarginWrapperDiv left={"20px"}>
                        <Navbar.Brand onClick={redirectHome} href={"/"}>Arise</Navbar.Brand>
                    </MarginWrapperDiv>
                </Nav.Item>
                <Nav.Item className="ml-auto">
                    <Nav.Link>Hi {profile?.username || "guest"}!
                        {keycloak.authenticated && <Button color={"secondary"} size={"small"} onClick={onClick}>Logout</Button>}
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}
