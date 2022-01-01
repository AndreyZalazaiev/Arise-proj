import React, {FC} from 'react';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./Login";
import {Header} from "./Header";
import {keycloak} from "../authentication/keycloak";
import ProductComponent from "./product/ProductComponent";
import {PrivateRoute} from "../authentication/PrivateRoute";
import {GlobalStyle} from "../styles/GlobalStyles";


export const App:FC = () => {

    return (
        <div>
            <GlobalStyle/>
            <ReactKeycloakProvider authClient={keycloak}>
                <Header/>
                <Router>
                    <Route>
                        <PrivateRoute path="/" component={ProductComponent}/>
                        <Route path={"/login"}><Login/></Route>
                    </Route>
                </Router>
            </ReactKeycloakProvider>
        </div>
    );
}

