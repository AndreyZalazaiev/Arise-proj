package andrew.projects.arise.controller;

import andrew.projects.arise.domain.OrderItemsPK;
import andrew.projects.arise.dto.OrderItemDto;
import andrew.projects.arise.exception.OrderManagmentException;
import andrew.projects.arise.repos.OrderItemsRepository;
import andrew.projects.arise.service.OrderManagmentService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/items")
@Data
@AllArgsConstructor
public class OrderItemsController {

    private OrderManagmentService orderManagmentService;
    private OrderItemsRepository orderItemsRepository;

    @PostMapping
    public ResponseEntity<?> postOrderItems(@RequestBody List<OrderItemDto> itemDtos)
            throws OrderManagmentException {
        return ResponseEntity.ok(orderManagmentService
                .createOrder(itemDtos));
    }
    @DeleteMapping
    public ResponseEntity<?> deleteOrderItems(@RequestBody OrderItemsPK id){
        orderItemsRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
