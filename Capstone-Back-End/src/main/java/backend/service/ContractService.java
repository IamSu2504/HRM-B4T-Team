package backend.service;

import backend.entity.*;
import backend.repository.ContractCategoryRepository;
import backend.repository.ContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ContractService {

    @Autowired
    private ContractRepository repo;

    @Autowired
    private ContractCategoryRepository contractCategoryRepository;

    public List<Contract> getAll() {
        return repo.findAll();
    }

    public Contract getById(String id) {
        if (repo.findById(id).isPresent()) {
            return repo.findById(id).get();
        } else {
            return null;
        }
    }

    public String getCreateMessage(CreateUpdateContractRequest request) {
        Contract newContract = getNewContract(request);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

        if(newContract.getNgayHetHan().compareTo(newContract.getNgayHieuLuc())<=0){
            return "Ngày hết hạn phải sau ngày hiệu lực";
        }

        // add
        if(!repo.findById(newContract.getMaHD()).isPresent()){
            String start = sdf.format(newContract.getNgayHieuLuc());
            String end = sdf.format(newContract.getNgayHetHan());

            if(repo.getContractStartInRange(start,end,newContract.getMaNV())!=null || repo.getContractEndInRange(start,end,newContract.getMaNV())!=null){
                return "Nhân viên mã " + newContract.getMaNV() + " đã có hợp đồng còn hiệu lực trong thời gian từ " + sdf2.format(newContract.getNgayHieuLuc()) + " đến " + sdf2.format(newContract.getNgayHetHan());
            }
            newContract.setTrangThai(true);
            repo.save(newContract);
            return null;
        }
        else{
            return "Mã hợp đồng đã tồn tại";
        }
    }

    public String getUpdateMessage(CreateUpdateContractRequest request) {
        Contract newContract = getNewContract(request);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat sdf2 = new SimpleDateFormat("dd/MM/yyyy");

        if(newContract.getNgayHetHan().compareTo(newContract.getNgayHieuLuc())<=0){
            return "Ngày hết hạn phải sau ngày hiệu lực";
        }

        // update
        if(repo.findById(newContract.getMaHD()).isPresent()){
            String start = sdf.format(newContract.getNgayHieuLuc());
            String end = sdf.format(newContract.getNgayHieuLuc());

            if(repo.getContractStartInRange(start,end, newContract.getMaNV())!=null || repo.getContractEndInRange(start,end, newContract.getMaNV())!=null){
                return "Nhân viên mã " + newContract.getMaNV() + " đang có hợp đồng còn hiệu lực trong thời gian từ " + sdf2.format(newContract.getNgayHieuLuc()) + " đến " + sdf2.format(newContract.getNgayHetHan());
            }
            newContract.setTrangThai(true);
            repo.save(newContract);
            return null;
        }
        return "Mã hợp đồng không tồn tại, không thể cập nhật";
    }

    public Contract getNewContract(CreateUpdateContractRequest request){
        try {
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

            Contract s = new Contract();
            s.setMaHD(request.getMaHD());
            s.setLoaiHopDong(contractCategoryRepository.findById(request.getLoaiHopDong()).get());
            s.setGhiChu(request.getGhiChu());
            s.setMaNV(request.getMaNV());
            if(request.getNgayHieuLuc() != null)
                s.setNgayHieuLuc(sdf.parse(request.getNgayHieuLuc()));
            if(request.getNgayHetHan() != null)
                s.setNgayHetHan(sdf.parse(request.getNgayHetHan()));
            s.setTrangThai(request.getTrangThai());
            return s;
        } catch (Exception e){
            return null;
        }
    }

}
