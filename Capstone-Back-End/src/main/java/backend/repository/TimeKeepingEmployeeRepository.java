package backend.repository;

import backend.entity.TimeKeepingEmployee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeKeepingEmployeeRepository extends JpaRepository<TimeKeepingEmployee, Integer> {
}
