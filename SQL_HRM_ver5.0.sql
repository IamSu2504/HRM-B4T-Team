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
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chungchitienganh`
--

LOCK TABLES `chungchitienganh` WRITE;
/*!40000 ALTER TABLE `chungchitienganh` DISABLE KEYS */;
INSERT INTO `chungchitienganh` VALUES (1,1,'2021-05-01','HN','NV0001',7.5),(2,1,'2021-05-01','HN','NV0001',7),(3,1,'2021-05-01','HN','NV0002',7),(4,1,'2021-05-01','HN','NV0004',8),(5,1,'2021-05-01','HN','NV0005',8.5),(6,1,'2021-05-01','HN','NV0006',7),(7,1,'2021-05-01','HN','NV0007',7.5),(8,1,'2021-05-01','HN','NV0008',7),(9,1,'2021-05-01','HN','NV0009',6.5),(10,1,'2021-05-01','HN','NV0010',7.5),(11,1,'2021-05-01','HN','NV0011',7.5),(12,1,'2021-05-01','HN','NV0012',7),(13,1,'2021-05-01','HN','NV0013',7),(14,1,'2021-05-01','HN','NV0014',7),(15,1,'2021-05-01','HN','NV0015',7),(16,1,'2021-05-01','HN','NV0016',7),(17,1,'2021-05-01','HN','NV0017',7),(18,1,'2021-05-01','HN','NV0018',7),(19,1,'2021-05-01','HN','NV0019',7),(20,1,'2021-05-01','HN','NV0020',7),(21,1,'2021-05-01','HN','NV0021',7),(22,1,'2021-05-01','HN','NV0022',7),(23,1,'2021-05-01','HN','NV0023',7),(24,1,'2021-05-01','HN','NV0024',7),(25,1,'2021-05-01','HN','NV0025',8),(26,1,'2021-05-01','HN','NV0026',8.5),(27,1,'2021-05-01','HN','NV0027',8),(28,1,'2021-05-01','HN','NV0028',6.5),(29,1,'2021-05-01','HN','NV0029',6.5),(30,1,'2021-05-01','HN','NV0030',8),(31,1,'2021-05-01','HN','NV0031',8),(32,1,'2021-05-01','HN','NV0032',8.5),(33,1,'2021-05-01','HN','NV0033',7),(34,1,'2021-05-01','HN','NV0034',7.5),(35,1,'2021-05-01','HN','NV0035',7),(36,1,'2021-05-01','HN','NV0036',6.5),(37,1,'2021-05-01','HN','NV0037',7.5),(38,1,'2021-05-01','HN','NV0038',7.5),(39,1,'2021-05-01','HN','NV0039',7),(40,1,'2021-05-01','HN','NV0040',7),(41,1,'2021-05-01','HN','NV0041',7),(42,1,'2021-05-01','HN','NV0042',7),(43,1,'2021-05-01','HN','NV0043',7),(44,1,'2021-05-01','HN','NV0044',7),(45,1,'2021-05-01','HN','NV0045',7),(46,1,'2021-05-01','HN','NV0046',7),(47,1,'2021-05-01','HN','NV0047',7),(48,1,'2021-05-01','HN','NV0048',7),(49,1,'2021-05-01','HN','NV0049',7),(50,1,'2021-05-01','HN','NV0050',7),(51,2,'2021-05-01','HN','NV0001',79),(52,2,'2021-05-01','HN','NV0003',78),(53,2,'2021-05-01','HN','NV0005',79),(54,2,'2021-05-01','HN','NV0007',90),(55,2,'2021-05-01','HN','NV0009',85),(56,2,'2021-05-01','HN','NV0011',96),(57,2,'2021-05-01','HN','NV0013',84),(58,2,'2021-05-01','HN','NV0015',84),(59,2,'2021-05-01','HN','NV0017',86),(60,2,'2021-05-01','HN','NV0019',95),(61,2,'2021-05-01','HN','NV0021',99),(62,2,'2021-05-01','HN','NV0023',90),(63,2,'2021-05-01','HN','NV0025',96),(64,2,'2021-05-01','HN','NV0027',89),(65,2,'2021-05-01','HN','NV0029',90),(66,2,'2021-05-01','HN','NV0031',91),(67,2,'2021-05-01','HN','NV0033',87),(68,2,'2021-05-01','HN','NV0035',88),(69,2,'2021-05-01','HN','NV0037',88),(70,2,'2021-05-01','HN','NV0039',88),(71,2,'2021-05-01','HN','NV0041',90),(72,2,'2021-05-01','HN','NV0043',90),(73,2,'2021-05-01','HN','NV0045',89),(74,2,'2021-05-01','HN','NV0047',89),(75,2,'2021-05-01','HN','NV0049',91),(76,3,'2021-05-01','HN','NV0002',780),(77,3,'2021-05-01','HN','NV0004',780),(78,3,'2021-05-01','HN','NV0006',770),(79,3,'2021-05-01','HN','NV0008',770),(80,3,'2021-05-01','HN','NV0010',760),(81,3,'2021-05-01','HN','NV0012',760),(82,3,'2021-05-01','HN','NV0014',785),(83,3,'2021-05-01','HN','NV0016',790),(84,3,'2021-05-01','HN','NV0018',880),(85,3,'2021-05-01','HN','NV0020',990),(86,3,'2021-05-01','HN','NV0022',900),(87,3,'2021-05-01','HN','NV0024',880),(88,3,'2021-05-01','HN','NV0026',880),(89,3,'2021-05-01','HN','NV0028',900),(90,3,'2021-05-01','HN','NV0030',900),(91,3,'2021-05-01','HN','NV0032',890),(92,3,'2021-05-01','HN','NV0034',890),(93,3,'2021-05-01','HN','NV0036',910),(94,3,'2021-05-01','HN','NV0038',880),(95,3,'2021-05-01','HN','NV0040',990),(96,3,'2021-05-01','HN','NV0042',900),(97,3,'2021-05-01','HN','NV0044',880),(98,3,'2021-05-01','HN','NV0046',880),(99,3,'2021-05-01','HN','NV0048',900),(100,3,'2021-05-01','HN','NV0050',900),(101,4,'2021-05-01','HN','NV0043',610),(102,4,'2021-05-01','HN','NV0044',620),(103,4,'2021-05-01','HN','NV0045',640),(104,4,'2021-05-01','HN','NV0046',640),(105,4,'2021-05-01','HN','NV0047',670),(106,4,'2021-05-01','HN','NV0048',700),(107,4,'2021-05-01','HN','NV0049',670),(108,4,'2021-05-01','HN','NV0050',620),(109,5,'2021-05-01','HN','NV0047',180),(110,5,'2021-05-01','HN','NV0048',190),(111,5,'2021-05-01','HN','NV0049',200);
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
  KEY `FK_IdCa_idx` (`id_ca`),
  CONSTRAINT `FK_IdCa` FOREIGN KEY (`id_ca`) REFERENCES `phanloai_calam` (`id`),
  CONSTRAINT `FK_IdLoaiNghi` FOREIGN KEY (`id_loai_nghi`) REFERENCES `phanloai_ngaynghi` (`id`),
  CONSTRAINT `FK_MaNV_Dkcl` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
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
  `ngay_hieu_luc` date NOT NULL,
  `ngay_het_han` date DEFAULT NULL,
  `ghi_chu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trang_thai` bit(1) NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`ma_hop_dong`),
  KEY `FK_LoaiHopDong_idx` (`id_loai_hop_dong`),
  KEY `FK_MaNV_HopDong_idx` (`ma_nv`),
  CONSTRAINT `FK_LoaiHopDong` FOREIGN KEY (`id_loai_hop_dong`) REFERENCES `phanloai_hopdong` (`id`),
  CONSTRAINT `FK_MaNV_HopDong` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hopdong`
--

