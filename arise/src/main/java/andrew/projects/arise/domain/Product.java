package andrew.projects.arise.domain;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.math.BigDecimal;

@Entity
@Data
public class Product extends BaseEntity {
    @NotBlank
    private String name;
    @NotBlank
    private BigDecimal price;
    @Min(0)
    private float weight;
    private String description;
    private String category;
    private String image;
    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "orderId",referencedColumnName = "orderId"),
            @JoinColumn(name = "productId",referencedColumnName = "productId")
    })
    private OrderItems orderItems;
}
