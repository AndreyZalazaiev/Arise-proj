import React from "react";
import {Route, RouteComponentProps, RouteProps} from 'react-router';
import {useKeycloak} from "@react-keycloak/web";
import LoginPage from "../components/Login";


interface PrivateRouteParams extends RouteProps {
    component:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>
}

export function PrivateRoute({
                                 component: Component,
                                 ...rest
                             }: PrivateRouteParams) {
    const { keycloak } = useKeycloak();

    return (
        <Route
            {...rest}
            render={(props) =>
                keycloak?.authenticated ? (
                    <Component {...props} />
                ) : (
                    <LoginPage forwardPath={props.location.pathname }/>
                )
            }
        />
    )
}
