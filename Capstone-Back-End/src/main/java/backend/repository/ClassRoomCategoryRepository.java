package backend.repository;

import backend.entity.ClassRoomCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRoomCategoryRepository extends JpaRepository<ClassRoomCategory,Integer> {
    @Query(value = "select max(id) from phanloai_phonghoc", nativeQuery = true)
    int getLastID();
}
