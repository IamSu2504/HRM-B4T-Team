package backend.repository;

import backend.entity.ClassRoomCategory;
import backend.entity.ContractNatureCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ContractNatureCategoryRepository extends JpaRepository<ContractNatureCategory,Integer> {
    @Query(value = "select * from phanloai_tinhchathopdong where UPPER(tinh_chat_hop_dong) = UPPER(?)", nativeQuery = true)
    ContractNatureCategory getByTinhChatHopDong(String tinhChatHopDong);

}