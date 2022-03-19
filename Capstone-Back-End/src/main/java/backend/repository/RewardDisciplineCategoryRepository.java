package backend.repository;

import backend.entity.RewardDisciplineCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RewardDisciplineCategoryRepository extends JpaRepository<RewardDisciplineCategory, Integer> {
    @Query(value = "select max(id) from phanloai_khenthuongkiluat", nativeQuery = true)
    int getLastID();
}
