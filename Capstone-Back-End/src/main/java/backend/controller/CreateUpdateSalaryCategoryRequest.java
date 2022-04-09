package backend.controller;

import backend.entity.SalaryGroupCategory;

import javax.persistence.*;

public class CreateUpdateSalaryCategoryRequest {

    private int id;

    private int idNhomLuong;

    private String maBacLuong;

    private String tenBacLuong;

    private double khoangLuongTu;

    private double khoangLuongDen;

}
