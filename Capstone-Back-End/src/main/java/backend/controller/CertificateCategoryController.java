package backend.controller;

import backend.entity.CertificateCategory;
import backend.service.CertificateCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/category/certificate")
public class CertificateCategoryController {

    @Autowired
    private CertificateCategoryService service;

    @GetMapping(value = "")
    public ResponseEntity<?> getAll() {
        try {
            List<CertificateCategory> listCertificateCategory = service.getAll();
            if(listCertificateCategory.isEmpty()){
                return new ResponseEntity<>("List category is empty.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listCertificateCategory, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getById(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            CertificateCategory c = service.getById(id);
            if(c==null){
                return new ResponseEntity<>("Category not found.", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(c, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping(value = "")
    public ResponseEntity<?> create(@RequestBody CertificateCategory certificateCategory) {
        try {
            CertificateCategory t = service.save(certificateCategory);
            if(t==null){
                return new ResponseEntity<>("Certificate already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Add successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> update(@PathVariable("id") String pv, @RequestBody CertificateCategory certificateCategory) {
        try {
            int id = Integer.parseInt(pv);
            certificateCategory.setId(id);
            CertificateCategory t = service.save(certificateCategory);
            if(t==null){
                return new ResponseEntity<>("Certificate already exist.", HttpStatus.EXPECTATION_FAILED);
            }
            return new ResponseEntity<>("Update successfully", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String pv) {
        try {
            int id = Integer.parseInt(pv);
            service.delete(id);
            return new ResponseEntity<>("Delete successful.", HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping(value = "/search/{text}")
    public ResponseEntity<?> getSearched(@PathVariable("text") String text) {
        try {
            List<CertificateCategory> listCertificateCategory;
            if(text.equals("")){
                listCertificateCategory = service.getAll();
            }
            listCertificateCategory = service.getSearched(text);
            if(listCertificateCategory.isEmpty()){
                return new ResponseEntity<>("Search list is empty!", HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(listCertificateCategory, HttpStatus.OK);
        }catch(Exception e){
            return new ResponseEntity<>("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
