package andrew.projects.arise.domain;

import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@IdClass(OrderItemsPK.class)
public class OrderItems {
    @Id
    private long orderId;
    @Id
    private long productId;
    @Positive
    private BigDecimal price;
    @Positive
    private int quantity;

    @NotBlank(message = "Address is mandatory")
    private String address;

    @OneToMany(mappedBy = "orderItems", cascade = CascadeType.ALL)
    private List<Product> products= new ArrayList<>();
    @OneToMany(mappedBy = "orderItems", cascade = CascadeType.ALL)
    private List<Order> orders = new ArrayList<>();

    public void addOrder(Order order) {
        orders.add(order);
        order.setOrderItems(this);
    }

    public void addProduct(Product product) {
        products.add(product);
        product.setOrderItems(this);
    }
}
