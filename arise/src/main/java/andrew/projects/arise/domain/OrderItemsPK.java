package andrew.projects.arise.domain;

import lombok.Data;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
public class OrderItemsPK implements Serializable {
    private long orderId;
    private long productId;
}
