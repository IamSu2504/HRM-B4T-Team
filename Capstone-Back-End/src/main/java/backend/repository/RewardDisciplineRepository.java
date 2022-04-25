package backend.repository;

import backend.entity.RewardDiscipline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RewardDisciplineRepository extends JpaRepository<RewardDiscipline,Integer> {

    @Query(value = "select k.* from khenthuongkiluat k, phanloai_khenthuongkiluat p\n" +
            "where k.id_phan_loai = p.id and p.loai_danh_muc = 1\n" +
            "order by k.id desc ", nativeQuery = true)
    List<RewardDiscipline> getAllReward();

    @Query(value = "select k.* from khenthuongkiluat k, phanloai_khenthuongkiluat p\n" +
            "where k.id_phan_loai = p.id and p.loai_danh_muc = 0\n" +
            "order by k.id desc ", nativeQuery = true)
    List<RewardDiscipline> getAllDiscipline();

    @Query(value = "select k.* from khenthuongkiluat k, phanloai_khenthuongkiluat p\n" +
            "where k.id_phan_loai = p.id and p.loai_danh_muc = 1 and k.id = ? \n", nativeQuery = true)
    RewardDiscipline getRewardByID(int id);

    @Query(value = "select k.* from khenthuongkiluat k, phanloai_khenthuongkiluat p\n" +
            "where k.id_phan_loai = p.id and p.loai_danh_muc = 0 and k.id = ? \n", nativeQuery = true)
    RewardDiscipline getDisciplineByID(int id);

    @Query(value = "SELECT * from khenthuongkiluat where ma_nv = ? and id_phan_loai = ?", nativeQuery = true)
    RewardDiscipline getDublicate(String maNv,int phanLoaiID);


}