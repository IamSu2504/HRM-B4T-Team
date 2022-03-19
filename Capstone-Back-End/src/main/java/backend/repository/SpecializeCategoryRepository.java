package backend.repository;

import backend.entity.SpecializeCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecializeCategoryRepository extends JpaRepository<SpecializeCategory,Integer> {
    @Query(value = "select max(id) from phanloai_chuyenmon", nativeQuery = true)
    int getLastID();
}
