-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: sector
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20230222080638-create-user.js'),('20230222082524-create-user.js'),('20230224132641-create-user.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `registration_date` datetime DEFAULT NULL,
  `hashed_password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Emily','Parker','parker@gmail.com','female','parker.jpg','2023-02-24 13:28:36','$2a$07$N88fwIxn5hzBm.bonYn/I.rzGkgIMpQZy4GHShyTaStZ0KB2vRdfi'),(2,'Ethan','Thomas','thomas@gmail.com','male','thomas.jpg','2023-02-24 13:28:36','$2a$07$XcdzVafJ/8HqpSc3xmtusOsy9Fqk9EZnZ6zXaFOOzToWmcVgVXb1O'),(3,'Jasmine','Rodriguez','jasmine@gmail.com','female','jasmine.jpg','2023-02-24 13:28:36','$2a$07$gwzPeACxQ6Mu9TQ9JENV3elXJldntrt/s53fnnO42h5V1EymT7QSe'),(4,'Ava','Gonzalez','gonzales@gmail.com','female','gonzales.jpg','2023-02-24 13:28:36','$2a$07$U98dWU11x0/mnCF27MWemeUHaCx2V/pDt8EAnvsDfxuEotTidoMBG'),(5,'Daniel','Martinez','martinez@gmail.com','male','martinez.jpg','2023-02-24 13:28:36','$2a$07$kwncuEfQVkNXihIvoPhcZ.q3SkxOmasNTPJ5fCGNH4.cGyCJPQTUO'),(6,'David','Hernandez','hernandez@gmail.com','male','hernandez.jpg','2023-02-24 13:28:36','$2a$07$LBqSA0RB.1VdJYmbV9/VP.1u8c228Vfrd8UfQ4oMoj/VyyCaPwEYG'),(7,'Michael','Johnson','johnson@gmail.com','male','johnson.jpg','2023-02-24 13:28:36','$2a$07$DcMQBSa4jJxeh1homys35uBWkmLp4EEN/Tnaxy8I0HCJdeUhGuA.y'),(8,'Maya','Taylor','taylor@gmail.com','female','taylor.png','2023-02-24 13:28:36','$2a$07$beFJeD0vuvAyJ5Oh3ZVsDOSOUfNiAX/40Yw.nRNEY7VLGlAqvLNAC'),(9,'Jonathan','Martin','martin@gmail.com','male','martin.jpg','2023-02-24 13:28:36','$2a$07$fqiKlc1GhC..yd0GFia7GOtvy0IZh9O777AzrdIfplBa4By6C6FVi'),(10,'Zoey','Wilson','wilson@gmail.com','male','wilson.jpg','2023-02-24 13:28:36','$2a$07$0oxiA.L10coi.oTV621eY.zJmqTGpCfOJFOsMx94I522gDlBUSpAe');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-26 12:47:35
