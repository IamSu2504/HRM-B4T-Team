package backend.service;

import backend.entity.DayOff;
import backend.repository.DayOffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DayOffService {

    @Autowired
    private DayOffRepository repository;

    public DayOff viewDayOff(String maNV){
        return repository.getByMaNV(maNV);
    }
}
