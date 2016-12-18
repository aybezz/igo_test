--
-- Dumping data for table `agents`
--
-- LOCK TABLES `agents` WRITE;
/*!40000 ALTER TABLE `agents` DISABLE KEYS */;
INSERT INTO `agents` VALUES (2,'Ayoub Ezzouine','aybezz','$2a$10$QbAvc8/8zZddNVFl2PeVd.fhWJZYG/doV3UsqE3cM0YWRiW81Vm.2','2016-12-16 22:44:32',NULL),(3,'Vallis Pariseau','vallis','$2a$10$y2DpKXM/Z0rhwhFoPgQCOOQ/IhPzL3S1cL.c7iSGdBQVyscc1AzY2','2016-12-16 00:03:23',NULL);
/*!40000 ALTER TABLE `agents` ENABLE KEYS */;
-- UNLOCK TABLES;


--
-- Dumping data for table `clients`
--

-- LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'Jim','Jhon','jhon@email.com','0611000000','2016-12-16 10:27:14','2016-12-17 19:37:51'),(2,'Iven','Huot','as@exemple.com','0128410181','2016-12-17 00:55:46','2016-12-17 19:30:04'),(3,'Philip','Paradis','PhilipParadis@jourrapide.com','0391689773','2016-12-17 18:27:20','2016-12-17 19:40:40');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
-- UNLOCK TABLES;


--
-- Dumping data for table `requests_type`
--
-- LOCK TABLES `requests_type` WRITE;
/*!40000 ALTER TABLE `requests_type` DISABLE KEYS */;
INSERT INTO `requests_type` VALUES (1,'Achat',NULL,NULL),(2,'Devis',NULL,NULL),(3,'Après-Vente',NULL,NULL),(4,'Réclamation',NULL,NULL);
/*!40000 ALTER TABLE `requests_type` ENABLE KEYS */;
-- UNLOCK TABLES;


--
-- Dumping data for table `clients_requests`
--
-- LOCK TABLES `clients_requests` WRITE;
/*!40000 ALTER TABLE `clients_requests` DISABLE KEYS */;
INSERT INTO `clients_requests` VALUES (1,3,1,1,'Achat d\'une Smart TV, LG','2016-12-16 00:31:24',NULL),(2,2,2,1,'Achat d\'une Smart TV, SAMSUNG','2016-12-16 00:55:46',NULL),(3,2,2,2,'Devis pour Voiture SUV RangeRover Evoque','2016-12-17 03:01:41',NULL),(4,3,2,1,'Achat RangeRover Evoque','2016-12-17 14:39:19',NULL),(5,2,1,3,'Configuration de l\'internet et installation des applications','2016-12-17 18:02:07',NULL),(6,2,2,3,'Maintenance ','2016-12-17 18:09:58',NULL),(7,2,2,4,'Réclamation','2016-12-17 19:30:04',NULL),(8,2,1,2,'Devis sur les produits auto','2016-12-17 19:37:51',NULL),(9,2,3,1,'Achat produit2','2016-12-17 19:40:40',NULL);
/*!40000 ALTER TABLE `clients_requests` ENABLE KEYS */;
-- UNLOCK TABLES;
