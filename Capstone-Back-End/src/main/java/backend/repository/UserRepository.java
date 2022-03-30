package backend.repository;

import backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {

    @Query(value = "select * from nhanvien where tai_khoan_nv = ? and mat_khau_nv = ?", nativeQuery = true)
    User getLoginUser(String username, String password);

}