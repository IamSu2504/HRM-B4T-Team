package backend.repository;

import backend.entity.RelativeCategory;
import backend.entity.RewardDisciplineCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface RelativeCategoryRepository extends JpaRepository<RelativeCategory, Integer> {

    @Query(value = "select * from phanloai_nguoithan where upper(quan_he) = upper(?)", nativeQuery = true)
    RelativeCategory getByQuanHe(String quanHe);
}
