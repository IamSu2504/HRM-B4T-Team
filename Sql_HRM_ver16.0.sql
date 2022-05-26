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
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `tai_khoan` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `mat_khau` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role_id` int unsigned NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tai_khoan_UNIQUE` (`tai_khoan`),
  UNIQUE KEY `ma_nv_UNIQUE` (`ma_nv`),
  KEY `fk_role_id_idx` (`role_id`),
  KEY `fk_ma_nv_taikhoan_idx` (`ma_nv`),
  CONSTRAINT `fk_ma_nv_taikhoan` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `fk_role_id_taikhoan` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'bachnh@b4t.com.vn','123456',2,'NV1'),(2,'tainh@b4t.com.vn','123456',2,'NV2'),(3,'tuanna@b4t.com.vn','123456',2,'NV3'),(4,'davidvilla@b4t.com.vn','123456',2,'NV4'),(5,'alexiacanary@b4t.com.vn','123456',2,'NV5'),(6,'tinln@b4t.com.vn','123456',1,'NV6'),(7,'tuannq@b4t.com.vn','123456',3,'NV7'),(8,'atn@b4t.com.vn','123456',2,'NV8'),(9,'bvn@b4t.com.vn','123456',2,'NV9'),(10,'btn@b4t.com.vn','123456',2,'NV10'),(11,'cvn@b4t.com.vn','123456',2,'NV11'),(12,'ctn@b4t.com.vn','123456',2,'NV12'),(13,'dvn@b4t.com.vn','123456',2,'NV13'),(14,'dtn@b4t.com.vn','123456',2,'NV14'),(15,'evn@b4t.com.vn','123456',2,'NV15'),(16,'etn@b4t.com.vn','123456',2,'NV16'),(17,'gvn@b4t.com.vn','123456',2,'NV17'),(18,'gtn@b4t.com.vn','123456',2,'NV18'),(19,'hvn@b4t.com.vn','123456',2,'NV19'),(20,'htn@b4t.com.vn','123456',2,'NV20'),(21,'ivn@b4t.com.vn','123456',2,'NV21'),(22,'itn@b4t.com.vn','123456',2,'NV22'),(23,'kvn@b4t.com.vn','123456',2,'NV23'),(24,'ktn@b4t.com.vn','123456',2,'NV24'),(25,'lvn@b4t.com.vn','123456',2,'NV25'),(26,'ltn@b4t.com.vn','123456',2,'NV26'),(27,'mvn@b4t.com.vn','123456',2,'NV27'),(28,'mtn@b4t.com.vn','123456',2,'NV28'),(29,'nvn@b4t.com.vn','123456',2,'NV29'),(30,'ntn@b4t.com.vn','123456',2,'NV30'),(31,'ovn@b4t.com.vn','123456',2,'NV31'),(32,'otn@b4t.com.vn','123456',2,'NV32'),(33,'pvn@b4t.com.vn','123456',2,'NV33'),(34,'ptn@b4t.com.vn','123456',2,'NV34'),(35,'qvn@b4t.com.vn','123456',2,'NV35'),(36,'qtn@b4t.com.vn','123456',2,'NV36'),(37,'avt@b4t.com.vn','123456',2,'NV37'),(38,'att@b4t.com.vn','123456',2,'NV38'),(39,'bvt@b4t.com.vn','123456',2,'NV39'),(40,'btt@b4t.com.vn','123456',2,'NV40'),(41,'cvt@b4t.com.vn','123456',2,'NV41'),(42,'ctt@b4t.com.vn','123456',2,'NV42'),(43,'dvt@b4t.com.vn','123456',2,'NV43'),(44,'dtt@b4t.com.vn','123456',2,'NV44'),(45,'evt@b4t.com.vn','123456',2,'NV45'),(46,'ajess@b4t.com.vn','123456',2,'NV46'),(47,'ajohn@b4t.com.vn','123456',2,'NV47'),(48,'bjess@b4t.com.vn','123456',2,'NV48'),(49,'bjohn@b4t.com.vn','123456',2,'NV49'),(50,'cjess@b4t.com.vn','123456',2,'NV50');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `chungchitienganh` VALUES (1,1,'2021-05-01','HN','NV1',7.5),(2,1,'2021-05-01','HN','NV1',7),(3,1,'2021-05-01','HN','NV2',7),(4,1,'2021-05-01','HN','NV4',8),(5,1,'2021-05-01','HN','NV5',8.5),(6,1,'2021-05-01','HN','NV6',7),(7,1,'2021-05-01','HN','NV7',7.5),(8,1,'2021-05-01','HN','NV8',7),(9,1,'2021-05-01','HN','NV9',6.5),(10,1,'2021-05-01','HN','NV10',7.5),(11,1,'2021-05-01','HN','NV11',7.5),(12,1,'2021-05-01','HN','NV12',7),(13,1,'2021-05-01','HN','NV13',7),(14,1,'2021-05-01','HN','NV14',7),(15,1,'2021-05-01','HN','NV15',7),(16,1,'2021-05-01','HN','NV16',7),(17,1,'2021-05-01','HN','NV17',7),(18,1,'2021-05-01','HN','NV18',7),(19,1,'2021-05-01','HN','NV19',7),(20,1,'2021-05-01','HN','NV20',7),(21,1,'2021-05-01','HN','NV21',7),(22,1,'2021-05-01','HN','NV22',7),(23,1,'2021-05-01','HN','NV23',7),(24,1,'2021-05-01','HN','NV24',7),(25,1,'2021-05-01','HN','NV25',8),(26,1,'2021-05-01','HN','NV26',8.5),(27,1,'2021-05-01','HN','NV27',8),(28,1,'2021-05-01','HN','NV28',6.5),(29,1,'2021-05-01','HN','NV29',6.5),(30,1,'2021-05-01','HN','NV30',8),(31,1,'2021-05-01','HN','NV31',8),(32,1,'2021-05-01','HN','NV32',8.5),(33,1,'2021-05-01','HN','NV33',7),(34,1,'2021-05-01','HN','NV34',7.5),(35,1,'2021-05-01','HN','NV35',7),(36,1,'2021-05-01','HN','NV36',6.5),(37,1,'2021-05-01','HN','NV37',7.5),(38,1,'2021-05-01','HN','NV38',7.5),(39,1,'2021-05-01','HN','NV39',7),(40,1,'2021-05-01','HN','NV40',7),(41,1,'2021-05-01','HN','NV41',7),(42,1,'2021-05-01','HN','NV42',7),(43,1,'2021-05-01','HN','NV43',7),(44,1,'2021-05-01','HN','NV44',7),(45,1,'2021-05-01','HN','NV45',7),(46,1,'2021-05-01','HN','NV46',7),(47,1,'2021-05-01','HN','NV47',7),(48,1,'2021-05-01','HN','NV48',7),(49,1,'2021-05-01','HN','NV49',7),(50,1,'2021-05-01','HN','NV50',7),(51,2,'2021-05-01','HN','NV1',79),(52,2,'2021-05-01','HN','NV3',78),(53,2,'2021-05-01','HN','NV5',79),(54,2,'2021-05-01','HN','NV7',90),(55,2,'2021-05-01','HN','NV9',85),(56,2,'2021-05-01','HN','NV11',96),(57,2,'2021-05-01','HN','NV13',84),(58,2,'2021-05-01','HN','NV15',84),(59,2,'2021-05-01','HN','NV17',86),(60,2,'2021-05-01','HN','NV19',95),(61,2,'2021-05-01','HN','NV21',99),(62,2,'2021-05-01','HN','NV23',90),(63,2,'2021-05-01','HN','NV25',96),(64,2,'2021-05-01','HN','NV27',89),(65,2,'2021-05-01','HN','NV29',90),(66,2,'2021-05-01','HN','NV31',91),(67,2,'2021-05-01','HN','NV33',87),(68,2,'2021-05-01','HN','NV35',88),(69,2,'2021-05-01','HN','NV37',88),(70,2,'2021-05-01','HN','NV39',88),(71,2,'2021-05-01','HN','NV41',90),(72,2,'2021-05-01','HN','NV43',90),(73,2,'2021-05-01','HN','NV45',89),(74,2,'2021-05-01','HN','NV47',89),(75,2,'2021-05-01','HN','NV49',91),(76,3,'2021-05-01','HN','NV2',780),(77,3,'2021-05-01','HN','NV4',780),(78,3,'2021-05-01','HN','NV6',770),(79,3,'2021-05-01','HN','NV8',770),(80,3,'2021-05-01','HN','NV10',760),(81,3,'2021-05-01','HN','NV12',760),(82,3,'2021-05-01','HN','NV14',785),(83,3,'2021-05-01','HN','NV16',790),(84,3,'2021-05-01','HN','NV18',880),(85,3,'2021-05-01','HN','NV20',990),(86,3,'2021-05-01','HN','NV22',900),(87,3,'2021-05-01','HN','NV24',880),(88,3,'2021-05-01','HN','NV26',880),(89,3,'2021-05-01','HN','NV28',900),(90,3,'2021-05-01','HN','NV30',900),(91,3,'2021-05-01','HN','NV32',890),(92,3,'2021-05-01','HN','NV34',890),(93,3,'2021-05-01','HN','NV36',910),(94,3,'2021-05-01','HN','NV38',880),(95,3,'2021-05-01','HN','NV40',990),(96,3,'2021-05-01','HN','NV42',900),(97,3,'2021-05-01','HN','NV44',880),(98,3,'2021-05-01','HN','NV46',880),(99,3,'2021-05-01','HN','NV48',900),(100,3,'2021-05-01','HN','NV50',900),(101,4,'2021-05-01','HN','NV43',610),(102,4,'2021-05-01','HN','NV44',620),(103,4,'2021-05-01','HN','NV45',640),(104,4,'2021-05-01','HN','NV46',640),(105,4,'2021-05-01','HN','NV47',670),(106,4,'2021-05-01','HN','NV48',700),(107,4,'2021-05-01','HN','NV49',670),(108,4,'2021-05-01','HN','NV50',620),(109,5,'2021-05-01','HN','NV47',180),(110,5,'2021-05-01','HN','NV48',190),(111,5,'2021-05-01','HN','NV49',200);
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
  `id_phong` int unsigned DEFAULT NULL,
  `ngay` date NOT NULL,
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
  `giam_tru_gia_canh` int DEFAULT NULL,
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
INSERT INTO `hopdong` VALUES ('HD1',6,'2019-01-01',NULL,NULL,_binary '','NV1',NULL),('HD2',6,'2020-01-01',NULL,NULL,_binary '','NV2',NULL),('HD3',6,'2019-01-01',NULL,NULL,_binary '','NV3',NULL),('HD4',1,'2021-01-01','2022-01-01','nghỉ việc',_binary '\0','NV4',NULL),('HD5',3,'2021-01-01','2024-01-01',NULL,_binary '','NV5',NULL),('HD6',1,'2020-01-01','2021-01-01',NULL,_binary '\0','NV6',NULL),('HD7',3,'2021-01-01','2024-01-01',NULL,_binary '','NV6',NULL),('HD8',3,'2021-01-01','2024-01-01',NULL,_binary '','NV7',NULL),('HD9',3,'2021-01-01','2024-01-01',NULL,_binary '','NV8',NULL),('HD10',1,'2022-01-01','2023-01-01',NULL,_binary '','NV9',NULL),('HD11',3,'2022-04-01','2025-04-01',NULL,_binary '','NV10',NULL),('HD12',3,'2022-04-01','2025-04-01',NULL,_binary '','NV11',NULL),('HD13',3,'2022-04-01','2025-04-01',NULL,_binary '','NV12',NULL),('HD14',3,'2022-04-01','2025-04-01',NULL,_binary '','NV13',NULL),('HD15',3,'2022-04-01','2025-04-01',NULL,_binary '','NV14',NULL),('HD16',3,'2022-04-01','2025-04-01',NULL,_binary '','NV15',NULL),('HD17',3,'2022-04-01','2025-04-01',NULL,_binary '','NV16',NULL),('HD18',3,'2022-04-01','2025-04-01',NULL,_binary '','NV17',NULL),('HD19',1,'2020-03-01','2021-03-01',NULL,_binary '\0','NV18',NULL),('HD20',3,'2021-03-01','2024-03-01',NULL,_binary '','NV18',NULL),('HD21',3,'2021-01-01','2024-01-01',NULL,_binary '','NV19',NULL),('HD22',3,'2021-01-01','2024-01-01',NULL,_binary '','NV20',NULL),('HD23',3,'2021-01-01','2024-01-01',NULL,_binary '','NV21',NULL),('HD24',3,'2021-01-01','2024-01-01',NULL,_binary '','NV22',NULL),('HD25',3,'2021-01-01','2024-01-01',NULL,_binary '','NV23',NULL),('HD26',3,'2021-01-01','2024-01-01',NULL,_binary '','NV24',NULL),('HD27',3,'2021-01-01','2024-01-01',NULL,_binary '','NV25',NULL),('HD28',3,'2021-01-01','2024-01-01',NULL,_binary '','NV26',NULL),('HD29',3,'2021-01-01','2024-01-01',NULL,_binary '','NV27',NULL),('HD30',3,'2021-01-01','2024-01-01',NULL,_binary '','NV28',NULL),('HD31',3,'2021-01-01','2024-01-01',NULL,_binary '','NV29',NULL),('HD32',5,'2020-01-01','2020-03-01','Đổi hợp đồng',_binary '\0','NV30',NULL),('HD33',4,'2020-03-01','2020-05-01','Đổi hợp đồng',_binary '\0','NV30',NULL),('HD34',3,'2020-05-01','2023-05-01',NULL,_binary '','NV30',NULL),('HD35',5,'2021-04-01','2021-06-01','Đổi hợp đồng',_binary '\0','NV31',NULL),('HD36',4,'2021-06-01','2021-08-01','Đổi hợp đồng',_binary '\0','NV31',NULL),('HD37',3,'2021-08-01','2024-08-01',NULL,_binary '','NV31',NULL),('HD38',4,'2022-04-01','2022-06-01',NULL,_binary '','NV32',NULL),('HD39',4,'2022-04-01','2022-06-01',NULL,_binary '','NV33',NULL),('HD40',1,'2022-04-01','2023-04-01',NULL,_binary '','NV34',NULL),('HD41',1,'2022-04-01','2023-04-01',NULL,_binary '','NV35',NULL),('HD42',4,'2022-04-01','2022-06-01',NULL,_binary '','NV36',NULL),('HD43',4,'2022-04-01','2022-06-01',NULL,_binary '','NV37',NULL),('HD44',3,'2021-01-01','2024-01-01',NULL,_binary '','NV38',NULL),('HD45',3,'2021-01-01','2024-01-01',NULL,_binary '','NV39',NULL),('HD46',4,'2022-04-01','2022-06-01',NULL,_binary '','NV40',NULL),('HD47',4,'2022-04-01','2022-06-01',NULL,_binary '','NV41',NULL),('HD48',4,'2022-04-01','2022-06-01',NULL,_binary '','NV42',NULL),('HD49',4,'2022-04-01','2022-06-01',NULL,_binary '','NV43',NULL),('HD50',4,'2022-04-01','2022-06-01',NULL,_binary '','NV44',NULL),('HD51',4,'2022-04-01','2022-06-01',NULL,_binary '','NV45',NULL),('HD52',3,'2021-01-01','2024-01-01',NULL,_binary '','NV46',NULL),('HD53',5,'2022-02-01','2022-04-01','Đổi hợp đồng',_binary '\0','NV47',NULL),('HD54',4,'2022-04-01','2022-06-01',NULL,_binary '','NV47',NULL),('HD55',3,'2019-01-01','2020-01-01','Nghỉ việc',_binary '\0','NV48',NULL),('HD56',1,'2021-12-01','2022-12-01',NULL,_binary '','NV49',NULL),('HD57',1,'2021-12-01','2022-12-01',NULL,_binary '','NV50',NULL);
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
  `ly_do` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
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
INSERT INTO `khenthuongkiluat` VALUES (1,1,NULL,'NV19'),(2,1,NULL,'NV20'),(3,1,NULL,'NV21'),(4,2,NULL,'NV22'),(5,2,NULL,'NV23'),(6,2,NULL,'NV24'),(7,3,NULL,'NV25'),(8,3,NULL,'NV26'),(9,3,NULL,'NV27'),(10,4,NULL,'NV28'),(11,4,NULL,'NV29'),(12,4,NULL,'NV30'),(13,5,NULL,'NV31'),(14,5,NULL,'NV19'),(15,5,NULL,'NV20'),(16,6,NULL,'NV21'),(17,6,NULL,'NV22'),(18,6,NULL,'NV23'),(19,7,NULL,'NV24'),(20,7,NULL,'NV25'),(21,7,NULL,'NV26'),(22,8,NULL,'NV27'),(23,8,NULL,'NV28'),(24,8,NULL,'NV29'),(25,9,NULL,'NV30'),(26,9,NULL,'NV31'),(27,10,NULL,'NV20'),(28,10,NULL,'NV21'),(29,10,NULL,'NV22'),(30,11,NULL,'NV23'),(31,11,NULL,'NV24'),(32,11,NULL,'NV25'),(33,12,NULL,'NV26'),(34,12,NULL,'NV27'),(35,12,NULL,'NV28'),(36,13,NULL,'NV29'),(37,13,NULL,'NV30'),(38,13,NULL,'NV31'),(39,14,NULL,'NV19'),(40,14,NULL,'NV20'),(41,14,NULL,'NV21'),(42,15,NULL,'NV22'),(43,15,NULL,'NV23'),(44,15,NULL,'NV24'),(45,16,NULL,'NV25'),(46,16,NULL,'NV26'),(47,16,NULL,'NV27'),(48,17,NULL,'NV28'),(49,17,NULL,'NV29'),(50,17,NULL,'NV30'),(51,17,NULL,'NV31'),(52,18,NULL,'NV40'),(53,18,NULL,'NV39'),(54,18,NULL,'NV41'),(55,19,NULL,'NV49'),(56,19,NULL,'NV50');
/*!40000 ALTER TABLE `khenthuongkiluat` ENABLE KEYS */;
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
  `ngay_hieu_luc` date NOT NULL,
  `ngay_ket_thuc` date DEFAULT NULL,
  `ghi_chu` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
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
INSERT INTO `luongnhanvien` VALUES (1,'HD1',18,70000000,10000000,'2019-01-01',NULL,NULL),(2,'HD2',17,60000000,10000000,'2020-01-01',NULL,NULL),(3,'HD3',17,65000000,10000000,'2019-01-01',NULL,NULL),(4,'HD4',10,12000000,5000000,'2021-01-01','2022-01-01','nghỉ việc'),(5,'HD5',4,15000000,5000000,'2021-01-01','2022-01-01','tăng lương'),(6,'HD5',6,19000000,5000000,'2022-01-01','2024-01-01',NULL),(7,'HD6',14,35000000,5000000,'2020-01-01','2021-01-01','tăng lương'),(8,'HD7',16,45000000,5000000,'2021-01-01','2022-01-01','tăng lương'),(9,'HD7',16,55000000,5000000,'2022-01-01','2024-01-01',NULL),(10,'HD8',15,40000000,5000000,'2021-01-01','2024-01-01',NULL),(11,'HD9',15,40000000,5000000,'2021-01-01','2024-01-01',NULL),(12,'HD10',15,40000000,5000000,'2022-01-01','2023-01-01',NULL),(13,'HD11',15,40000000,5000000,'2022-04-01','2025-04-01',NULL),(14,'HD12',15,40000000,5000000,'2022-04-01','2025-04-01',NULL),(15,'HD13',15,40000000,5000000,'2022-04-01','2025-04-01',NULL),(16,'HD14',15,40000000,5000000,'2022-04-01','2025-04-01',NULL),(17,'HD15',15,40000000,5000000,'2022-04-01','2025-04-01',NULL),(18,'HD16',15,40000000,5000000,'2022-04-01','2025-04-01',NULL),(19,'HD17',15,40000000,5000000,'2022-04-01','2025-04-01',NULL),(20,'HD18',13,25000000,5000000,'2022-04-01','2025-04-01',NULL),(21,'HD19',13,25000000,5000000,'2020-03-01','2021-03-01','đổi hợp đồng'),(22,'HD20',13,25000000,5000000,'2021-03-01','2024-03-01',NULL),(23,'HD21',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(24,'HD22',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(25,'HD23',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(26,'HD24',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(27,'HD25',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(28,'HD26',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(29,'HD27',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(30,'HD28',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(31,'HD29',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(32,'HD30',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(33,'HD31',13,25000000,5000000,'2021-01-01','2024-01-01',NULL),(34,'HD32',10,5000000,NULL,'2020-01-01','2020-03-01','đổi hợp đồng'),(35,'HD33',10,14000000,500000,'2020-03-01','2020-05-01','đổi hợp đồng'),(36,'HD34',10,14000000,500000,'2020-05-01','2021-05-01','tăng lương'),(37,'HD34',12,25000000,500000,'2021-05-01','2023-05-01',NULL),(38,'HD35',10,5000000,NULL,'2021-04-01','2021-06-01','đổi hợp đồng'),(39,'HD36',10,14000000,500000,'2021-06-01','2021-08-01','đổi hợp đồng'),(40,'HD37',10,14000000,500000,'2021-08-01','2022-08-01','tăng lương'),(41,'HD37',12,25000000,500000,'2022-04-01','2024-08-01',NULL),(42,'HD38',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(43,'HD39',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(44,'HD40',10,14000000,500000,'2022-04-01','2023-04-01',NULL),(45,'HD41',10,14000000,500000,'2022-04-01','2023-04-01',NULL),(46,'HD42',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(47,'HD43',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(48,'HD44',10,14000000,500000,'2021-01-01','2024-01-01',NULL),(49,'HD45',10,14000000,500000,'2021-01-01','2024-01-01',NULL),(50,'HD46',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(51,'HD47',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(52,'HD48',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(53,'HD49',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(54,'HD50',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(55,'HD51',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(56,'HD52',10,14000000,500000,'2021-01-01','2024-01-01',NULL),(57,'HD53',10,5000000,NULL,'2022-02-01','2022-04-01','đổi hợp đồng'),(58,'HD54',10,14000000,500000,'2022-04-01','2022-06-01',NULL),(59,'HD55',10,14000000,500000,'2019-01-01','2020-01-01','nghỉ việc'),(60,'HD56',10,14000000,500000,'2021-12-01','2022-12-01',NULL),(61,'HD57',10,14000000,500000,'2021-12-01','2022-12-01',NULL);
/*!40000 ALTER TABLE `luongnhanvien` ENABLE KEYS */;
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
  `atm_ngan_hang` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `so_atm` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ngay_bat_dau_lam` date NOT NULL,
  `ngay_nghi_viec` date DEFAULT NULL,
  `ly_do_nghi` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `id_tinh_chat_hop_dong` int unsigned DEFAULT NULL,
  `id_tinh_trang_hon_nhan` int unsigned NOT NULL,
  PRIMARY KEY (`ma_nv`),
  UNIQUE KEY `so_dien_thoai_UNIQUE` (`so_dien_thoai`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `so_atm_UNIQUE` (`so_atm`),
  UNIQUE KEY `ho_chieu_UNIQUE` (`ho_chieu`),
  UNIQUE KEY `cccd_UNIQUE` (`cccd`),
  KEY `FK_TinhChatHopDong_idx` (`id_tinh_chat_hop_dong`),
  KEY `FK_TinhTrangHonNhan_idx` (`id_tinh_trang_hon_nhan`),
  KEY `fk_quoc_tich_nv_idx` (`ma_quoc_tich`),
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
INSERT INTO `nhanvien` VALUES ('NV1','Nguyễn Huy Bách','1999-04-25',_binary '',10,'0968250499',NULL,'bachnh@b4t.com.vn','002099004470','Hà Nội','2020-04-25','2021-04-25','0010010000','Hà Nội, Việt Nam','1999-04-25','2021-04-25','Hà Nội','Hà Nội','Nguyễn Chí Thanh, Hà Nội','Nguyễn Chí Thanh, Hà Nội','Techcombank','19027952371017','2019-01-01',NULL,NULL,'a',1,1),('NV2','Nguyễn Hữu Tài','1999-06-01',_binary '',10,'0912399342',NULL,'tainh@b4t.com.vn','002096707770','Hà Nội','2019-07-25','2022-04-25','0012229900','Hà Nội, Việt Nam','2020-04-25','2021-04-25','Hà Nội','Hà Nội','Nguyễn Chí Thanh, Hà Nội','Nguyễn Chí Thanh, Hà Nội','Techcombank','19028882371017','2020-01-01',NULL,NULL,NULL,1,1),('NV3','Nguyễn Anh Tuấn','2000-09-30',_binary '',10,'0973739342',NULL,'tuanna@b4t.com.vn','007099345760','Hà Nội','2020-02-25','2024-04-25',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Trần Duy Hưng, Hà Nội','Đống Đa, Hà Nội','Techcombank','19087952377878','2019-01-01',NULL,NULL,NULL,1,1),('NV4','David Villa','1988-06-13',_binary '',8,'0917609642',NULL,'davidvilla@b4t.com.vn',NULL,NULL,NULL,NULL,'S1290223','Barcelona, Tây Ban Nha','2018-06-13','2023-06-13','Tây Ban Nha','Tây Ban Nha','Barcelona, Tây Ban Nha','Hai Bà Trưng, Hà Nội','Techcombank','19037754471017','2021-01-01','2022-01-01','Về nước',NULL,NULL,2),('NV5','Alexia Canary','1989-09-13',_binary '\0',9,'0983238885',NULL,'alexiacanary@b4t.com.vn',NULL,NULL,NULL,NULL,'U1222335','Newyork, Mỹ','2019-02-01','2024-02-01','Mỹ','Mỹ','Newyork, Mỹ','Đội Cấn, Hà Nội','Techcombank','19128845471171','2021-01-01',NULL,NULL,NULL,1,1),('NV6','La Ngọc Tín','1998-10-23',_binary '',10,'0913248566',NULL,'tinln@b4t.com.vn','001119004550','Hà Nội','2017-05-01','2024-05-01','U1234300','Hà Nội','2020-02-22','2025-02-22','Thanh Hóa','Thanh Hóa','Nghi Sơn, Thanh Hóa','Hòa Lạc, Hà Nội','Techcombank','19000000000000','2020-01-01',NULL,NULL,NULL,1,2),('NV7','Nguyễn Quang Tuấn','1991-09-24',_binary '',10,'0900000001',NULL,'tuannq@b4t.com.vn','001000000000','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Đà Nẵng','Đà Nẵng','Nguyễn Văn Linh, Đà Nẵng','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000001','2021-01-01',NULL,NULL,NULL,1,2),('NV8','Nguyễn Thị A','1997-11-23',_binary '\0',10,'0900000002',NULL,'atn@b4t.com.vn','001000000001','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000002','2021-01-01',NULL,NULL,NULL,1,2),('NV9','Nguyễn Văn B','1997-12-24',_binary '',10,'0900000003',NULL,'bvn@b4t.com.vn','001000000002','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000003','2022-01-01',NULL,NULL,NULL,1,2),('NV10','Nguyễn Thị B','2000-01-01',_binary '\0',10,'0900000004',NULL,'btn@b4t.com.vn','001000000003','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000004','2022-04-01',NULL,NULL,NULL,1,1),('NV11','Nguyễn Văn C','2000-02-12',_binary '',10,'0900000005',NULL,'cvn@b4t.com.vn','001000000004','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000005','2022-04-01',NULL,NULL,NULL,1,1),('NV12','Nguyễn Thị C','2001-02-11',_binary '\0',10,'0900000006',NULL,'ctn@b4t.com.vn','001000000005','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000006','2022-04-01',NULL,NULL,NULL,1,1),('NV13','Nguyễn Văn D','2001-02-22',_binary '',10,'0900000007',NULL,'dvn@b4t.com.vn','001000000006','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000007','2022-04-01',NULL,NULL,NULL,1,1),('NV14','Nguyễn Thị D','1990-03-12',_binary '\0',10,'0900000008',NULL,'dtn@b4t.com.vn','001000000007','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000008','2022-04-01',NULL,NULL,NULL,1,2),('NV15','Nguyễn Văn E','1991-04-23',_binary '',10,'0900000009',NULL,'evn@b4t.com.vn','001000000008','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000009','2022-04-01',NULL,NULL,NULL,1,2),('NV16','Nguyễn Thị E','1991-01-30',_binary '\0',10,'0900000010',NULL,'etn@b4t.com.vn','001000000009','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000010','2022-04-01',NULL,NULL,NULL,1,1),('NV17','Nguyễn Văn G','1992-02-21',_binary '',10,'0900000011',NULL,'gvn@b4t.com.vn','001000000010','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000011','2022-04-01',NULL,NULL,NULL,1,2),('NV18','Nguyễn Thị G','1994-09-03',_binary '\0',10,'0900000012',NULL,'gtn@b4t.com.vn','001000000011','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000012','2020-03-01',NULL,NULL,NULL,1,2),('NV19','Nguyễn Văn H','1995-02-28',_binary '',10,'0900000013',NULL,'hvn@b4t.com.vn','001000000012','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000013','2021-01-01',NULL,NULL,NULL,1,1),('NV20','Nguyễn Thị H','1996-01-13',_binary '\0',10,'0900000014',NULL,'htn@b4t.com.vn','001000000013','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000014','2021-01-01',NULL,NULL,NULL,1,1),('NV21','Nguyễn Văn I','1995-03-11',_binary '',10,'0900000015',NULL,'ivn@b4t.com.vn','001000000014','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000015','2021-01-01',NULL,NULL,NULL,1,2),('NV22','Nguyễn Thị I','1994-10-03',_binary '\0',10,'0900000016',NULL,'itn@b4t.com.vn','001000000015','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000016','2021-01-01',NULL,NULL,NULL,1,2),('NV23','Nguyễn Văn K','1993-10-28',_binary '',10,'0900000017',NULL,'kvn@b4t.com.vn','001000000016','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000017','2021-01-01',NULL,NULL,NULL,1,1),('NV24','Nguyễn Thị K','1995-11-13',_binary '\0',10,'0900000018',NULL,'ktn@b4t.com.vn','001000000017','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000018','2021-01-01',NULL,NULL,NULL,1,1),('NV25','Nguyễn Văn L','1993-09-11',_binary '',10,'0900000019',NULL,'lvn@b4t.com.vn','001000000018','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000019','2021-01-01',NULL,NULL,NULL,1,2),('NV26','Nguyễn Thị L','1999-01-02',_binary '\0',10,'0900000020',NULL,'ltn@b4t.com.vn','001000000019','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000020','2021-01-01',NULL,NULL,NULL,1,2),('NV27','Nguyễn Văn M','2000-01-03',_binary '',10,'0900000021',NULL,'mvn@b4t.com.vn','001000000020','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000021','2021-01-01',NULL,NULL,NULL,1,1),('NV28','Nguyễn Thị M','2000-02-04',_binary '\0',10,'0900000022',NULL,'mtn@b4t.com.vn','001000000021','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000022','2021-01-01',NULL,NULL,NULL,1,1),('NV29','Nguyễn Văn N','1998-03-05',_binary '',10,'0900000023',NULL,'nvn@b4t.com.vn','001000000022','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000023','2021-01-01',NULL,NULL,NULL,1,2),('NV30','Nguyễn Thị N','2000-01-02',_binary '\0',10,'0900000024',NULL,'ntn@b4t.com.vn','001000000023','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000024','2020-01-01',NULL,NULL,NULL,1,2),('NV31','Nguyễn Văn O','2001-01-03',_binary '',10,'0900000025',NULL,'ovn@b4t.com.vn','001000000024','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000025','2021-04-01',NULL,NULL,NULL,1,1),('NV32','Nguyễn Thị O','1997-02-04',_binary '\0',10,'0900000026',NULL,'otn@b4t.com.vn','001000000025','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000026','2022-04-01',NULL,NULL,NULL,2,1),('NV33','Nguyễn Văn P','1998-03-05',_binary '',10,'0900000027',NULL,'pvn@b4t.com.vn','001000000026','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000027','2022-04-01',NULL,NULL,NULL,2,2),('NV34','Nguyễn Thị P','2000-02-02',_binary '\0',10,'0900000028',NULL,'ptn@b4t.com.vn','001000000028','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000028','2022-04-01',NULL,NULL,NULL,1,2),('NV35','Nguyễn Văn Q','2001-02-03',_binary '',10,'0900000029',NULL,'qvn@b4t.com.vn','001000000029','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000029','2022-04-01',NULL,NULL,NULL,1,1),('NV36','Nguyễn Thị Q','1996-04-04',_binary '\0',10,'0900000030',NULL,'qtn@b4t.com.vn','001000000030','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000030','2022-04-01',NULL,NULL,NULL,2,1),('NV37','Trần Văn A','1998-05-05',_binary '',10,'0900000031',NULL,'avt@b4t.com.vn','001000000031','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000031','2022-04-01',NULL,NULL,NULL,2,2),('NV38','Trần Thị A','2001-12-02',_binary '\0',10,'0900000032',NULL,'att@b4t.com.vn','001000000032','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000032','2021-01-01',NULL,NULL,NULL,1,2),('NV39','Trần Văn B','1996-04-30',_binary '',10,'0900000033',NULL,'bvt@b4t.com.vn','001000000033','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000033','2021-01-01',NULL,NULL,NULL,1,1),('NV40','Trần Thị B','1996-11-14',_binary '\0',10,'0900000034',NULL,'btt@b4t.com.vn','001000000034','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000034','2022-04-01',NULL,NULL,NULL,2,1),('NV41','Trần Văn C','1998-09-06',_binary '',10,'0900000035',NULL,'cvt@b4t.com.vn','001000000035','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000035','2022-04-01',NULL,NULL,NULL,2,2),('NV42','Trần Thị C','2001-11-02',_binary '\0',10,'0900000036',NULL,'ctt@b4t.com.vn','001000000036','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000036','2022-04-01',NULL,NULL,NULL,2,2),('NV43','Trần Văn D','2002-10-30',_binary '',10,'0900000037',NULL,'dvt@b4t.com.vn','001000000037','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000037','2022-04-01',NULL,NULL,NULL,2,1),('NV44','Trần Thị D','2002-12-14',_binary '\0',10,'0900000038',NULL,'dtt@b4t.com.vn','001000000038','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Hà Đông, Hà Nội','Hà Đông, Hà Nội','Techcombank','19000000000038','2022-04-01',NULL,NULL,NULL,2,1),('NV45','Trần Văn E','2003-02-09',_binary '',10,'0900000039',NULL,'evt@b4t.com.vn','001000000039','Hà Nội','2017-05-01','2024-05-01',NULL,NULL,NULL,NULL,'Hà Nội','Hà Nội','Mỹ Đình, Hà Nội','Lê Trọng Tấn, Hà Nội','Techcombank','19000000000039','2022-04-01',NULL,NULL,NULL,2,2),('NV46','Jessica A','1995-12-21',_binary '\0',5,'0900000040',NULL,'ajess@b4t.com.vn',NULL,NULL,NULL,NULL,'M1000001','Malaysia','2017-05-01','2024-05-01','Malaysia','Malaysia',NULL,'Hà Đông, Hà Nội','Techcombank','19000000000040','2021-01-01',NULL,NULL,NULL,1,2),('NV47','John A','1996-10-11',_binary '',6,'0900000041',NULL,'ajohn@b4t.com.vn',NULL,NULL,NULL,NULL,'P1000002','Philipines','2017-05-01','2024-05-01','Philipines','Philipines',NULL,'Lê Trọng Tấn, Hà Nội','Techcombank','19000000000041','2022-02-01',NULL,NULL,NULL,2,1),('NV48','Jessica B','1994-10-14',_binary '\0',7,'0900000042',NULL,'bjess@b4t.com.vn',NULL,NULL,NULL,NULL,'S1000003','Singapore','2017-05-01','2024-05-01','Singapore','Singapore',NULL,'Hà Đông, Hà Nội','Techcombank','19000000000042','2019-01-01','2020-02-21','thay đổi dự định',NULL,NULL,1),('NV49','John B','1997-05-26',_binary '',1,'0900000043',NULL,'bjohn@b4t.com.vn',NULL,NULL,NULL,NULL,'A1000004','Australia','2017-05-01','2024-05-01','Australia','Australia',NULL,'Lê Trọng Tấn, Hà Nội','Techcombank','19000000000043','2021-12-01',NULL,NULL,NULL,1,2),('NV50','Jessica C','1993-07-28',_binary '\0',2,'0900000044',NULL,'cjess@b4t.com.vn',NULL,NULL,NULL,NULL,'C1000005','Canada','2017-05-01','2024-05-01','Canada','Canada',NULL,'Lê Trọng Tấn, Hà Nội','Techcombank','19000000000044','2021-12-01',NULL,NULL,NULL,1,2);
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
  `ma_bac_luong` varchar(100) NOT NULL,
  `ten_bac_luong` varchar(100) NOT NULL,
  `khoang_luong_tu` float NOT NULL,
  `khoang_luong_den` float NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_bac_luong_UNIQUE` (`ma_bac_luong`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_bacluong`
--

LOCK TABLES `phanloai_bacluong` WRITE;
/*!40000 ALTER TABLE `phanloai_bacluong` DISABLE KEYS */;
INSERT INTO `phanloai_bacluong` VALUES (1,'GVK1','Salary of teacher medium level 1',7000000,10000000),(2,'GVK2','Salary of teacher medium level 2',10000000,12000000),(3,'GVK3','Salary of teacher medium level 3',12000000,14000000),(4,'GVT1','Salary of teacher good  level 1',14000000,16000000),(5,'GVT2','Salary of teacher good  level 2',16000000,18000000),(6,'GVT3','Salary of teacher good  level 3',18000000,20000000),(7,'GVG1','Salary of teacher excellent  level 1',20000000,22000000),(8,'GVG2','Salary of teacher excellent  level 2',22000000,24000000),(9,'GVG3','Salary of teacher excellent  level 3',24000000,30000000),(10,'NVL1','Salary of employee 1',10000000,15000000),(11,'NVL2','Salary of employee 2',15000000,25000000),(12,'NVL3','Salary of employee 3',25000000,35000000),(13,'NVP1','Salary of department deputy 1',20000000,30000000),(14,'NVP2','Salary of department deputy 2',30000000,40000000),(15,'NVT1','Salary of department leader 1',30000000,40000000),(16,'NVT2','Salary of department leader 2',40000000,55000000),(17,'PGD','Salary of Vice Director',55000000,65000000),(18,'GD','Salary of Director',65000000,75000000);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_bangcap`
--

LOCK TABLES `phanloai_bangcap` WRITE;
/*!40000 ALTER TABLE `phanloai_bangcap` DISABLE KEYS */;
INSERT INTO `phanloai_bangcap` VALUES (1,'Avarage'),(2,'Fairly good'),(3,'Good'),(4,'Very Good'),(5,'Excellent');
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
  `phan_tram` float NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_bh_UNIQUE` (`ma_bh`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_baohiem`
--

LOCK TABLES `phanloai_baohiem` WRITE;
/*!40000 ALTER TABLE `phanloai_baohiem` DISABLE KEYS */;
INSERT INTO `phanloai_baohiem` VALUES (1,'BH1','Bảo hiểm xã hội',8),(2,'BH2','Bảo hiểm y tế',1.5),(3,'BH3','Bảo hiểm thất nghiệp',1),(4,'BH4','Công đoàn',1);
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
INSERT INTO `phanloai_calam` VALUES (1,'Slot 1','08:00:00','10:00:00'),(2,'Slot 2','10:00:00','12:00:00'),(3,'Slot 3','13:00:00','15:00:00'),(4,'Slot 4','15:00:00','17:00:00'),(5,'Slot 5','19:00:00','21:00:00'),(6,'Slot 6','08:00:00','12:00:00'),(7,'Slot 7','13:00:00','17:00:00');
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
  PRIMARY KEY (`id`),
  UNIQUE KEY `ma_chuc_vu_UNIQUE` (`ma_chuc_vu`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_chucvu`
--

LOCK TABLES `phanloai_chucvu` WRITE;
/*!40000 ALTER TABLE `phanloai_chucvu` DISABLE KEYS */;
INSERT INTO `phanloai_chucvu` VALUES (1,'CV01','Employee'),(2,'CV02','Vice department manager'),(3,'CV03','Department manager'),(4,'CV04','Vice Director'),(5,'CV05','Director'),(6,'CV06','Teacher');
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
INSERT INTO `phanloai_chungchitienganh` VALUES (1,'CC01','IELTS'),(2,'CC02','TOEFL'),(3,'CC03','TOEIC'),(4,'CC04','SAT'),(5,'CC05','ESOL');
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
INSERT INTO `phanloai_chuyenmon` VALUES (1,'CM01','Finance and Banking'),(2,'CM02','Office administration'),(3,'CM03','Business Administration'),(4,'CM04','Accounting'),(5,'CM05','Economics'),(6,'CM06','Information Technology'),(7,'CM07','Language Teacher Education'),(8,'CM08','Else');
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
INSERT INTO `phanloai_hopdong` VALUES (1,'LHD1','1 year contract'),(2,'LHD2','2 years contract'),(3,'LHD3','3 years contract'),(4,'LHD4','Probationary contracts'),(5,'LHD5','Internship contract'),(6,'LHD6','Indefinite term contract');
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
  `loai_danh_muc` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_khenthuongkiluat`
--

LOCK TABLES `phanloai_khenthuongkiluat` WRITE;
/*!40000 ALTER TABLE `phanloai_khenthuongkiluat` DISABLE KEYS */;
INSERT INTO `phanloai_khenthuongkiluat` VALUES (1,'Excellent Employee Award 1/2021',_binary ''),(2,'Excellent Employee Award 2/2021',_binary ''),(3,'Excellent Employee Award 3/2021',_binary ''),(4,'Excellent Employee Award 4/2021',_binary ''),(5,'Excellent Employee Award 5/2021',_binary ''),(6,'Excellent Employee Award 6/2021',_binary ''),(7,'Excellent Employee Award 7/2021',_binary ''),(8,'Excellent Employee Award 8/2021',_binary ''),(9,'Excellent Employee Award 9/2021',_binary ''),(10,'Excellent Employee Award 10/2021',_binary ''),(11,'Excellent Employee Award 11/2021',_binary ''),(12,'Excellent Employee Award 12/2021',_binary ''),(13,'Excellent Employee Award quarter 1/2021',_binary ''),(14,'Excellent Employee Award quarter 2/2021',_binary ''),(15,'Excellent Employee Award quarter 3/2021',_binary ''),(16,'Excellent Employee Award quarter 4/2021',_binary ''),(17,'Excellent Employee Award in 2021',_binary ''),(18,'Discipline employees who are late to work',_binary '\0'),(19,'Discipline undervalued employees',_binary '\0'),(20,'Discipline else',_binary '\0');
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_ngaynghi`
--

LOCK TABLES `phanloai_ngaynghi` WRITE;
/*!40000 ALTER TABLE `phanloai_ngaynghi` DISABLE KEYS */;
INSERT INTO `phanloai_ngaynghi` VALUES (1,'Leave full day'),(2,'Leave slot 1'),(3,'Leave slot 2'),(4,'Leave slot 3'),(5,'Leave slot 4'),(6,'Leave slot 5'),(7,'Leave morning slot'),(8,'Leave afternoon slot'),(9,'Maternity leave'),(11,'Unpaid leave');
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
INSERT INTO `phanloai_ngaynghile` VALUES (1,'2022-01-29','Tet holiday'),(2,'2022-01-30','Tet holiday'),(3,'2022-01-31','Tet holiday'),(4,'2022-02-01','Tet holiday'),(5,'2022-02-02','Tet holiday'),(6,'2022-02-03','Tet holiday'),(7,'2022-02-04','Tet holiday'),(8,'2022-02-05','Tet holiday'),(9,'2022-02-06','Tet holiday'),(10,'2022-04-10','Ancestor\'s death anniversary'),(11,'2022-04-30','The South revolution'),(12,'2022-05-01','International Labor'),(13,'2022-09-02','National Day');
/*!40000 ALTER TABLE `phanloai_ngaynghile` ENABLE KEYS */;
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
INSERT INTO `phanloai_phongban` VALUES (1,'PB01','Human Resource-Administration Department'),(2,'PB02','Legal Department'),(3,'PB03','Finance-Accounting Department'),(4,'PB04','Technical Department'),(5,'PB05','Planning Department'),(6,'PB06','Audit Department'),(7,'PB07','Sales Department'),(8,'PB08','Toefl Department'),(9,'PB09','Toeic Department'),(10,'PB10','SAT Department'),(11,'PB11','ESOL Department'),(12,'PB12','Ielts Department'),(13,'PB13','Executive Board');
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
INSERT INTO `phanloai_phonghoc` VALUES (1,'PH1','Room 1'),(2,'PH2','Room 2'),(3,'PH3','Room 3'),(4,'PH4','Room 4'),(5,'PH5','Room 5'),(6,'PH6','Room 6'),(7,'PH7','Room 7'),(8,'PH8','Room 8'),(9,'PH9','Room 9'),(10,'PH10','Room 10');
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
INSERT INTO `phanloai_quoctich` VALUES (1,'Australia'),(2,'Canada'),(3,'England'),(4,'France'),(5,'Malaysia'),(6,'Philippines'),(7,'Singapore'),(8,'Spain'),(9,'US'),(10,'Vietnam');
/*!40000 ALTER TABLE `phanloai_quoctich` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanloai_thongbao`
--

DROP TABLE IF EXISTS `phanloai_thongbao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanloai_thongbao` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `thong_bao` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_role` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_acc_idx` (`id_role`),
  CONSTRAINT `fk_id_acc` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanloai_thongbao`
--

LOCK TABLES `phanloai_thongbao` WRITE;
/*!40000 ALTER TABLE `phanloai_thongbao` DISABLE KEYS */;
INSERT INTO `phanloai_thongbao` VALUES (1,'Sửa mật khẩu',1),(2,'Request nghỉ',3),(3,'Accept nghỉ',2),(4,'Reject nghỉ',2);
/*!40000 ALTER TABLE `phanloai_thongbao` ENABLE KEYS */;
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
INSERT INTO `phanloai_tinhchathopdong` VALUES (1,'Official'),(2,'Probationary'),(3,'Internship');
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
INSERT INTO `phanloai_tinhtranghonnhan` VALUES (1,'Single'),(2,'Married');
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
INSERT INTO `phanloai_trinhdohocvan` VALUES (1,'Graduated from high school'),(2,'Graduated from university'),(3,'Graduated from college'),(4,'Master'),(5,'Dr');
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
  `id_chuc_vu` int unsigned NOT NULL,
  `ngay_vao` date NOT NULL,
  `ngay_ra` date DEFAULT NULL,
  `trang_thai` bit(1) NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Fk_PhongBan_idx` (`id_phong_ban`),
  KEY `FK_MaNV_qtct_idx` (`ma_nv`),
  KEY `fk_chuc_vu_idx` (`id_chuc_vu`),
  CONSTRAINT `fk_chucvu_qtct` FOREIGN KEY (`id_chuc_vu`) REFERENCES `phanloai_chucvu` (`id`),
  CONSTRAINT `FK_MaNV_qtct` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`),
  CONSTRAINT `Fk_PhongBan` FOREIGN KEY (`id_phong_ban`) REFERENCES `phanloai_phongban` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quatrinhcongtac`
--

LOCK TABLES `quatrinhcongtac` WRITE;
/*!40000 ALTER TABLE `quatrinhcongtac` DISABLE KEYS */;
INSERT INTO `quatrinhcongtac` VALUES (1,1,3,'2020-01-01',NULL,_binary '','NV6'),(2,2,3,'2021-01-01',NULL,_binary '','NV7'),(3,3,3,'2021-01-01',NULL,_binary '','NV8'),(4,4,3,'2022-01-01',NULL,_binary '','NV9'),(5,5,3,'2022-04-01',NULL,_binary '','NV10'),(6,6,3,'2022-04-01',NULL,_binary '','NV11'),(7,7,3,'2022-04-01',NULL,_binary '','NV12'),(8,8,3,'2022-04-01',NULL,_binary '','NV13'),(9,9,3,'2022-04-01',NULL,_binary '','NV14'),(10,10,3,'2022-04-01',NULL,_binary '','NV15'),(11,1,2,'2022-04-01',NULL,_binary '','NV16'),(12,2,2,'2022-04-01',NULL,_binary '','NV17'),(13,3,2,'2020-03-01',NULL,_binary '','NV18'),(14,4,2,'2021-01-01',NULL,_binary '','NV19'),(15,5,2,'2021-01-01',NULL,_binary '','NV20'),(16,6,2,'2021-01-01',NULL,_binary '','NV21'),(17,7,2,'2021-01-01',NULL,_binary '','NV22'),(18,8,2,'2021-01-01',NULL,_binary '','NV23'),(19,9,2,'2021-01-01',NULL,_binary '','NV24'),(20,10,2,'2021-01-01',NULL,_binary '','NV25'),(21,1,1,'2021-01-01',NULL,_binary '','NV26'),(22,2,1,'2021-01-01',NULL,_binary '','NV27'),(23,3,1,'2021-01-01',NULL,_binary '','NV28'),(24,4,1,'2021-01-01',NULL,_binary '','NV29'),(25,5,1,'2020-01-01',NULL,_binary '','NV30'),(26,6,1,'2021-04-01',NULL,_binary '','NV31'),(27,7,1,'2022-04-01',NULL,_binary '','NV32'),(28,1,1,'2022-04-01',NULL,_binary '','NV33'),(29,2,1,'2022-04-01',NULL,_binary '','NV34'),(30,3,1,'2022-04-01',NULL,_binary '','NV35'),(31,8,6,'2021-12-01',NULL,_binary '','NV50'),(32,4,1,'2022-04-01',NULL,_binary '','NV36'),(33,5,1,'2022-04-01',NULL,_binary '','NV37'),(34,6,1,'2021-01-01',NULL,_binary '','NV38'),(35,7,1,'2021-01-01',NULL,_binary '','NV39'),(36,1,1,'2022-04-01',NULL,_binary '','NV40'),(37,2,1,'2022-04-01',NULL,_binary '','NV41'),(38,3,1,'2022-04-01',NULL,_binary '','NV42'),(39,4,1,'2022-04-01',NULL,_binary '','NV43'),(40,5,1,'2022-04-01',NULL,_binary '','NV44'),(41,6,1,'2022-04-01',NULL,_binary '','NV45'),(42,10,6,'2021-01-01',NULL,_binary '','NV46'),(43,9,6,'2022-02-01',NULL,_binary '','NV47'),(44,8,6,'2019-01-01',NULL,_binary '\0','NV48'),(45,10,6,'2021-12-01',NULL,_binary '','NV49'),(46,11,6,'2021-01-01',NULL,_binary '\0','NV4'),(47,12,6,'2021-01-01',NULL,_binary '','NV5'),(48,13,5,'2019-01-01',NULL,_binary '','NV1'),(49,13,4,'2020-01-01',NULL,_binary '','NV2'),(50,13,4,'2019-01-01',NULL,_binary '','NV3');
/*!40000 ALTER TABLE `quatrinhcongtac` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Admin'),(2,'Employee'),(3,'Manager');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
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
-- Table structure for table `thongbao`
--

DROP TABLE IF EXISTS `thongbao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thongbao` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `id_loai_tb` int unsigned NOT NULL,
  `ma_nv` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `trang_thai` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Id_thongbao_idx` (`id_loai_tb`),
  KEY `fk_ma_nv_tb_idx` (`ma_nv`),
  CONSTRAINT `fk_id_thongbao` FOREIGN KEY (`id_loai_tb`) REFERENCES `phanloai_thongbao` (`id`),
  CONSTRAINT `fk_ma_nv_tb` FOREIGN KEY (`ma_nv`) REFERENCES `nhanvien` (`ma_nv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thongbao`
--

LOCK TABLES `thongbao` WRITE;
/*!40000 ALTER TABLE `thongbao` DISABLE KEYS */;
/*!40000 ALTER TABLE `thongbao` ENABLE KEYS */;
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
INSERT INTO `trinhdovanhoa` VALUES (1,2,4,3,'FTU',2015,2019,'NV6'),(2,2,2,3,'NEU',2015,2019,'NV11'),(3,2,2,3,'NEU',2015,2019,'NV16'),(4,2,5,3,'FTU',2015,2019,'NV26'),(5,2,2,3,'ULIS',2015,2019,'NV33'),(6,2,4,3,'ULIS',2015,2019,'NV40'),(7,1,2,3,'FTU',2015,2019,'NV7'),(8,1,4,3,'FTU',2015,2019,'NV17'),(9,1,2,3,'FTU',2015,2019,'NV27'),(10,1,2,3,'FTU',2015,2019,'NV34'),(11,1,2,3,'FTU',2015,2019,'NV41'),(12,1,2,3,'DAV',2015,2019,'NV8'),(13,1,2,3,'FTU',2015,2019,'NV18'),(14,1,2,3,'FTU',2015,2019,'NV28'),(15,1,2,3,'FTU',2015,2019,'NV35'),(16,1,2,3,'FTU',2015,2019,'NV42'),(17,6,2,3,'FPT',2015,2019,'NV9'),(18,6,2,3,'FPT',2015,2019,'NV19'),(19,6,2,3,'FPT',2015,2019,'NV29'),(20,6,2,3,'FPT',2015,2019,'NV36'),(21,6,2,3,'FPT',2015,2019,'NV43'),(22,3,2,3,'FPT',2015,2019,'NV10'),(23,3,2,3,'FPT',2015,2019,'NV20'),(24,3,2,3,'DAV',2015,2019,'NV37'),(25,3,2,3,'FPT',2015,2019,'NV44'),(26,7,2,3,'FTU',2015,2019,'NV25'),(27,2,2,3,'FTU',2015,2019,'NV21'),(28,2,2,3,'FTU',2015,2019,'NV31'),(29,2,2,3,'FTU',2015,2019,'NV38'),(30,2,2,3,'FTU',2015,2019,'NV45'),(31,6,2,3,'FPU',2015,2019,'NV30'),(32,4,2,3,'FTU',2015,2019,'NV12'),(33,5,2,3,'FTU',2015,2019,'NV22'),(34,4,2,3,'NEU',2015,2019,'NV32'),(35,5,2,3,'FTU',2015,2019,'NV39'),(36,4,4,4,'Edinburgh',2012,2016,'NV46'),(37,7,4,4,'Leeds',2013,2017,'NV4'),(38,7,5,4,'Oxford',2010,2014,'NV5'),(39,7,2,3,'FTU',2015,2019,'NV13'),(40,7,2,3,'FTU',2015,2019,'NV23'),(41,7,4,2,'Lyon',2012,2016,'NV47'),(42,7,4,3,'Durham',2014,2018,'NV48'),(43,7,4,4,'Nottingham',2015,2019,'NV49'),(44,7,5,3,'Nottingham',2017,2021,'NV50'),(45,7,2,3,'FPT',2015,2019,'NV14'),(46,7,2,3,'HLU',2015,2019,'NV24'),(47,7,2,3,'FPT',2015,2019,'NV15'),(48,6,2,3,'FPT',2015,2019,'NV1'),(49,3,2,3,'FTU',2015,2019,'NV2'),(50,4,2,3,'FPT',2015,2019,'NV3');
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

-- Dump completed on 2022-05-18  0:09:58
