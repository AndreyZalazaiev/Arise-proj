package andrew.projects.arise.service;

import andrew.projects.arise.dto.UserPrincipal;
import lombok.Setter;
import org.keycloak.KeycloakPrincipal;
import org.keycloak.adapters.springsecurity.token.KeycloakAuthenticationToken;
import org.keycloak.representations.IDToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class AuthService {

    public UserPrincipal getPrincipal(){
        KeycloakAuthenticationToken authentication = (KeycloakAuthenticationToken)
                SecurityContextHolder.getContext().getAuthentication();

        Principal principal = (Principal) authentication.getPrincipal();

        if (principal instanceof KeycloakPrincipal) {
            KeycloakPrincipal kPrincipal = (KeycloakPrincipal) principal;
            var token = kPrincipal.getKeycloakSecurityContext().getToken();

            return UserPrincipal.builder()
                    .email(token.getEmail())
                    .id(   token.getId())
                    .locale(  token.getLocale())
                    .name(token.getName())
                    .build();
        }
        return null;
    }
}
