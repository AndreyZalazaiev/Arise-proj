import * as React from 'react'
import {FC, useCallback} from 'react'

import {useKeycloak} from '@react-keycloak/web'
import {Redirect} from "react-router";
import {AlignedCenterDiv} from "../styles/CommonStyles";

interface LoginPageProps {
    forwardPath?: string;
}

const LoginPage: FC<LoginPageProps> = ({forwardPath}) => {
    const {keycloak} = useKeycloak()

    const login = useCallback(() => {
        keycloak?.login()
    }, [keycloak])

    if (keycloak?.authenticated)
        return <Redirect to={forwardPath || "/"}/>

    return (
        <AlignedCenterDiv>
            <button type="button" onClick={login}>
                Login
            </button>
        </AlignedCenterDiv>
    )
}

export default LoginPage
