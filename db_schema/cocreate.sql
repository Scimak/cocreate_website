-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2026 at 06:10 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cocreate`
--
CREATE DATABASE IF NOT EXISTS `cocreate` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `cocreate`;

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE IF NOT EXISTS `projects` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` text NOT NULL,
  `project_date` date NOT NULL,
  `project_description` text NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


-- Dumping data for table `projects`
--

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

CREATE TABLE IF NOT EXISTS `project_images` (
  `image_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `image_url` text NOT NULL,
  PRIMARY KEY (`image_id`),
  KEY `fk_project_images_project_id` (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `project_images`
--

--
-- Table structure for table `events`
CREATE TABLE IF NOT EXISTS `events`(
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) NOT NULL,
  `event_description` text NOT NULL,
  `event_url` text NOT NULL,
   PRIMARY KEY (`event_id`),
  KEY `fk_events_project_id` (`project_id`)

)ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `events`
--
INSERT INTO `events` (`event_id`, `project_id`, `event_description`, `event_url`) VALUES
(1, 1, 'Event 1 for project 1', 'uploads/images/example1.png'),
(2, 1, 'Event 2 for project 1', 'uploads/images/example1.png'),
(3, 2, 'Event 1 for project 2', 'uploads/images/example2.png'),
(4, 3, 'Event 1 for project 3', 'uploads/images/example3.png');
-- Constraints for dumped tables
--

--
-- Constraints for table `project_images`
--
-- ALTER TABLE `project_images`
--   ADD CONSTRAINT `fk_project_images_project_id` FOREIGN KEY (`project_id`) REFERENCES `projects` (`project_id`) ON DELETE CASCADE;
-- COMMIT;

-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `fk_events_project_id` FOREIGN KEY (`project_id`) REFERENCES `projects` (`project_id`) ON DELETE CASCADE;
COMMIT;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
