package andrew.projects.arise.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserPrincipal {
    private String id;
    private String email;
    private String locale;
    private String firstName;
    private String name;
}
