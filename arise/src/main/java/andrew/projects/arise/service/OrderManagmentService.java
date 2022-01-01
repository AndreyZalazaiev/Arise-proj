package andrew.projects.arise.service;

import andrew.projects.arise.domain.Order;
import andrew.projects.arise.domain.OrderItems;
import andrew.projects.arise.domain.OrderStatus;
import andrew.projects.arise.domain.Product;
import andrew.projects.arise.dto.OrderItemDto;
import andrew.projects.arise.exception.OrderManagmentException;
import andrew.projects.arise.repos.OrderItemsRepository;
import andrew.projects.arise.repos.OrderRepository;
import andrew.projects.arise.repos.ProductRepository;
import lombok.AllArgsConstructor;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class OrderManagmentService implements OrderManagementService {

    private OrderRepository orderRepository;
    private OrderItemsRepository orderItemsRepository;
    private AuthService authService;
    private ProductRepository productRepository;

    @Override
    public List<OrderItems> createOrder(List<OrderItemDto> itemsDto)
            throws OrderManagmentException {
        if(CollectionUtils.isEmpty(itemsDto)){
            throw new OrderManagmentException("Unable to create order without products");
        }
        var products = (List<Product>) productRepository.findAllById(
                itemsDto.stream()
                        .map(OrderItemDto::getId)
                        .collect(Collectors.toList()));

        Map<Product, Long> ordersAmount = products.stream()
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()));
        Order order = new Order();
        order.setOrderStatus(OrderStatus.OPEN);
        order.setUserId(authService.getPrincipal().getId());

        Order savedOrder = orderRepository.save(order);

        List<OrderItems> items =new ArrayList<>();
        ordersAmount.forEach((product, amount) -> {
            OrderItems orderItem = new OrderItems();
            orderItem.setAddress(itemsDto.stream().findAny().get().getAddress());
            orderItem.setQuantity(Math.toIntExact(amount));
            orderItem.setPrice(product.getPrice().multiply(BigDecimal.valueOf(amount)));
            orderItem.setProductId(product.getId());
            orderItem.setOrderId(savedOrder.getId());
            items.add(orderItem);
        } );

        return (List<OrderItems>) orderItemsRepository.saveAll(items);
    }

}
