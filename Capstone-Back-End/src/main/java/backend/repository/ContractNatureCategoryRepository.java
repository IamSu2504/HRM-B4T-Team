package backend.repository;

import backend.entity.ContractCategory;
import backend.entity.ContractNatureCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ContractNatureCategoryRepository extends JpaRepository<ContractNatureCategory,Integer> {
    @Query(value = "select * from phanloai_tinhchathopdong where UPPER(tinh_chat_hop_dong) = UPPER(?)", nativeQuery = true)
    ContractNatureCategory getByTinhChatHopDong(String tinhChatHopDong);

}