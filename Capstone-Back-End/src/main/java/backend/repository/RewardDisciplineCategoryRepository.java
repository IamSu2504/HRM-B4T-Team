package backend.repository;

import backend.entity.RewardDisciplineCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RewardDisciplineCategoryRepository extends JpaRepository<RewardDisciplineCategory, Integer> {

    @Query(value = "select * from phanloai_khenthuongkiluat where upper(danh_muc) = upper(?)", nativeQuery = true)
    RewardDisciplineCategory getByDanhMuc(String danhMuc);

    @Query(value = "SELECT * from phanloai_khenthuongkiluat where loai_danh_muc = 1 order by id desc", nativeQuery = true)
    List<RewardDisciplineCategory> getAllRewardCategory();

    @Query(value = "SELECT * from phanloai_khenthuongkiluat where loai_danh_muc = 0 order by id desc", nativeQuery = true)
    List<RewardDisciplineCategory> getAllDisciplineCategory();

}
