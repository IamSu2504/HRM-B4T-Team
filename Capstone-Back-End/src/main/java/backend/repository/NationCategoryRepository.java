package backend.repository;

import backend.entity.NationCategory;
import backend.entity.TaxCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface NationCategoryRepository extends JpaRepository<NationCategory,String> {

}