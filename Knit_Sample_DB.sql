-- MySQL dump 10.13  Distrib 8.3.0, for macos14 (x86_64)
--
-- Host: localhost    Database: Knits_DB
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `car`
--

DROP TABLE IF EXISTS `car`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car` (
  `id` int NOT NULL,
  `capacity` int DEFAULT NULL,
  `depart_date` varchar(255) DEFAULT NULL,
  `depart_time` varchar(255) DEFAULT NULL,
  `driver_id` int DEFAULT NULL,
  `hangout_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKlolhfn4hivlmxajrirccbmsfc` (`driver_id`),
  KEY `FK19e166lrt9p0xudl4tovi2vbo` (`hangout_id`),
  CONSTRAINT `FK19e166lrt9p0xudl4tovi2vbo` FOREIGN KEY (`hangout_id`) REFERENCES `hangout` (`id`),
  CONSTRAINT `FKlolhfn4hivlmxajrirccbmsfc` FOREIGN KEY (`driver_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car`
--

LOCK TABLES `car` WRITE;
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
/*!40000 ALTER TABLE `car` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_people`
--

DROP TABLE IF EXISTS `car_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_people` (
  `id` int NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `car_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK9uga1t2v64cvi48r1c69kw2i9` (`car_id`),
  KEY `FKqfrow5a3wd020rkv76asujea6` (`user_id`),
  CONSTRAINT `FK9uga1t2v64cvi48r1c69kw2i9` FOREIGN KEY (`car_id`) REFERENCES `car` (`id`),
  CONSTRAINT `FKqfrow5a3wd020rkv76asujea6` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_people`
--

LOCK TABLES `car_people` WRITE;
/*!40000 ALTER TABLE `car_people` DISABLE KEYS */;
/*!40000 ALTER TABLE `car_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_people_seq`
--

DROP TABLE IF EXISTS `car_people_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_people_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_people_seq`
--

LOCK TABLES `car_people_seq` WRITE;
/*!40000 ALTER TABLE `car_people_seq` DISABLE KEYS */;
INSERT INTO `car_people_seq` VALUES (451);
/*!40000 ALTER TABLE `car_people_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_seq`
--

DROP TABLE IF EXISTS `car_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_seq`
--

LOCK TABLES `car_seq` WRITE;
/*!40000 ALTER TABLE `car_seq` DISABLE KEYS */;
INSERT INTO `car_seq` VALUES (401);
/*!40000 ALTER TABLE `car_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `following`
--

DROP TABLE IF EXISTS `following`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `following` (
  `id` int NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `following_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8mtuqxfx1t7gtaabu19q7qt6b` (`following_id`),
  KEY `FKe8xr7t6y8n6nktnsrpxmvubqt` (`user_id`),
  CONSTRAINT `FK8mtuqxfx1t7gtaabu19q7qt6b` FOREIGN KEY (`following_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKe8xr7t6y8n6nktnsrpxmvubqt` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `following`
--

LOCK TABLES `following` WRITE;
/*!40000 ALTER TABLE `following` DISABLE KEYS */;
INSERT INTO `following` VALUES (455,'2024-04-27',102,2),(457,'2024-04-27',102,153),(458,'2024-04-27',102,52),(460,'2024-04-27',102,152),(702,'2024-04-28',102,202),(703,'2024-04-28',102,203);
/*!40000 ALTER TABLE `following` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `following_seq`
--

DROP TABLE IF EXISTS `following_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `following_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `following_seq`
--

LOCK TABLES `following_seq` WRITE;
/*!40000 ALTER TABLE `following_seq` DISABLE KEYS */;
INSERT INTO `following_seq` VALUES (801);
/*!40000 ALTER TABLE `following_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hangout`
--

DROP TABLE IF EXISTS `hangout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hangout` (
  `id` int NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `host_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK856g2xiot6cblt1v7f9at8sk6` (`host_id`),
  CONSTRAINT `FK856g2xiot6cblt1v7f9at8sk6` FOREIGN KEY (`host_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hangout`
--

LOCK TABLES `hangout` WRITE;
/*!40000 ALTER TABLE `hangout` DISABLE KEYS */;
/*!40000 ALTER TABLE `hangout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hangout_seq`
--

DROP TABLE IF EXISTS `hangout_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hangout_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hangout_seq`
--

LOCK TABLES `hangout_seq` WRITE;
/*!40000 ALTER TABLE `hangout_seq` DISABLE KEYS */;
INSERT INTO `hangout_seq` VALUES (351);
/*!40000 ALTER TABLE `hangout_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL,
  `body` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK72mt33dhhs48hf9gcqrq4fxte` (`user_id`),
  CONSTRAINT `FK72mt33dhhs48hf9gcqrq4fxte` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (302,'Hello Welcome to Knits!','2024-04-27',102,'10:56:42'),(303,'Get started by creating a post on the feed page!','2024-04-27',102,'10:56:58'),(304,'Search for your friends on your profile page!','2024-04-27',102,'10:57:11');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_seq`
--

DROP TABLE IF EXISTS `post_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_seq`
--

LOCK TABLES `post_seq` WRITE;
/*!40000 ALTER TABLE `post_seq` DISABLE KEYS */;
INSERT INTO `post_seq` VALUES (451);
/*!40000 ALTER TABLE `post_seq` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `biography` varchar(255) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (2,'dr@e.com','Dlo','Russell','123','Lakers starting PG #1','Dlo'),(52,'ar@e.com','Austin','Reaves','123','Lakers Starting SG #15','Austin_Reaves'),(102,'Knits@admin.com','Knits','','Knits','Knits official account','Knits'),(152,'nr@e.com','Nas','Reed','123',NULL,'Nas_Reed'),(153,'gp@e.com','Gary','Payton','123','Short king','Gary_Payton'),(202,'jp@e.com','Jordan','Poole','123',NULL,'Jordan_Poole'),(203,'du@e.com','Default','User','123',NULL,'Default');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_seq`
--

DROP TABLE IF EXISTS `user_seq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_seq` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_seq`
--

LOCK TABLES `user_seq` WRITE;
/*!40000 ALTER TABLE `user_seq` DISABLE KEYS */;
INSERT INTO `user_seq` VALUES (301);
/*!40000 ALTER TABLE `user_seq` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-28 17:05:24
