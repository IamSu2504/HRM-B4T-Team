-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: hrm_b4t
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `baohiem`
--

DROP TABLE IF EXISTS `baohiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baohiem` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_loai_bao_hiem` int unsigned NOT NULL,
  `ma_so_bh` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tien_bao_hiem` float NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_LoaiBH_idx` (`id_loai_bao_hiem`),
  KEY `FK_MaNV_idx` (`ma_nv`),
  CONSTRAINT `FK_LoaiBH` FOREIGN KEY (`id_loai_bao_hiem`) REFERENCES `phanloai_baohiem` (`id`),
  CONSTRAINT `FK_MaNV` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baohiem`
--

LOCK TABLES `baohiem` WRITE;
/*!40000 ALTER TABLE `baohiem` DISABLE KEYS */;
/*!40000 ALTER TABLE `baohiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chungchitienganh`
--

DROP TABLE IF EXISTS `chungchitienganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chungchitienganh` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_phan_loai_chung_chi` int unsigned NOT NULL,
  `ngay_cap` date NOT NULL,
  `noi_cap` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `diem_so` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk_ChungChiTA_idx` (`id_phan_loai_chung_chi`),
  KEY `FK_MaNV_idx` (`ma_nv`),
  KEY `FK_MaNV_CCTA_idx` (`ma_nv`),
  CONSTRAINT `Fk_ChungChiTA` FOREIGN KEY (`id_phan_loai_chung_chi`) REFERENCES `phanloai_chungchitienganh` (`id`),
  CONSTRAINT `FK_MaNV_CCTA` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chungchitienganh`
--

LOCK TABLES `chungchitienganh` WRITE;
/*!40000 ALTER TABLE `chungchitienganh` DISABLE KEYS */;
/*!40000 ALTER TABLE `chungchitienganh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dangkicalam`
--

DROP TABLE IF EXISTS `dangkicalam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dangkicalam` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_calam` int unsigned NOT NULL,
  `id_phong` int unsigned NOT NULL,
  `ngay` date NOT NULL,
  `xet_duyet` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ly_do_kh_duoc_duyet` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_CaLam_idx` (`id_calam`),
  KEY `FK_PhongHoc_idx` (`id_phong`),
  KEY `FK_MaNV_Ca_idx` (`ma_nv`),
  CONSTRAINT `FK_CaLam` FOREIGN KEY (`id_calam`) REFERENCES `phanloai_calam` (`id`),
  CONSTRAINT `FK_MaNV_Ca` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `FK_PhongHoc` FOREIGN KEY (`id_phong`) REFERENCES `phanloai_phonghoc` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dangkicalam`
--

LOCK TABLES `dangkicalam` WRITE;
/*!40000 ALTER TABLE `dangkicalam` DISABLE KEYS */;
/*!40000 ALTER TABLE `dangkicalam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dangkinghi`
--

DROP TABLE IF EXISTS `dangkinghi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dangkinghi` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_loai_nghi` int unsigned NOT NULL,
  `ly_do` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nguoi_duyet` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `id_ca` int unsigned NOT NULL,
  `ngay` date NOT NULL,
  `status` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MaNV_idx` (`ma_nv`),
  KEY `FK_IdLoaiNghi_idx` (`id_loai_nghi`),
  KEY `FK_NguoiDuyet_idx` (`nguoi_duyet`),
  KEY `FK_IdCa_idx` (`id_ca`),
  CONSTRAINT `FK_IdCa` FOREIGN KEY (`id_ca`) REFERENCES `phanloai_calam` (`id`),
  CONSTRAINT `FK_IdLoaiNghi` FOREIGN KEY (`id_loai_nghi`) REFERENCES `phanloai_ngaynghi` (`id`),
  CONSTRAINT `FK_MaNV_Dkcl` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `FK_NguoiDuyet` FOREIGN KEY (`nguoi_duyet`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dangkinghi`
--

LOCK TABLES `dangkinghi` WRITE;
/*!40000 ALTER TABLE `dangkinghi` DISABLE KEYS */;
/*!40000 ALTER TABLE `dangkinghi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hopdong`
--

DROP TABLE IF EXISTS `hopdong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hopdong` (
  `ma_hop_dong` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_loai_hop_dong` int unsigned NOT NULL,
  `id_chuc_vu` int unsigned NOT NULL,
  `ngay_hieu_luc` date NOT NULL,
  `ngay_het_han` date NOT NULL,
  `ghi_chu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trang_thai` bit(1) NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ma_hop_dong`),
  KEY `FK_LoaiHopDong_idx` (`id_loai_hop_dong`),
  KEY `FK_ChucVu_idx` (`id_chuc_vu`),
  KEY `FK_MaNV_HopDong_idx` (`ma_nv`),
  CONSTRAINT `FK_ChucVu` FOREIGN KEY (`id_chuc_vu`) REFERENCES `phanloai_chucvu` (`id`),
  CONSTRAINT `FK_LoaiHopDong` FOREIGN KEY (`id_loai_hop_dong`) REFERENCES `phanloai_hopdong` (`id`),
  CONSTRAINT `FK_MaNV_HopDong` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdong`
--

LOCK TABLES `hopdong` WRITE;
/*!40000 ALTER TABLE `hopdong` DISABLE KEYS */;
/*!40000 ALTER TABLE `hopdong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khenthuongkiluat`
--

DROP TABLE IF EXISTS `khenthuongkiluat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khenthuongkiluat` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_phan_loai` int unsigned NOT NULL,
  `noi_dung` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ly_do` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `loai` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `bang_chung` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_khenthuongkiluat_idx` (`id_phan_loai`),
  KEY `FK_MaNV_ktkl_idx` (`ma_nv`),
  CONSTRAINT `FK_khenthuongkiluat` FOREIGN KEY (`id_phan_loai`) REFERENCES `phanloai_khenthuongkiluat` (`id`),
  CONSTRAINT `FK_MaNV_ktkl` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khenthuongkiluat`
--

LOCK TABLES `khenthuongkiluat` WRITE;
/*!40000 ALTER TABLE `khenthuongkiluat` DISABLE KEYS */;
/*!40000 ALTER TABLE `khenthuongkiluat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichsuaccount`
--

DROP TABLE IF EXISTS `lichsuaccount`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichsuaccount` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ten_tai_khoan` varchar(100) NOT NULL,
  `thao_tac` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `thoi_gian_thuc_hien` datetime NOT NULL,
  `ten_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichsuaccount`
--

LOCK TABLES `lichsuaccount` WRITE;
/*!40000 ALTER TABLE `lichsuaccount` DISABLE KEYS */;
/*!40000 ALTER TABLE `lichsuaccount` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lienhekhancap`
--

DROP TABLE IF EXISTS `lienhekhancap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lienhekhancap` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ho_ten` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quan_he` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dien_thoai` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `dia_chi` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_MaNV_lhkc_idx` (`ma_nv`),
  CONSTRAINT `FK_MaNV_lhkc` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lienhekhancap`
--

LOCK TABLES `lienhekhancap` WRITE;
/*!40000 ALTER TABLE `lienhekhancap` DISABLE KEYS */;
/*!40000 ALTER TABLE `lienhekhancap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logtime`
--

DROP TABLE IF EXISTS `logtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logtime` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `datetime` datetime NOT NULL,
  `status` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_MaNV_Logtime_idx` (`ma_nv`),
  CONSTRAINT `FK_MaNV_Logtime` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logtime`
--

LOCK TABLES `logtime` WRITE;
/*!40000 ALTER TABLE `logtime` DISABLE KEYS */;
/*!40000 ALTER TABLE `logtime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `luongnhanvien`
--

DROP TABLE IF EXISTS `luongnhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `luongnhanvien` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_hop_dong` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_bac_luong` int unsigned NOT NULL,
  `id_luong_co_ban` float NOT NULL,
  `phu_cap_chuc_vu` float NOT NULL,
  `phu_cap_khac` float NOT NULL,
  `tong_luong` float NOT NULL,
  `ngay_hieu_luc` date NOT NULL,
  `ngay_ket_thuc` date NOT NULL,
  `ghi_chu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trang_thai` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_MaHD_HD_idx` (`ma_hop_dong`),
  KEY `FK_BacLuong_idx` (`id_bac_luong`),
  CONSTRAINT `FK_BacLuong` FOREIGN KEY (`id_bac_luong`) REFERENCES `phanloai_bacluong` (`id`),
  CONSTRAINT `FK_MaHD_HD` FOREIGN KEY (`ma_hop_dong`) REFERENCES `hopdong` (`ma_hop_dong`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `luongnhanvien`
--

LOCK TABLES `luongnhanvien` WRITE;
/*!40000 ALTER TABLE `luongnhanvien` DISABLE KEYS */;
/*!40000 ALTER TABLE `luongnhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoithan`
--

DROP TABLE IF EXISTS `nguoithan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoithan` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_quan_he` int unsigned NOT NULL,
  `ten` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gioi_tinh` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ngay_sinh` date NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_NguoiThan_idx` (`id_quan_he`),
  KEY `FK_MaNV_NguoiThan_idx` (`ma_nv`),
  CONSTRAINT `FK_MaNV_NguoiThan` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `FK_NguoiThan` FOREIGN KEY (`id_quan_he`) REFERENCES `phanloai_nguoithan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoithan`
--

LOCK TABLES `nguoithan` WRITE;
/*!40000 ALTER TABLE `nguoithan` DISABLE KEYS */;
/*!40000 ALTER TABLE `nguoithan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ten_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quoc_tich` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ngay_sinh` date NOT NULL,
  `gioi_tinh` bit(1) NOT NULL,
  `so_dien_thoai` varchar(16) NOT NULL,
  `so_dien_thoai_2` varchar(16) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `facebook` varchar(100) DEFAULT NULL,
  `skype` varchar(100) NOT NULL,
  `cccd` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noi_cap_cccd` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ngay_cap_cccd` date NOT NULL,
  `ngay_het_han_cccd` date NOT NULL,
  `ho_chieu` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `noi_cap_ho_chieu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ngay_cap_ho_chieu` date NOT NULL,
  `ngay_het_han_ho_chieu` date NOT NULL,
  `noi_sinh` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `que_quan` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dia_chi_thuong_tru` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dia_chi_tam_tru` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `chuc_vu_hien_tai` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `atm_ngan_hang` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `so_atm` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trang_thai_lao_dong` bit(1) NOT NULL,
  `ngay_nghi_viec` date DEFAULT NULL,
  `ly_do_nghi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `id_tinh_chat_hop_dong` int unsigned NOT NULL,
  `id_tinh_trang_hon_nhan` int unsigned NOT NULL,
  `id_quoc_tich` int unsigned NOT NULL,
  PRIMARY KEY (`ma_nv`),
  KEY `FK_TinhChatHopDong_idx` (`id_tinh_chat_hop_dong`),
  KEY `FK_TinhTrangHonNhan_idx` (`id_tinh_trang_hon_nhan`),
  KEY `FK_QuocTich_idx` (`id_quoc_tich`),
  CONSTRAINT `FK_QuocTich` FOREIGN KEY (`id_quoc_tich`) REFERENCES `phanloai_quoctich` (`id`),
  CONSTRAINT `FK_TinhChatHopDong` FOREIGN KEY (`id_tinh_chat_hop_dong`) REFERENCES `phanloai_tinhchathopdong` (`id`),
  CONSTRAINT `FK_TinhTrangHonNhan` FOREIGN KEY (`id_tinh_trang_hon_nhan`) REFERENCES `phanloai_tinhtranghonnhan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_bacluong`
--

DROP TABLE IF EXISTS `phanloai_bacluong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_bacluong` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_nhom_luong` int unsigned NOT NULL,
  `ma_bac_luong` varchar(100) NOT NULL,
  `ten_bac_luong` varchar(100) NOT NULL,
  `khoang_luong_tu` float NOT NULL,
  `khoang_luong_den` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_NhomLuong_idx` (`id_nhom_luong`),
  CONSTRAINT `FK_NhomLuong` FOREIGN KEY (`id_nhom_luong`) REFERENCES `phanloai_nhomluong` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_bacluong`
--

LOCK TABLES `phanloai_bacluong` WRITE;
/*!40000 ALTER TABLE `phanloai_bacluong` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_bacluong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_bangcap`
--

DROP TABLE IF EXISTS `phanloai_bangcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_bangcap` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `loai_bang_cap` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_bangcap`
--

LOCK TABLES `phanloai_bangcap` WRITE;
/*!40000 ALTER TABLE `phanloai_bangcap` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_bangcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_baohiem`
--

DROP TABLE IF EXISTS `phanloai_baohiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_baohiem` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_bh` varchar(100) NOT NULL,
  `ten_bh` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_baohiem`
--

LOCK TABLES `phanloai_baohiem` WRITE;
/*!40000 ALTER TABLE `phanloai_baohiem` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_baohiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_calam`
--

DROP TABLE IF EXISTS `phanloai_calam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_calam` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ten_ca` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gio_bat_dau` time NOT NULL,
  `gio_ket_thuc` time NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_calam`
--

LOCK TABLES `phanloai_calam` WRITE;
/*!40000 ALTER TABLE `phanloai_calam` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_calam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_chucvu`
--

DROP TABLE IF EXISTS `phanloai_chucvu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_chucvu` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_chuc_vu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ten_chuc_vu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phu_cap` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_chucvu`
--

LOCK TABLES `phanloai_chucvu` WRITE;
/*!40000 ALTER TABLE `phanloai_chucvu` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_chucvu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_chungchitienganh`
--

DROP TABLE IF EXISTS `phanloai_chungchitienganh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_chungchitienganh` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `loai_chung_chi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_chungchitienganh`
--

LOCK TABLES `phanloai_chungchitienganh` WRITE;
/*!40000 ALTER TABLE `phanloai_chungchitienganh` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_chungchitienganh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_chuyenmon`
--

DROP TABLE IF EXISTS `phanloai_chuyenmon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_chuyenmon` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `chuyen_mon` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_chuyenmon`
--

LOCK TABLES `phanloai_chuyenmon` WRITE;
/*!40000 ALTER TABLE `phanloai_chuyenmon` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_chuyenmon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_hopdong`
--

DROP TABLE IF EXISTS `phanloai_hopdong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_hopdong` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_loai_hop_dong` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ten_loai_hop_dong` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_hopdong`
--

LOCK TABLES `phanloai_hopdong` WRITE;
/*!40000 ALTER TABLE `phanloai_hopdong` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_hopdong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_khenthuongkiluat`
--

DROP TABLE IF EXISTS `phanloai_khenthuongkiluat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_khenthuongkiluat` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `danh_muc` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tieu_de` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_khenthuongkiluat`
--

LOCK TABLES `phanloai_khenthuongkiluat` WRITE;
/*!40000 ALTER TABLE `phanloai_khenthuongkiluat` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_khenthuongkiluat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_ngaynghi`
--

DROP TABLE IF EXISTS `phanloai_ngaynghi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_ngaynghi` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `loai_nghi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_ngaynghi`
--

LOCK TABLES `phanloai_ngaynghi` WRITE;
/*!40000 ALTER TABLE `phanloai_ngaynghi` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_ngaynghi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_ngaynghile`
--

DROP TABLE IF EXISTS `phanloai_ngaynghile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_ngaynghile` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ngay` date NOT NULL,
  `ten_ngay_le` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_ngaynghile`
--

LOCK TABLES `phanloai_ngaynghile` WRITE;
/*!40000 ALTER TABLE `phanloai_ngaynghile` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_ngaynghile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_nguoithan`
--

DROP TABLE IF EXISTS `phanloai_nguoithan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_nguoithan` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `quan_he` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_nguoithan`
--

LOCK TABLES `phanloai_nguoithan` WRITE;
/*!40000 ALTER TABLE `phanloai_nguoithan` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_nguoithan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_nhomluong`
--

DROP TABLE IF EXISTS `phanloai_nhomluong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_nhomluong` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_nhom_luong` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ten_nhom_luong` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_nhomluong`
--

LOCK TABLES `phanloai_nhomluong` WRITE;
/*!40000 ALTER TABLE `phanloai_nhomluong` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_nhomluong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_phongban`
--

DROP TABLE IF EXISTS `phanloai_phongban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_phongban` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_phong_ban` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ten_phong_ban` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_phongban`
--

LOCK TABLES `phanloai_phongban` WRITE;
/*!40000 ALTER TABLE `phanloai_phongban` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_phongban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_phonghoc`
--

DROP TABLE IF EXISTS `phanloai_phonghoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_phonghoc` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ten_phong_hoc` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_phonghoc`
--

LOCK TABLES `phanloai_phonghoc` WRITE;
/*!40000 ALTER TABLE `phanloai_phonghoc` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_phonghoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_quoctich`
--

DROP TABLE IF EXISTS `phanloai_quoctich`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_quoctich` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `quoc_tich` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_quoctich`
--

LOCK TABLES `phanloai_quoctich` WRITE;
/*!40000 ALTER TABLE `phanloai_quoctich` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_quoctich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_thue`
--

DROP TABLE IF EXISTS `phanloai_thue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_thue` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_phan_loai` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ten_loai_thue` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_thue`
--

LOCK TABLES `phanloai_thue` WRITE;
/*!40000 ALTER TABLE `phanloai_thue` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_thue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_tinhchathopdong`
--

DROP TABLE IF EXISTS `phanloai_tinhchathopdong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_tinhchathopdong` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tinh_chat_hop_dong` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_tinhchathopdong`
--

LOCK TABLES `phanloai_tinhchathopdong` WRITE;
/*!40000 ALTER TABLE `phanloai_tinhchathopdong` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_tinhchathopdong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_tinhtranghonnhan`
--

DROP TABLE IF EXISTS `phanloai_tinhtranghonnhan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_tinhtranghonnhan` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tinh_trang` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_tinhtranghonnhan`
--

LOCK TABLES `phanloai_tinhtranghonnhan` WRITE;
/*!40000 ALTER TABLE `phanloai_tinhtranghonnhan` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_tinhtranghonnhan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_trinhdohocvan`
--

DROP TABLE IF EXISTS `phanloai_trinhdohocvan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_trinhdohocvan` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `trinh_do` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_trinhdohocvan`
--

LOCK TABLES `phanloai_trinhdohocvan` WRITE;
/*!40000 ALTER TABLE `phanloai_trinhdohocvan` DISABLE KEYS */;
/*!40000 ALTER TABLE `phanloai_trinhdohocvan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quatrinhcongtac`
--

DROP TABLE IF EXISTS `quatrinhcongtac`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quatrinhcongtac` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_phong_ban` int unsigned NOT NULL,
  `ngay_vao` date NOT NULL,
  `ngay_ra` date NOT NULL,
  `trang_thai` bit(1) NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk_PhongBan_idx` (`id_phong_ban`),
  KEY `FK_MaNV_qtct_idx` (`ma_nv`),
  CONSTRAINT `FK_MaNV_qtct` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `Fk_PhongBan` FOREIGN KEY (`id_phong_ban`) REFERENCES `phanloai_phongban` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quatrinhcongtac`
--

LOCK TABLES `quatrinhcongtac` WRITE;
/*!40000 ALTER TABLE `quatrinhcongtac` DISABLE KEYS */;
/*!40000 ALTER TABLE `quatrinhcongtac` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songhiconlai`
--

DROP TABLE IF EXISTS `songhiconlai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songhiconlai` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `so_buoi_nghi` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_MaNV_SoBuoiNghi_idx` (`ma_nv`),
  CONSTRAINT `FK_MaNV_SoBuoiNghi` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songhiconlai`
--

LOCK TABLES `songhiconlai` WRITE;
/*!40000 ALTER TABLE `songhiconlai` DISABLE KEYS */;
/*!40000 ALTER TABLE `songhiconlai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thue`
--

DROP TABLE IF EXISTS `thue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thue` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_loai_thue` int unsigned NOT NULL,
  `ma_so_thue` varchar(100) NOT NULL,
  `thue_phai_dong` float NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_LoaiThue_idx` (`id_loai_thue`),
  KEY `FK_MaNV_Thue_idx` (`ma_nv`),
  CONSTRAINT `FK_LoaiThue` FOREIGN KEY (`id_loai_thue`) REFERENCES `phanloai_thue` (`id`),
  CONSTRAINT `FK_MaNV_Thue` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thue`
--

LOCK TABLES `thue` WRITE;
/*!40000 ALTER TABLE `thue` DISABLE KEYS */;
/*!40000 ALTER TABLE `thue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tinhtrangsuckhoe`
--

DROP TABLE IF EXISTS `tinhtrangsuckhoe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tinhtrangsuckhoe` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nhom_mau` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `chieu_cao` double NOT NULL,
  `can_nang` double NOT NULL,
  `tinh_trang_suc_khoe` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `benh_nen` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `khuyet_tat` bit(1) NOT NULL,
  `luu_y` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_MaNV_ttsk_idx` (`ma_nv`),
  CONSTRAINT `FK_MaNV_ttsk` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tinhtrangsuckhoe`
--

LOCK TABLES `tinhtrangsuckhoe` WRITE;
/*!40000 ALTER TABLE `tinhtrangsuckhoe` DISABLE KEYS */;
/*!40000 ALTER TABLE `tinhtrangsuckhoe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trinhdovanhoa`
--

DROP TABLE IF EXISTS `trinhdovanhoa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trinhdovanhoa` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_chuyen_mon` int unsigned NOT NULL,
  `id_trinh_do_hoc_van` int unsigned NOT NULL,
  `id_ban_cap` int unsigned NOT NULL,
  `ten_truong` varchar(100) NOT NULL,
  `tu_thoi_gian` year NOT NULL,
  `den_thoi_gian` year NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_TrinhDo_idx` (`id_trinh_do_hoc_van`),
  KEY `FK_ChuyenMon_idx` (`id_chuyen_mon`),
  KEY `FK_BangCap_idx` (`id_ban_cap`),
  KEY `FK_MaNV_tdvh_idx` (`ma_nv`),
  CONSTRAINT `FK_BangCap` FOREIGN KEY (`id_ban_cap`) REFERENCES `phanloai_bangcap` (`id`),
  CONSTRAINT `FK_ChuyenMon` FOREIGN KEY (`id_chuyen_mon`) REFERENCES `phanloai_chuyenmon` (`id`),
  CONSTRAINT `FK_MaNV_tdvh` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `FK_TrinhDo` FOREIGN KEY (`id_trinh_do_hoc_van`) REFERENCES `phanloai_trinhdohocvan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trinhdovanhoa`
--

LOCK TABLES `trinhdovanhoa` WRITE;
/*!40000 ALTER TABLE `trinhdovanhoa` DISABLE KEYS */;
/*!40000 ALTER TABLE `trinhdovanhoa` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-19 22:08:24
