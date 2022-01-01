package andrew.projects.arise.repos;

import andrew.projects.arise.domain.OrderItems;
import andrew.projects.arise.domain.OrderItemsPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderItemsRepository extends CrudRepository<OrderItems, OrderItemsPK> {
}
