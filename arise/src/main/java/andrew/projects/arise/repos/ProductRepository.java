package andrew.projects.arise.repos;

import andrew.projects.arise.domain.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface ProductRepository extends
        PagingAndSortingRepository<Product,Long> {
}
