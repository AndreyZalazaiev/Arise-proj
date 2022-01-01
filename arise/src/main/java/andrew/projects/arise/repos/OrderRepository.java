package andrew.projects.arise.repos;

import andrew.projects.arise.domain.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface OrderRepository extends PagingAndSortingRepository<Order,Long> {
    public List<Order> findAllByUserId(String userId);
}