LOCK TABLES `hopdong` WRITE;
/*!40000 ALTER TABLE `hopdong` DISABLE KEYS */;
INSERT INTO `hopdong` VALUES ('HD0001',6,'2019-01-01',NULL,NULL,_binary '','NV0001'),('HD0002',6,'2020-01-01',NULL,NULL,_binary '','NV0002'),('HD0003',6,'2019-01-01',NULL,NULL,_binary '','NV0003'),('HD0004',1,'2021-01-01','2022-01-01','nghỉ việc',_binary '\0','NV0004'),('HD0005',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0005'),('HD0006',1,'2020-01-01','2021-01-01',NULL,_binary '\0','NV0006'),('HD0007',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0006'),('HD0008',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0007'),('HD0009',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0008'),('HD0010',1,'2022-01-01','2023-01-01',NULL,_binary '','NV0009'),('HD0011',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0010'),('HD0012',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0011'),('HD0013',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0012'),('HD0014',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0013'),('HD0015',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0014'),('HD0016',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0015'),('HD0017',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0016'),('HD0018',3,'2022-04-01','2025-04-01',NULL,_binary '','NV0017'),('HD0019',1,'2020-03-01','2021-03-01',NULL,_binary '\0','NV0018'),('HD0020',3,'2021-03-01','2024-03-01',NULL,_binary '','NV0018'),('HD0021',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0019'),('HD0022',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0020'),('HD0023',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0021'),('HD0024',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0022'),('HD0025',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0023'),('HD0026',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0024'),('HD0027',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0025'),('HD0028',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0026'),('HD0029',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0027'),('HD0030',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0028'),('HD0031',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0029'),('HD0032',5,'2020-01-01','2020-03-01','Đổi hợp đồng',_binary '\0','NV0030'),('HD0033',4,'2020-03-01','2020-05-01','Đổi hợp đồng',_binary '\0','NV0030'),('HD0034',3,'2020-05-01','2023-05-01',NULL,_binary '','NV0030'),('HD0035',5,'2021-04-01','2021-06-01','Đổi hợp đồng',_binary '\0','NV0031'),('HD0036',4,'2021-06-01','2021-08-01','Đổi hợp đồng',_binary '\0','NV0031'),('HD0037',3,'2021-08-01','2024-08-01',NULL,_binary '','NV0031'),('HD0038',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0032'),('HD0039',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0033'),('HD0040',1,'2022-04-01','2023-04-01',NULL,_binary '','NV0034'),('HD0041',1,'2022-04-01','2023-04-01',NULL,_binary '','NV0035'),('HD0042',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0036'),('HD0043',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0037'),('HD0044',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0038'),('HD0045',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0039'),('HD0046',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0040'),('HD0047',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0041'),('HD0048',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0042'),('HD0049',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0043'),('HD0050',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0044'),('HD0051',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0045'),('HD0052',3,'2021-01-01','2024-01-01',NULL,_binary '','NV0046'),('HD0053',5,'2022-02-01','2022-04-01','Đổi hợp đồng',_binary '\0','NV0047'),('HD0054',4,'2022-04-01','2022-06-01',NULL,_binary '','NV0047'),('HD0055',3,'2019-01-01','2022-01-01','Nghỉ việc',_binary '\0','NV0048'),('HD0056',1,'2021-12-01','2022-12-01',NULL,_binary '','NV0049'),('HD0057',1,'2021-12-01','2022-12-01',NULL,_binary '','NV0050');
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
  `loai` bit(1) NOT NULL,
  `bang_chung` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_khenthuongkiluat_idx` (`id_phan_loai`),
  KEY `FK_MaNV_ktkl_idx` (`ma_nv`),
  CONSTRAINT `FK_khenthuongkiluat` FOREIGN KEY (`id_phan_loai`) REFERENCES `phanloai_khenthuongkiluat` (`id`),
  CONSTRAINT `FK_MaNV_ktkl` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khenthuongkiluat`
--

