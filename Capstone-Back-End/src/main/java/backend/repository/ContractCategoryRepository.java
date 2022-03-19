package backend.repository;

import backend.entity.ContractCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractCategoryRepository extends JpaRepository<ContractCategory,Integer> {
    @Query(value = "select max(id) from phanloai_hopdong", nativeQuery = true)
    int getLastID();
}
