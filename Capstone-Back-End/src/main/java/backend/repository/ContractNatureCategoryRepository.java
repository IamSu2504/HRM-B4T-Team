package backend.repository;

import backend.entity.ContractNatureCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface ContractNatureCategoryRepository extends JpaRepository<ContractNatureCategory,Integer> {

    @Query(value = "select max(id) from phanloai_tinhchathopdong", nativeQuery = true)
    int getLastID();

}