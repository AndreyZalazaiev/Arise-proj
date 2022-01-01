package andrew.projects.arise.controller;

import andrew.projects.arise.domain.Order;
import andrew.projects.arise.repos.OrderRepository;
import andrew.projects.arise.service.AuthService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/order")
@Data
@AllArgsConstructor
public class OrderController {
    private final OrderRepository orderRepository;
    private final AuthService authService;

    @GetMapping("/{orderId}")
    public Order getOrderById(@PathVariable long orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }

    @GetMapping
    public List<Order> getOrders() {
        return orderRepository
                .findAllByUserId(authService.getPrincipal().getId());
    }

    //@PostMapping
    //public ResponseEntity<?> postOrder(@Valid Order order) {
    //    order.setUserId(authService.getPrincipal().getId());
    //    return ResponseEntity.ok(orderRepository.save(order));
    //}

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable long id) {
        orderRepository.deleteById(id);
    }


}
