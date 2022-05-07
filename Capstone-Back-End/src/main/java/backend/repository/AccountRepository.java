package backend.repository;

import backend.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account,Integer> {

    @Query(value = "select * from account where tai_khoan = ? and mat_khau = ?", nativeQuery = true)
    Account getLoginAccount(String username, String password);

    @Query(value = "select * from account where tai_khoan = ?", nativeQuery = true)
    Account getByUsername(String username);

    @Query(value = "select * from account where ma_nv = ?", nativeQuery = true)
    Account getByMaNv(String maNv);

    @Query(value = "select * from account order by id desc", nativeQuery = true)
    List<Account> getAll();

    @Query(value = "select max(id) from account", nativeQuery = true)
    int getLastID();

    @Query(value = "select distinct n.ma_nv from nhanvien n where (select a.ma_nv from account a where a.ma_nv = n.ma_nv) is null", nativeQuery = true)
    List<String> getNotCreatedEmpID();
}