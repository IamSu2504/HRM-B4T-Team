package backend.repository;

import backend.entity.RelativeCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RelativeCategoryRepository extends JpaRepository<RelativeCategory, Integer> {
    @Query(value = "select max(id) from phanloai_nguoithan", nativeQuery = true)
    int getLastID();
}
