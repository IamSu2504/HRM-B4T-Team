package backend.repository;

import backend.entity.Shift;
import backend.entity.TimeKeepingEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimeKeepingEmployeeRepository extends JpaRepository<TimeKeepingEmployee, Integer> {

    @Query(value = "select t from TimeKeepingEmployee t where t.maNV like %?1%"+
            " or t.status like %?1%"
    )
    List<TimeKeepingEmployee> getSearched(String text);
}
