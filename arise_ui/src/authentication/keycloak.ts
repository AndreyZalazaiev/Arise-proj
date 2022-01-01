import Keycloak from 'keycloak-js';

export const keycloakConfig ={
    realm: "SpringApp",
    url: "http://localhost:8081/auth/",
    clientId: "react-web-client"
}

export const keycloak = Keycloak(keycloakConfig);

