package backend.repository;

import backend.entity.RewardDiscipline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RewardDisciplineRepository extends JpaRepository<RewardDiscipline,Integer> {

    @Query(value = "SELECT * from khenthuongkiluat order by id desc", nativeQuery = true)
    List<RewardDiscipline> getAll();

    @Query(value = "SELECT * from khenthuongkiluat where ma_nv = ? and id_phan_loai = ?", nativeQuery = true)
    RewardDiscipline getDublicate(String maNv,int phanLoaiID);
}