LOCK TABLES `khenthuongkiluat` WRITE;
/*!40000 ALTER TABLE `khenthuongkiluat` DISABLE KEYS */;
INSERT INTO `khenthuongkiluat` VALUES (1,1,NULL,NULL,_binary '',NULL,'NV0019'),(2,1,NULL,NULL,_binary '',NULL,'NV0020'),(3,1,NULL,NULL,_binary '',NULL,'NV0021'),(4,2,NULL,NULL,_binary '',NULL,'NV0022'),(5,2,NULL,NULL,_binary '',NULL,'NV0023'),(6,2,NULL,NULL,_binary '',NULL,'NV0024'),(7,3,NULL,NULL,_binary '',NULL,'NV0025'),(8,3,NULL,NULL,_binary '',NULL,'NV0026'),(9,3,NULL,NULL,_binary '',NULL,'NV0027'),(10,4,NULL,NULL,_binary '',NULL,'NV0028'),(11,4,NULL,NULL,_binary '',NULL,'NV0029'),(12,4,NULL,NULL,_binary '',NULL,'NV0030'),(13,5,NULL,NULL,_binary '',NULL,'NV0031'),(14,5,NULL,NULL,_binary '',NULL,'NV0019'),(15,5,NULL,NULL,_binary '',NULL,'NV0020'),(16,6,NULL,NULL,_binary '',NULL,'NV0021'),(17,6,NULL,NULL,_binary '',NULL,'NV0022'),(18,6,NULL,NULL,_binary '',NULL,'NV0023'),(19,7,NULL,NULL,_binary '',NULL,'NV0024'),(20,7,NULL,NULL,_binary '',NULL,'NV0025'),(21,7,NULL,NULL,_binary '',NULL,'NV0026'),(22,8,NULL,NULL,_binary '',NULL,'NV0027'),(23,8,NULL,NULL,_binary '',NULL,'NV0028'),(24,8,NULL,NULL,_binary '',NULL,'NV0029'),(25,9,NULL,NULL,_binary '',NULL,'NV0030'),(26,9,NULL,NULL,_binary '',NULL,'NV0031'),(27,10,NULL,NULL,_binary '',NULL,'NV0020'),(28,10,NULL,NULL,_binary '',NULL,'NV0021'),(29,10,NULL,NULL,_binary '',NULL,'NV0022'),(30,11,NULL,NULL,_binary '',NULL,'NV0023'),(31,11,NULL,NULL,_binary '',NULL,'NV0024'),(32,11,NULL,NULL,_binary '',NULL,'NV0025'),(33,12,NULL,NULL,_binary '',NULL,'NV0026'),(34,12,NULL,NULL,_binary '',NULL,'NV0027'),(35,12,NULL,NULL,_binary '',NULL,'NV0028'),(36,13,NULL,NULL,_binary '',NULL,'NV0029'),(37,13,NULL,NULL,_binary '',NULL,'NV0030'),(38,13,NULL,NULL,_binary '',NULL,'NV0031'),(39,14,NULL,NULL,_binary '',NULL,'NV0019'),(40,14,NULL,NULL,_binary '',NULL,'NV0020'),(41,14,NULL,NULL,_binary '',NULL,'NV0021'),(42,15,NULL,NULL,_binary '',NULL,'NV0022'),(43,15,NULL,NULL,_binary '',NULL,'NV0023'),(44,15,NULL,NULL,_binary '',NULL,'NV0024'),(45,16,NULL,NULL,_binary '',NULL,'NV0025'),(46,16,NULL,NULL,_binary '',NULL,'NV0026'),(47,16,NULL,NULL,_binary '',NULL,'NV0027'),(48,17,NULL,NULL,_binary '',NULL,'NV0028'),(49,17,NULL,NULL,_binary '',NULL,'NV0029'),(50,17,NULL,NULL,_binary '',NULL,'NV0030'),(51,17,NULL,NULL,_binary '',NULL,'NV0031'),(52,18,NULL,NULL,_binary '\0',NULL,'NV0040'),(53,18,NULL,NULL,_binary '\0',NULL,'NV0039'),(54,18,NULL,NULL,_binary '\0',NULL,'NV0041'),(55,19,NULL,NULL,_binary '\0',NULL,'NV0049'),(56,19,NULL,NULL,_binary '\0',NULL,'NV0050');
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
  PRIMARY KEY (`id`),
  KEY `fk_lichsu_manv_idx` (`ma_nv`),
  CONSTRAINT `fk_lichsu_manv` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
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
  `luong_co_ban` float NOT NULL,
  `phu_cap_khac` float DEFAULT NULL,
  `tong_luong` float NOT NULL,
  `ngay_hieu_luc` date NOT NULL,
  `ngay_ket_thuc` date DEFAULT NULL,
  `ghi_chu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trang_thai` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_MaHD_HD_idx` (`ma_hop_dong`),
  KEY `FK_BacLuong_idx` (`id_bac_luong`),
  CONSTRAINT `FK_BacLuong` FOREIGN KEY (`id_bac_luong`) REFERENCES `phanloai_bacluong` (`id`),
  CONSTRAINT `FK_MaHD_HD` FOREIGN KEY (`ma_hop_dong`) REFERENCES `hopdong` (`ma_hop_dong`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `luongnhanvien`
--

LOCK TABLES `luongnhanvien` WRITE;
/*!40000 ALTER TABLE `luongnhanvien` DISABLE KEYS */;
INSERT INTO `luongnhanvien` VALUES (1,'HD0001',18,70000000,10000000,83500000,'2019-01-01',NULL,NULL,_binary ''),(2,'HD0002',17,60000000,10000000,73000000,'2020-01-01',NULL,NULL,_binary ''),(3,'HD0003',17,65000000,10000000,78000000,'2019-01-01',NULL,NULL,_binary ''),(4,'HD0004',10,12000000,5000000,17500000,'2021-01-01','2022-01-01','nghỉ việc',_binary '\0'),(5,'HD0005',4,15000000,5000000,20500000,'2021-01-01','2024-01-01','tăng lương',_binary '\0'),(6,'HD0005',6,19000000,5000000,24500000,'2022-01-01','2024-01-01',NULL,_binary ''),(7,'HD0006',14,35000000,5000000,41000000,'2020-01-01','2021-01-01','tăng lương',_binary '\0'),(8,'HD0007',16,45000000,5000000,51500000,'2021-01-01','2024-01-01','tăng lương',_binary '\0'),(9,'HD0007',16,55000000,5000000,61500000,'2022-01-01','2024-01-01',NULL,_binary ''),(10,'HD0008',15,40000000,5000000,46500000,'2021-01-01','2024-01-01',NULL,_binary ''),(11,'HD0009',15,40000000,5000000,46500000,'2021-01-01','2024-01-01',NULL,_binary ''),(12,'HD0010',15,40000000,5000000,46500000,'2022-01-01','2023-01-01',NULL,_binary ''),(13,'HD0011',15,40000000,5000000,46500000,'2022-04-01','2025-04-01',NULL,_binary ''),(14,'HD0012',15,40000000,5000000,46500000,'2022-04-01','2025-04-01',NULL,_binary ''),(15,'HD0013',15,40000000,5000000,46500000,'2022-04-01','2025-04-01',NULL,_binary ''),(16,'HD0014',15,40000000,5000000,46500000,'2022-04-01','2025-04-01',NULL,_binary ''),(17,'HD0015',15,40000000,5000000,46500000,'2022-04-01','2025-04-01',NULL,_binary ''),(18,'HD0016',15,40000000,5000000,46500000,'2022-04-01','2025-04-01',NULL,_binary ''),(19,'HD0017',15,40000000,5000000,46500000,'2022-04-01','2025-04-01',NULL,_binary ''),(20,'HD0018',13,25000000,5000000,31000000,'2022-04-01','2025-04-01',NULL,_binary ''),(21,'HD0019',13,25000000,5000000,31000000,'2020-03-01','2021-03-01','đổi hợp đồng',_binary '\0'),(22,'HD0020',13,25000000,5000000,31000000,'2021-03-01','2024-03-01',NULL,_binary ''),(23,'HD0021',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(24,'HD0022',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(25,'HD0023',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(26,'HD0024',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(27,'HD0025',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(28,'HD0026',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(29,'HD0027',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(30,'HD0028',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(31,'HD0029',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(32,'HD0030',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(33,'HD0031',13,25000000,5000000,31000000,'2021-01-01','2024-01-01',NULL,_binary ''),(34,'HD0032',10,5000000,NULL,5000000,'2020-01-01','2020-03-01','đổi hợp đồng',_binary '\0'),(35,'HD0033',10,14000000,500000,11700000,'2020-03-01','2020-05-01','đổi hợp đồng',_binary '\0'),(36,'HD0034',10,14000000,500000,14500000,'2020-05-01','2023-05-01','tăng lương',_binary '\0'),(37,'HD0034',12,25000000,500000,25500000,'2021-05-01','2023-05-01',NULL,_binary ''),(38,'HD0035',10,5000000,NULL,5000000,'2021-04-01','2021-06-01','đổi hợp đồng',_binary '\0'),(39,'HD0036',10,14000000,500000,11700000,'2021-06-01','2021-08-01','đổi hợp đồng',_binary '\0'),(40,'HD0037',10,14000000,500000,14500000,'2021-08-01','2024-08-01','tăng lương',_binary '\0'),(41,'HD0037',12,25000000,500000,25500000,'2022-04-01','2024-08-01',NULL,_binary ''),(42,'HD0038',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(43,'HD0039',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(44,'HD0040',10,14000000,500000,14500000,'2022-04-01','2023-04-01',NULL,_binary ''),(45,'HD0041',10,14000000,500000,14500000,'2022-04-01','2023-04-01',NULL,_binary ''),(46,'HD0042',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(47,'HD0043',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(48,'HD0044',10,14000000,500000,14500000,'2021-01-01','2024-01-01',NULL,_binary ''),(49,'HD0045',10,14000000,500000,14500000,'2021-01-01','2024-01-01',NULL,_binary ''),(50,'HD0046',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(51,'HD0047',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(52,'HD0048',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(53,'HD0049',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(54,'HD0050',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(55,'HD0051',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(56,'HD0052',10,14000000,500000,14500000,'2021-01-01','2024-01-01',NULL,_binary ''),(57,'HD0053',10,5000000,NULL,5000000,'2022-02-01','2022-04-01','đổi hợp đồng',_binary '\0'),(58,'HD0054',10,14000000,500000,11700000,'2022-04-01','2022-06-01',NULL,_binary ''),(59,'HD0055',10,14000000,500000,14500000,'2019-01-01','2024-01-01','nghỉ việc',_binary '\0'),(60,'HD0056',10,14000000,500000,14500000,'2021-12-01','2022-12-01',NULL,_binary ''),(61,'HD0057',10,14000000,500000,14500000,'2021-12-01','2022-12-01',NULL,_binary '');
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
  `ngay_sinh` date NOT NULL,
  `gioi_tinh` bit(1) NOT NULL,
  `ma_quoc_tich` int unsigned NOT NULL,
  `so_dien_thoai` varchar(16) NOT NULL,
  `so_dien_thoai_2` varchar(16) DEFAULT NULL,
  `email` varchar(500) NOT NULL,
  `cccd` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `noi_cap_cccd` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngay_cap_cccd` date DEFAULT NULL,
  `ngay_het_han_cccd` date DEFAULT NULL,
  `ho_chieu` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `noi_cap_ho_chieu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngay_cap_ho_chieu` date DEFAULT NULL,
  `ngay_het_han_ho_chieu` date DEFAULT NULL,
  `noi_sinh` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `que_quan` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `dia_chi_thuong_tru` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `dia_chi_tam_tru` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_chuc_vu` int unsigned NOT NULL,
  `atm_ngan_hang` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `so_atm` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trang_thai_lao_dong` bit(1) NOT NULL,
  `ngay_bat_dau_lam` date NOT NULL,
  `ngay_nghi_viec` date DEFAULT NULL,
  `ly_do_nghi` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `id_tinh_chat_hop_dong` int unsigned DEFAULT NULL,
  `id_tinh_trang_hon_nhan` int unsigned NOT NULL,
  `tai_khoan_nv` varchar(500) NOT NULL,
  `mat_khau_nv` varchar(500) NOT NULL,
  `role` varchar(100) NOT NULL,
  PRIMARY KEY (`ma_nv`),
  UNIQUE KEY `so_dien_thoai_UNIQUE` (`so_dien_thoai`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `so_atm_UNIQUE` (`so_atm`),
  UNIQUE KEY `tai_khoan_nv_UNIQUE` (`tai_khoan_nv`),
  UNIQUE KEY `ho_chieu_UNIQUE` (`ho_chieu`),
  UNIQUE KEY `cccd_UNIQUE` (`cccd`),
  KEY `FK_TinhChatHopDong_idx` (`id_tinh_chat_hop_dong`),
  KEY `FK_TinhTrangHonNhan_idx` (`id_tinh_trang_hon_nhan`),
  KEY `fk_chucvu_nv_idx` (`id_chuc_vu`),
  KEY `fk_quoc_tich_nv_idx` (`ma_quoc_tich`),
  CONSTRAINT `fk_chucvu_nv` FOREIGN KEY (`id_chuc_vu`) REFERENCES `phanloai_chucvu` (`id`),
  CONSTRAINT `fk_quoc_tich_nv` FOREIGN KEY (`ma_quoc_tich`) REFERENCES `phanloai_quoctich` (`id`),
  CONSTRAINT `FK_TinhChatHopDong` FOREIGN KEY (`id_tinh_chat_hop_dong`) REFERENCES `phanloai_tinhchathopdong` (`id`),
  CONSTRAINT `FK_TinhTrangHonNhan` FOREIGN KEY (`id_tinh_trang_hon_nhan`) REFERENCES `phanloai_tinhtranghonnhan` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES ('NV0001','Nguyễn Huy Bách','1999-04-25',_binary '',10,'0968250499',NULL,'bachnh@b4t.com.vn','002099004470','Hà Nội','2020-04-25','2021-04-25','0010010000','Hà Nội, Việt Nam','1999-04-25','2021-04-25','Hà Nội','Hà Nội','Nguyễn Chí Thanh, Hà Nội','Nguyễn Chí Thanh, Hà Nội',5,'Techcombank','19027952371017',_binary '','2019-01-01',NULL,NULL,'a',1,1,'bachnh@b4t.com.vn','123456','Emp'),('NV0002','Nguyễn Hữu Tài','1999-06-01',_binary '',10,'0912399342',NULL,'tainh@b4t.com.vn','002096707770','Hà Nội','2019-07-25','2022-04-25','0012229900','Hà Nội, Việt Nam','2020-04-25','2021-04-25','Hà Nội','Hà Nội','Nguyễn Chí Thanh, Hà Nội','Nguyễn Chí Thanh, Hà Nội',4,'Techcombank','19028882371017',_binary '','2020-01-01',NULL,NULL,NULL,1,1,'tainh@b4t.com.vn','123456','Emp'),('NV0003','Nguyễn Anh Tuấn','2000-09-30',_binary '',10,'0973739342',NULL,'tuanna@b4t.com.vn','007099345760','Hà Nội','2020-02-25','2024-04-25',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Trần Duy Hưng, Hà Nội','Đống Đa, Hà Nội',4,'Techcombank','19087952377878',_binary '','2019-01-01',NULL,NULL,NULL,1,1,'tuanna@b4t.com.vn','123456','Emp'),('NV0004','David Villa','1988-06-13',_binary '',8,'0917609642',NULL,'davidvilla@b4t.com.vn',NULL,NULL,NULL,NULL,'S1290223','Barcelona, Tây Ban Nha','2018-06-13','2023-06-13','Tây Ban Nha','Tây Ban Nha','Barcelona, Tây Ban Nha','Hai Bà Trưng, Hà Nội',6,'Techcombank','19037754471017',_binary '\0','2021-01-01','2022-01-01','Về nước',NULL,NULL,2,'davidvilla@b4t.com.vn','123456','Emp'),('NV0005','Alexia Canary','1989-09-13',_binary '\0',9,'0983238885',NULL,'alexiacanary@b4t.com.vn',NULL,NULL,NULL,NULL,'U1222335','Newyork, Mỹ','2019-02-01','2024-02-01','Mỹ','Mỹ','Newyork, Mỹ','Đội Cấn, Hà Nội',6,'Techcombank','19128845471171',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'alexiacanary@b4t.com.vn','123456','Emp'),('NV0006','La Ngọc Tín','1998-10-23',_binary '',10,'0913248566',NULL,'tinln@b4t.com.vn','001119004550','Hà Nội','2017-05-01','2024-05-01','U1234300','Hà Nội','2020-02-22','2025-02-22','Thanh Hóa','Thanh Hóa','Nghi Sơn, Thanh Hóa','Hòa Lạc, Hà Nội',3,'Techcombank','19000000000000',_binary '','2020-01-01',NULL,NULL,NULL,1,2,'tinln@b4t.com.vn','123456','Admin'),('NV0007','Nguyễn Quang Tuấn','1991-09-24',_binary '',10,'0900000001',NULL,'tuannq@b4t.com.vn','001000000000','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Đà Nẵng','Đà Nẵng','Nguyễn Văn Linh, Đà Nẵng','Lê Trọng Tấn, Hà Nội',3,'Techcombank','19000000000001',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'tuannq@b4t.com.vn','123456','Manager'),('NV0008','Nguyễn Thị A','1997-11-23',_binary '\0',10,'0900000002',NULL,'atn@b4t.com.vn','001000000001','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',3,'Techcombank','19000000000002',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'atn@b4t.com.vn','123456','Emp'),('NV0009','Nguyễn Văn B','1997-12-24',_binary '',10,'0900000003',NULL,'bvn@b4t.com.vn','001000000002','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',3,'Techcombank','19000000000003',_binary '','2022-01-01',NULL,NULL,NULL,1,2,'bvn@b4t.com.vn','123456','Emp'),('NV0010','Nguyễn Thị B','2000-01-01',_binary '\0',10,'0900000004',NULL,'btn@b4t.com.vn','001000000003','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',3,'Techcombank','19000000000004',_binary '','2022-04-01',NULL,NULL,NULL,1,1,'btn@b4t.com.vn','123456','Emp'),('NV0011','Nguyễn Văn C','2000-02-12',_binary '',10,'0900000005',NULL,'cvn@b4t.com.vn','001000000004','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',3,'Techcombank','19000000000005',_binary '','2022-04-01',NULL,NULL,NULL,1,1,'cvn@b4t.com.vn','123456','Emp'),('NV0012','Nguyễn Thị C','2001-02-11',_binary '\0',10,'0900000006',NULL,'ctn@b4t.com.vn','001000000005','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',3,'Techcombank','19000000000006',_binary '','2022-04-01',NULL,NULL,NULL,1,1,'ctn@b4t.com.vn','123456','Emp'),('NV0013','Nguyễn Văn D','2001-02-22',_binary '',10,'0900000007',NULL,'dvn@b4t.com.vn','001000000006','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',3,'Techcombank','19000000000007',_binary '','2022-04-01',NULL,NULL,NULL,1,1,'dvn@b4t.com.vn','123456','Emp'),('NV0014','Nguyễn Thị D','1990-03-12',_binary '\0',10,'0900000008',NULL,'dtn@b4t.com.vn','001000000007','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',3,'Techcombank','19000000000008',_binary '','2022-04-01',NULL,NULL,NULL,1,2,'dtn@b4t.com.vn','123456','Emp'),('NV0015','Nguyễn Văn E','1991-04-23',_binary '',10,'0900000009',NULL,'evn@b4t.com.vn','001000000008','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',3,'Techcombank','19000000000009',_binary '','2022-04-01',NULL,NULL,NULL,1,2,'evn@b4t.com.vn','123456','Emp'),('NV0016','Nguyễn Thị E','1991-01-30',_binary '\0',10,'0900000010',NULL,'etn@b4t.com.vn','001000000009','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',2,'Techcombank','19000000000010',_binary '','2022-04-01',NULL,NULL,NULL,1,1,'etn@b4t.com.vn','123456','Emp'),('NV0017','Nguyễn Văn G','1992-02-21',_binary '',10,'0900000011',NULL,'gvn@b4t.com.vn','001000000010','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',2,'Techcombank','19000000000011',_binary '','2022-04-01',NULL,NULL,NULL,1,2,'gvn@b4t.com.vn','123456','Emp'),('NV0018','Nguyễn Thị G','1994-09-03',_binary '\0',10,'0900000012',NULL,'gtn@b4t.com.vn','001000000011','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',2,'Techcombank','19000000000012',_binary '','2020-03-01',NULL,NULL,NULL,1,2,'gtn@b4t.com.vn','123456','Emp'),('NV0019','Nguyễn Văn H','1995-02-28',_binary '',10,'0900000013',NULL,'hvn@b4t.com.vn','001000000012','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',2,'Techcombank','19000000000013',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'hvn@b4t.com.vn','123456','Emp'),('NV0020','Nguyễn Thị H','1996-01-13',_binary '\0',10,'0900000014',NULL,'htn@b4t.com.vn','001000000013','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',2,'Techcombank','19000000000014',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'htn@b4t.com.vn','123456','Emp'),('NV0021','Nguyễn Văn I','1995-03-11',_binary '',10,'0900000015',NULL,'ivn@b4t.com.vn','001000000014','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',2,'Techcombank','19000000000015',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'ivn@b4t.com.vn','123456','Emp'),('NV0022','Nguyễn Thị I','1994-10-03',_binary '\0',10,'0900000016',NULL,'itn@b4t.com.vn','001000000015','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',2,'Techcombank','19000000000016',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'itn@b4t.com.vn','123456','Emp'),('NV0023','Nguyễn Văn K','1993-10-28',_binary '',10,'0900000017',NULL,'kvn@b4t.com.vn','001000000016','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',2,'Techcombank','19000000000017',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'kvn@b4t.com.vn','123456','Emp'),('NV0024','Nguyễn Thị K','1995-11-13',_binary '\0',10,'0900000018',NULL,'ktn@b4t.com.vn','001000000017','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',2,'Techcombank','19000000000018',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'ktn@b4t.com.vn','123456','Emp'),('NV0025','Nguyễn Văn L','1993-09-11',_binary '',10,'0900000019',NULL,'lvn@b4t.com.vn','001000000018','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',2,'Techcombank','19000000000019',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'lvn@b4t.com.vn','123456','Emp'),('NV0026','Nguyễn Thị L','1999-01-02',_binary '\0',10,'0900000020',NULL,'ltn@b4t.com.vn','001000000019','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000020',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'ltn@b4t.com.vn','123456','Emp'),('NV0027','Nguyễn Văn M','2000-01-03',_binary '',10,'0900000021',NULL,'mvn@b4t.com.vn','001000000020','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000021',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'mvn@b4t.com.vn','123456','Emp'),('NV0028','Nguyễn Thị M','2000-02-04',_binary '\0',10,'0900000022',NULL,'mtn@b4t.com.vn','001000000021','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000022',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'mtn@b4t.com.vn','123456','Emp'),('NV0029','Nguyễn Văn N','1998-03-05',_binary '',10,'0900000023',NULL,'nvn@b4t.com.vn','001000000022','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000023',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'nvn@b4t.com.vn','123456','Emp'),('NV0030','Nguyễn Thị N','2000-01-02',_binary '\0',10,'0900000024',NULL,'ntn@b4t.com.vn','001000000023','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000024',_binary '','2020-01-01',NULL,NULL,NULL,1,2,'ntn@b4t.com.vn','123456','Emp'),('NV0031','Nguyễn Văn O','2001-01-03',_binary '',10,'0900000025',NULL,'ovn@b4t.com.vn','001000000024','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000025',_binary '','2021-04-01',NULL,NULL,NULL,1,1,'ovn@b4t.com.vn','123456','Emp'),('NV0032','Nguyễn Thị O','1997-02-04',_binary '\0',10,'0900000026',NULL,'otn@b4t.com.vn','001000000025','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000026',_binary '','2022-04-01',NULL,NULL,NULL,2,1,'otn@b4t.com.vn','123456','Emp'),('NV0033','Nguyễn Văn P','1998-03-05',_binary '',10,'0900000027',NULL,'pvn@b4t.com.vn','001000000026','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000027',_binary '','2022-04-01',NULL,NULL,NULL,2,2,'pvn@b4t.com.vn','123456','Emp'),('NV0034','Nguyễn Thị P','2000-02-02',_binary '\0',10,'0900000028',NULL,'ptn@b4t.com.vn','001000000028','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000028',_binary '','2022-04-01',NULL,NULL,NULL,1,2,'ptn@b4t.com.vn','123456','Emp'),('NV0035','Nguyễn Văn Q','2001-02-03',_binary '',10,'0900000029',NULL,'qvn@b4t.com.vn','001000000029','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000029',_binary '','2022-04-01',NULL,NULL,NULL,1,1,'qvn@b4t.com.vn','123456','Emp'),('NV0036','Nguyễn Thị Q','1996-04-04',_binary '\0',10,'0900000030',NULL,'qtn@b4t.com.vn','001000000030','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000030',_binary '','2022-04-01',NULL,NULL,NULL,2,1,'qtn@b4t.com.vn','123456','Emp'),('NV0037','Trần Văn A','1998-05-05',_binary '',10,'0900000031',NULL,'avt@b4t.com.vn','001000000031','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000031',_binary '','2022-04-01',NULL,NULL,NULL,2,2,'avt@b4t.com.vn','123456','Emp'),('NV0038','Trần Thị A','2001-12-02',_binary '\0',10,'0900000032',NULL,'att@b4t.com.vn','001000000032','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000032',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'att@b4t.com.vn','123456','Emp'),('NV0039','Trần Văn B','1996-04-30',_binary '',10,'0900000033',NULL,'bvt@b4t.com.vn','001000000033','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000033',_binary '','2021-01-01',NULL,NULL,NULL,1,1,'bvt@b4t.com.vn','123456','Emp'),('NV0040','Trần Thị B','1996-11-14',_binary '\0',10,'0900000034',NULL,'btt@b4t.com.vn','001000000034','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000034',_binary '\0','2022-04-01',NULL,NULL,NULL,2,1,'btt@b4t.com.vn','123456','Emp'),('NV0041','Trần Văn C','1998-09-06',_binary '',10,'0900000035',NULL,'cvt@b4t.com.vn','001000000035','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000035',_binary '\0','2022-04-01',NULL,NULL,NULL,2,2,'cvt@b4t.com.vn','123456','Emp'),('NV0042','Trần Thị C','2001-11-02',_binary '\0',10,'0900000036',NULL,'ctt@b4t.com.vn','001000000036','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000036',_binary '','2022-04-01',NULL,NULL,NULL,2,2,'ctt@b4t.com.vn','123456','Emp'),('NV0043','Trần Văn D','2002-10-30',_binary '',10,'0900000037',NULL,'dvt@b4t.com.vn','001000000037','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000037',_binary '','2022-04-01',NULL,NULL,NULL,2,1,'dvt@b4t.com.vn','123456','Emp'),('NV0044','Trần Thị D','2002-12-14',_binary '\0',10,'0900000038',NULL,'dtt@b4t.com.vn','001000000038','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội',1,'Techcombank','19000000000038',_binary '\0','2022-04-01',NULL,NULL,NULL,2,1,'dtt@b4t.com.vn','123456','Emp'),('NV0045','Trần Văn E','2003-02-09',_binary '',10,'0900000039',NULL,'evt@b4t.com.vn','001000000039','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội',1,'Techcombank','19000000000039',_binary '\0','2022-04-01',NULL,NULL,NULL,2,2,'evt@b4t.com.vn','123456','Emp'),('NV0046','Jessica A','1995-12-21',_binary '\0',5,'0900000040',NULL,'ajess@b4t.com.vn',NULL,NULL,NULL,NULL,'M1000001','Malaysia','2017-05-01','2024-05-01','Malaysia','Malaysia',NULL,'Hà Đông, Hà Nội',6,'Techcombank','19000000000040',_binary '','2021-01-01',NULL,NULL,NULL,1,2,'ajess@b4t.com.vn','123456','Emp'),('NV0047','John A','1996-10-11',_binary '',6,'0900000041',NULL,'ajohn@b4t.com.vn',NULL,NULL,NULL,NULL,'P1000002','Philipines','2017-05-01','2024-05-01','Philipines','Philipines',NULL,'Lê Trọng Tấn, Hà Nội',6,'Techcombank','19000000000041',_binary '','2022-02-01',NULL,NULL,NULL,2,1,'ajohn@b4t.com.vn','123456','Emp'),('NV0048','Jessica B','1994-10-14',_binary '\0',7,'0900000042',NULL,'bjess@b4t.com.vn',NULL,NULL,NULL,NULL,'S1000003','Singapore','2017-05-01','2024-05-01','Singapore','Singapore',NULL,'Hà Đông, Hà Nội',6,'Techcombank','19000000000042',_binary '\0','2019-01-01','2020-02-21','thay đổi dự định',NULL,NULL,1,'bjess@b4t.com.vn','123456','Emp'),('NV0049','John B','1997-05-26',_binary '',1,'0900000043',NULL,'bjohn@b4t.com.vn',NULL,NULL,NULL,NULL,'A1000004','Australia','2017-05-01','2024-05-01','Australia','Australia',NULL,'Lê Trọng Tấn, Hà Nội',6,'Techcombank','19000000000043',_binary '','2021-12-01',NULL,NULL,NULL,1,2,'bjohn@b4t.com.vn','123456','Emp'),('NV0050','Jessica C','1993-07-28',_binary '\0',2,'0900000044',NULL,'cjess@b4t.com.vn',NULL,NULL,NULL,NULL,'C1000005','Canada','2017-05-01','2024-05-01','Canada','Canada',NULL,'Lê Trọng Tấn, Hà Nội',6,'Techcombank','19000000000044',_binary '','2021-12-01',NULL,NULL,NULL,1,2,'cjess@b4t.com.vn','123456','Emp');
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
  UNIQUE KEY `ma_bac_luong_UNIQUE` (`ma_bac_luong`),
  KEY `FK_NhomLuong_idx` (`id_nhom_luong`),
  CONSTRAINT `FK_NhomLuong` FOREIGN KEY (`id_nhom_luong`) REFERENCES `phanloai_nhomluong` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_bacluong`
--

LOCK TABLES `phanloai_bacluong` WRITE;
/*!40000 ALTER TABLE `phanloai_bacluong` DISABLE KEYS */;
INSERT INTO `phanloai_bacluong` VALUES (1,1,'GVK1','Lương giáo viên khá loại 1',7000000,10000000),(2,1,'GVK2','Lương giáo viên khá loại 2',10000000,12000000),(3,1,'GVK3','Lương giáo viên khá loại 3',12000000,14000000),(4,2,'GVT1','Lương giáo viên tốt loại 1',14000000,16000000),(5,2,'GVT2','Lương giáo viên tốt loại 2',16000000,18000000),(6,2,'GVT3','Lương giáo viên tốt loại 3',18000000,20000000),(7,3,'GVG1','Lương giáo viên giỏi loại 1',20000000,22000000),(8,3,'GVG2','Lương giáo viên giỏi loại 2',22000000,24000000),(9,3,'GVG3','Lương giáo viên giỏi loại 3',24000000,30000000),(10,4,'NVL1','Lương nhân viên loại 1',10000000,15000000),(11,4,'NVL2','Lương nhân viên loại 2',15000000,25000000),(12,4,'NVL3','Lương nhân viên loại 3',25000000,35000000),(13,5,'NVP1','Lương phó phòng loại 1',20000000,30000000),(14,5,'NVP2','Lương phó phòng loại 2',30000000,40000000),(15,6,'NVT1','Lương trưởng phòng loại 1',30000000,40000000),(16,6,'NVT2','Lương trưởng phòng loại 2',40000000,55000000),(17,7,'PGD','Lương PGD',55000000,65000000),(18,7,'GD','Lương GD',65000000,75000000);
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_bangcap`
--

LOCK TABLES `phanloai_bangcap` WRITE;
/*!40000 ALTER TABLE `phanloai_bangcap` DISABLE KEYS */;
INSERT INTO `phanloai_bangcap` VALUES (1,'Trung bình'),(2,'Trung bình khá'),(3,'Khá'),(4,'Giỏi');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_bh_UNIQUE` (`ma_bh`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_baohiem`
--

LOCK TABLES `phanloai_baohiem` WRITE;
/*!40000 ALTER TABLE `phanloai_baohiem` DISABLE KEYS */;
INSERT INTO `phanloai_baohiem` VALUES (1,'BH1','Bảo hiểm xã hội'),(2,'BH2','Bảo hiểm y tế'),(3,'BH3','Bảo hiểm thất nghiệp');
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_calam`
--

LOCK TABLES `phanloai_calam` WRITE;
/*!40000 ALTER TABLE `phanloai_calam` DISABLE KEYS */;
INSERT INTO `phanloai_calam` VALUES (1,'Ca01','09:00:00','12:00:00'),(2,'Ca02','13:30:00','16:30:00'),(3,'Ca03','17:00:00','20:00:00'),(4,'Ca04','20:30:00','23:30:00'),(5,'Ca05','08:30:00','11:30:00'),(6,'Ca06','13:00:00','16:00:00'),(7,'Ca07','16:30:00','19:30:00'),(8,'Ca08','20:00:00','23:00:00'),(9,'Ca09','08:30:00','12:00:00'),(10,'Ca10','13:00:00','18:15:00'),(11,'Ca11','18:15:00','23:30:00');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_chuc_vu_UNIQUE` (`ma_chuc_vu`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_chucvu`
--

LOCK TABLES `phanloai_chucvu` WRITE;
/*!40000 ALTER TABLE `phanloai_chucvu` DISABLE KEYS */;
INSERT INTO `phanloai_chucvu` VALUES (1,'CV01','Nhân viên',500000),(2,'CV02','Phó phòng',1000000),(3,'CV03','Trưởng phòng',1500000),(4,'CV04','Phó giám đốc',3000000),(5,'CV05','Giám đốc',3500000),(6,'CV06','Giáo viên',500000);
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
  `ma_chung_chi` varchar(100) NOT NULL,
  `loai_chung_chi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_chung_chi_UNIQUE` (`ma_chung_chi`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_chungchitienganh`
--

LOCK TABLES `phanloai_chungchitienganh` WRITE;
/*!40000 ALTER TABLE `phanloai_chungchitienganh` DISABLE KEYS */;
INSERT INTO `phanloai_chungchitienganh` VALUES (1,'CC01','Ielts'),(2,'CC02','Toefl'),(3,'CC03','Toeic'),(4,'CC04','SAT'),(5,'CC05','ESOL');
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
  `ma_chuyen_mon` varchar(100) NOT NULL,
  `chuyen_mon` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_chuyen_mon_UNIQUE` (`ma_chuyen_mon`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_chuyenmon`
--

LOCK TABLES `phanloai_chuyenmon` WRITE;
/*!40000 ALTER TABLE `phanloai_chuyenmon` DISABLE KEYS */;
INSERT INTO `phanloai_chuyenmon` VALUES (1,'CM01','Tài chính – ngân hàng'),(2,'CM02','Hành chính văn phòng'),(3,'CM03','Quản trị kinh doanh'),(4,'CM04','Kế toán – kiểm toán'),(5,'CM05','Kinh tế'),(6,'CM06','Công nghệ thông tin'),(7,'CM07','Sư phạm ngoại ngữ'),(8,'CM08','Khác');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_loai_hop_dong_UNIQUE` (`ma_loai_hop_dong`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_hopdong`
--

LOCK TABLES `phanloai_hopdong` WRITE;
/*!40000 ALTER TABLE `phanloai_hopdong` DISABLE KEYS */;
INSERT INTO `phanloai_hopdong` VALUES (1,'LHD01','Hợp đồng 1 năm'),(2,'LHD02','Hợp đồng 2 năm'),(3,'LHD03','Hợp đồng 3 năm'),(4,'LHD04','Thử việc 2 tháng'),(5,'LHD05','Thực tập'),(6,'LHD06','Hợp đồng không xác định thời hạn');
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_khenthuongkiluat`
--

LOCK TABLES `phanloai_khenthuongkiluat` WRITE;
/*!40000 ALTER TABLE `phanloai_khenthuongkiluat` DISABLE KEYS */;
INSERT INTO `phanloai_khenthuongkiluat` VALUES (1,'Thưởng nhân viên xuất sắc tháng 1/2021','Khen thưởng'),(2,'Thưởng nhân viên xuất sắc tháng 2/2021','Khen thưởng'),(3,'Thưởng nhân viên xuất sắc tháng 3/2021','Khen thưởng'),(4,'Thưởng nhân viên xuất sắc tháng 4/2021','Khen thưởng'),(5,'Thưởng nhân viên xuất sắc tháng 5/2021','Khen thưởng'),(6,'Thưởng nhân viên xuất sắc tháng 6/2021','Khen thưởng'),(7,'Thưởng nhân viên xuất sắc tháng 7/2021','Khen thưởng'),(8,'Thưởng nhân viên xuất sắc tháng 8/2021','Khen thưởng'),(9,'Thưởng nhân viên xuất sắc tháng 9/2021','Khen thưởng'),(10,'Thưởng nhân viên xuất sắc tháng 10/2021','Khen thưởng'),(11,'Thưởng nhân viên xuất sắc tháng 11/2021','Khen thưởng'),(12,'Thưởng nhân viên xuất sắc tháng 12/2021','Khen thưởng'),(13,'Thưởng nhân viên xuất sắc quý 1/2021','Khen thưởng'),(14,'Thưởng nhân viên xuất sắc quý 2/2021','Khen thưởng'),(15,'Thưởng nhân viên xuất sắc quý 3/2021','Khen thưởng'),(16,'Thưởng nhân viên xuất sắc quý 4/2021','Khen thưởng'),(17,'Thưởng nhân viên xuất sắc năm 2021','Khen thưởng'),(18,'Kỷ luật nhân viên đi làm muộn','Kỷ luật'),(19,'Kỷ luật nhân viên bị đánh giá kém','Kỷ luật'),(20,'Kỷ luật khác','Kỷ luật');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_ngaynghi`
--

LOCK TABLES `phanloai_ngaynghi` WRITE;
/*!40000 ALTER TABLE `phanloai_ngaynghi` DISABLE KEYS */;
INSERT INTO `phanloai_ngaynghi` VALUES (1,'Nghỉ cả ngày'),(2,'Nghỉ ca'),(3,'Nghỉ nửa ngày'),(4,'Nghỉ đẻ'),(5,'Nghỉ không lương');
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_ngaynghile`
--

LOCK TABLES `phanloai_ngaynghile` WRITE;
/*!40000 ALTER TABLE `phanloai_ngaynghile` DISABLE KEYS */;
INSERT INTO `phanloai_ngaynghile` VALUES (1,'2022-01-29','Tết'),(2,'2022-01-30','Tết'),(3,'2022-01-31','Tết'),(4,'2022-02-01','Tết'),(5,'2022-02-02','Tết'),(6,'2022-02-03','Tết'),(7,'2022-02-04','Tết'),(8,'2022-02-05','Tết'),(9,'2022-02-06','Tết'),(10,'2022-04-10','Giỗ tổ'),(11,'2022-04-30','Giải phóng Miền Nam'),(12,'2022-05-01','Quốc tế lao động'),(13,'2022-09-02','Quốc khánh');
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_nguoithan`
--

LOCK TABLES `phanloai_nguoithan` WRITE;
/*!40000 ALTER TABLE `phanloai_nguoithan` DISABLE KEYS */;
INSERT INTO `phanloai_nguoithan` VALUES (1,'Bố'),(2,'Mẹ'),(3,'Anh'),(4,'Chị'),(5,'Em'),(6,'Vợ'),(7,'Con');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_nhom_luong_UNIQUE` (`ma_nhom_luong`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_nhomluong`
--

LOCK TABLES `phanloai_nhomluong` WRITE;
/*!40000 ALTER TABLE `phanloai_nhomluong` DISABLE KEYS */;
INSERT INTO `phanloai_nhomluong` VALUES (1,'GV1','Lương giáo viên khá'),(2,'GV2','Lương giáo viên tốt'),(3,'GV3','Lương giáo viên giỏi'),(4,'NV1','Lương nhân viên'),(5,'NV2','Lương phó phòng'),(6,'NV3','Lương trưởng phòng'),(7,'QL','Lương quản lý');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_phong_ban_UNIQUE` (`ma_phong_ban`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_phongban`
--

LOCK TABLES `phanloai_phongban` WRITE;
/*!40000 ALTER TABLE `phanloai_phongban` DISABLE KEYS */;
INSERT INTO `phanloai_phongban` VALUES (1,'PB01','Phòng hành chính-nhân sự'),(2,'PB02','Phòng pháp chế'),(3,'PB03','Phòng tài chính kế toán'),(4,'PB04','Phòng kỹ thuật'),(5,'PB05','Phòng kế hoạch'),(6,'PB06','Ban quản lý ca làm'),(7,'PB07','Phòng kinh doanh bán hàng'),(8,'PB08','Phòng giáo viên Toefl'),(9,'PB09','Phòng giáo viên Toeic'),(10,'PB10','Phòng giáo viên SAT'),(11,'PB11','Phòng giáo viên ESOL'),(12,'PB12','Phòng giáo viên Ielts'),(13,'PB13','Ban điều hành');
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
  `ma_phong_hoc` varchar(100) NOT NULL,
  `ten_phong_hoc` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_phong_hoc_UNIQUE` (`ma_phong_hoc`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_phonghoc`
--

LOCK TABLES `phanloai_phonghoc` WRITE;
/*!40000 ALTER TABLE `phanloai_phonghoc` DISABLE KEYS */;
INSERT INTO `phanloai_phonghoc` VALUES (1,'PH1','Phòng học 1'),(2,'PH2','Phòng học 2'),(3,'PH3','Phòng học 3'),(4,'PH4','Phòng học 4'),(5,'PH5','Phòng học 5'),(6,'PH6','Phòng học 6'),(7,'PH7','Phòng học 7'),(8,'PH8','Phòng học 8'),(9,'PH9','Phòng học 9'),(10,'PH10','Phòng học 10');
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
  `quoc_tich` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_quoctich`
--

LOCK TABLES `phanloai_quoctich` WRITE;
/*!40000 ALTER TABLE `phanloai_quoctich` DISABLE KEYS */;
INSERT INTO `phanloai_quoctich` VALUES (1,'Australia'),(2,'Canada'),(3,'Anh'),(4,'Pháp'),(5,'Malaysia'),(6,'Philippines'),(7,'Singapore'),(8,'Tây Ban Nha'),(9,'Mỹ'),(10,'Việt Nam');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_phan_loai_UNIQUE` (`ma_phan_loai`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_thue`
--

LOCK TABLES `phanloai_thue` WRITE;
/*!40000 ALTER TABLE `phanloai_thue` DISABLE KEYS */;
INSERT INTO `phanloai_thue` VALUES (1,'LT01','Thuế thu nhập cá nhân');
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_tinhchathopdong`
--

LOCK TABLES `phanloai_tinhchathopdong` WRITE;
/*!40000 ALTER TABLE `phanloai_tinhchathopdong` DISABLE KEYS */;
INSERT INTO `phanloai_tinhchathopdong` VALUES (1,'Chính thức'),(2,'Thử việc'),(3,'Thực tập');
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_tinhtranghonnhan`
--

LOCK TABLES `phanloai_tinhtranghonnhan` WRITE;
/*!40000 ALTER TABLE `phanloai_tinhtranghonnhan` DISABLE KEYS */;
INSERT INTO `phanloai_tinhtranghonnhan` VALUES (1,'Độc thân'),(2,'Đã kết hôn');
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_trinhdohocvan`
--

LOCK TABLES `phanloai_trinhdohocvan` WRITE;
/*!40000 ALTER TABLE `phanloai_trinhdohocvan` DISABLE KEYS */;
INSERT INTO `phanloai_trinhdohocvan` VALUES (1,'Tốt nghiệp cấp 3'),(2,'Tốt nghiệp đại học'),(3,'Tốt nghiệp cao đẳng'),(4,'Thạc sĩ'),(5,'Tiến sĩ');
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
  `ngay_ra` date DEFAULT NULL,
  `trang_thai` bit(1) NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk_PhongBan_idx` (`id_phong_ban`),
  KEY `FK_MaNV_qtct_idx` (`ma_nv`),
  CONSTRAINT `FK_MaNV_qtct` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `Fk_PhongBan` FOREIGN KEY (`id_phong_ban`) REFERENCES `phanloai_phongban` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quatrinhcongtac`
--

LOCK TABLES `quatrinhcongtac` WRITE;
/*!40000 ALTER TABLE `quatrinhcongtac` DISABLE KEYS */;
INSERT INTO `quatrinhcongtac` VALUES (1,1,'2020-01-01',NULL,_binary '','NV0006'),(2,2,'2021-01-01',NULL,_binary '','NV0007'),(3,3,'2021-01-01',NULL,_binary '','NV0008'),(4,4,'2022-01-01',NULL,_binary '','NV0009'),(5,5,'2022-04-01',NULL,_binary '','NV0010'),(6,6,'2022-04-01',NULL,_binary '','NV0011'),(7,7,'2022-04-01',NULL,_binary '','NV0012'),(8,8,'2022-04-01',NULL,_binary '','NV0013'),(9,9,'2022-04-01',NULL,_binary '','NV0014'),(10,10,'2022-04-01',NULL,_binary '','NV0015'),(11,1,'2022-04-01',NULL,_binary '','NV0016'),(12,2,'2022-04-01',NULL,_binary '','NV0017'),(13,3,'2020-03-01',NULL,_binary '','NV0018'),(14,4,'2021-01-01',NULL,_binary '','NV0019'),(15,5,'2021-01-01',NULL,_binary '','NV0020'),(16,6,'2021-01-01',NULL,_binary '','NV0021'),(17,7,'2021-01-01',NULL,_binary '','NV0022'),(18,8,'2021-01-01',NULL,_binary '','NV0023'),(19,9,'2021-01-01',NULL,_binary '','NV0024'),(20,10,'2021-01-01',NULL,_binary '','NV0025'),(21,1,'2021-01-01',NULL,_binary '','NV0026'),(22,2,'2021-01-01',NULL,_binary '','NV0027'),(23,3,'2021-01-01',NULL,_binary '','NV0028'),(24,4,'2021-01-01',NULL,_binary '','NV0029'),(25,5,'2020-01-01',NULL,_binary '','NV0030'),(26,6,'2021-04-01',NULL,_binary '','NV0031'),(27,7,'2022-04-01',NULL,_binary '','NV0032'),(28,1,'2022-04-01',NULL,_binary '','NV0033'),(29,2,'2022-04-01',NULL,_binary '','NV0034'),(30,3,'2022-04-01',NULL,_binary '','NV0035'),(31,8,'2021-12-01',NULL,_binary '','NV0050'),(32,4,'2022-04-01',NULL,_binary '','NV0036'),(33,5,'2022-04-01',NULL,_binary '','NV0037'),(34,6,'2021-01-01',NULL,_binary '','NV0038'),(35,7,'2021-01-01',NULL,_binary '','NV0039'),(36,1,'2022-04-01',NULL,_binary '','NV0040'),(37,2,'2022-04-01',NULL,_binary '','NV0041'),(38,3,'2022-04-01',NULL,_binary '','NV0042'),(39,4,'2022-04-01',NULL,_binary '','NV0043'),(40,5,'2022-04-01',NULL,_binary '','NV0044'),(41,6,'2022-04-01',NULL,_binary '','NV0045'),(42,7,'2021-01-01',NULL,_binary '','NV0046'),(43,9,'2022-02-01',NULL,_binary '','NV0047'),(44,8,'2019-01-01',NULL,_binary '\0','NV0048'),(45,10,'2021-12-01',NULL,_binary '','NV0049'),(46,11,'2021-01-01',NULL,_binary '\0','NV0004'),(47,12,'2021-01-01',NULL,_binary '','NV0005'),(48,13,'2019-01-01',NULL,_binary '','NV0001'),(49,13,'2020-01-01',NULL,_binary '','NV0002'),(50,13,'2019-01-01',NULL,_binary '','NV0003');
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
  `id_trinh_do_hoc_van` int unsigned DEFAULT NULL,
  `id_bang_cap` int unsigned DEFAULT NULL,
  `ten_truong` varchar(100) DEFAULT NULL,
  `tu_thoi_gian` year DEFAULT NULL,
  `den_thoi_gian` year DEFAULT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_TrinhDo_idx` (`id_trinh_do_hoc_van`),
  KEY `FK_ChuyenMon_idx` (`id_chuyen_mon`),
  KEY `FK_BangCap_idx` (`id_bang_cap`),
  KEY `FK_MaNV_tdvh_idx` (`ma_nv`),
  CONSTRAINT `FK_BangCap` FOREIGN KEY (`id_bang_cap`) REFERENCES `phanloai_bangcap` (`id`),
  CONSTRAINT `FK_ChuyenMon` FOREIGN KEY (`id_chuyen_mon`) REFERENCES `phanloai_chuyenmon` (`id`),
  CONSTRAINT `FK_MaNV_tdvh` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `FK_TrinhDo` FOREIGN KEY (`id_trinh_do_hoc_van`) REFERENCES `phanloai_trinhdohocvan` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trinhdovanhoa`
--

LOCK TABLES `trinhdovanhoa` WRITE;
/*!40000 ALTER TABLE `trinhdovanhoa` DISABLE KEYS */;
INSERT INTO `trinhdovanhoa` VALUES (1,2,2,3,'FTU',2015,2019,'NV0006'),(2,2,2,3,'FTU',2015,2019,'NV0011'),(3,2,2,3,'FTU',2015,2019,'NV0016'),(4,2,2,3,'FTU',2015,2019,'NV0026'),(5,2,2,3,'FTU',2015,2019,'NV0033'),(6,2,2,3,'FTU',2015,2019,'NV0040'),(7,1,2,3,'FTU',2015,2019,'NV0007'),(8,1,2,3,'FTU',2015,2019,'NV0017'),(9,1,2,3,'FTU',2015,2019,'NV0027'),(10,1,2,3,'FTU',2015,2019,'NV0034'),(11,1,2,3,'FTU',2015,2019,'NV0041'),(12,1,2,3,'FTU',2015,2019,'NV0008'),(13,1,2,3,'FTU',2015,2019,'NV0018'),(14,1,2,3,'FTU',2015,2019,'NV0028'),(15,1,2,3,'FTU',2015,2019,'NV0035'),(16,1,2,3,'FTU',2015,2019,'NV0042'),(17,6,2,3,'FPT',2015,2019,'NV0009'),(18,6,2,3,'FPT',2015,2019,'NV0019'),(19,6,2,3,'FPT',2015,2019,'NV0029'),(20,6,2,3,'FPT',2015,2019,'NV0036'),(21,6,2,3,'FPT',2015,2019,'NV0043'),(22,3,2,3,'FPT',2015,2019,'NV0010'),(23,3,2,3,'FPT',2015,2019,'NV0020'),(24,3,2,3,'FPT',2015,2019,'NV0037'),(25,3,2,3,'FPT',2015,2019,'NV0044'),(26,7,2,3,'FTU',2015,2019,'NV0025'),(27,2,2,3,'FTU',2015,2019,'NV0021'),(28,2,2,3,'FTU',2015,2019,'NV0031'),(29,2,2,3,'FTU',2015,2019,'NV0038'),(30,2,2,3,'FTU',2015,2019,'NV0045'),(31,6,2,3,'FPU',2015,2019,'NV0030'),(32,4,2,3,'FTU',2015,2019,'NV0012'),(33,5,2,3,'FTU',2015,2019,'NV0022'),(34,4,2,3,'FTU',2015,2019,'NV0032'),(35,5,2,3,'FTU',2015,2019,'NV0039'),(36,4,NULL,NULL,NULL,NULL,NULL,'NV0046'),(37,7,NULL,NULL,NULL,NULL,NULL,'NV0004'),(38,7,NULL,NULL,NULL,NULL,NULL,'NV0005'),(39,7,2,3,'FTU',2015,2019,'NV0013'),(40,7,2,3,'FTU',2015,2019,'NV0023'),(41,7,NULL,NULL,NULL,NULL,NULL,'NV0047'),(42,7,NULL,NULL,NULL,NULL,NULL,'NV0048'),(43,7,NULL,NULL,NULL,NULL,NULL,'NV0049'),(44,7,NULL,NULL,NULL,NULL,NULL,'NV0050'),(45,7,2,3,'FPT',2015,2019,'NV0014'),(46,7,2,3,'FPT',2015,2019,'NV0024'),(47,7,2,3,'FPT',2015,2019,'NV0015'),(48,6,2,3,'FPT',2015,2019,'NV0001'),(49,3,2,3,'FPT',2015,2019,'NV0002'),(50,4,2,3,'FPT',2015,2019,'NV0003');
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

-- Dump completed on 2022-04-07 16:23:17
