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

DROP TABLE IF EXISTS `projects`;
CREATE TABLE IF NOT EXISTS `projects` (
  `project_id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` text NOT NULL,
  `project_date` date NOT NULL,
  `project_description` text NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `project_name`, `project_date`, `project_description`) VALUES
(1, 'test project 1', '2026-05-01', 'this is a test project'),
(2, 'test project 2', '2026-05-01', 'this is a test project'),
(3, 'test project 3', '2026-05-01', 'this is a test project'),
(6, 'test 4', '2025-05-07', 'this is test project from 2025.'),
(7, 'test 5', '2025-05-07', 'this is test project from 2025.'),
(8, 'test 6', '2025-05-07', 'this is test project from 2025.');

-- --------------------------------------------------------

--
-- Table structure for table `project_images`
--

DROP TABLE IF EXISTS `project_images`;
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

INSERT INTO `project_images` (`image_id`, `project_id`, `image_url`) VALUES
(2, 1, 'http://localhost/cocreate/uploads/images/example1.png'),
(3, 2, 'http://localhost/cocreate/uploads/images/example2.png'),
(4, 3, 'http://localhost/cocreate/uploads/images/example3.png');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `project_images`
--
ALTER TABLE `project_images`
  ADD CONSTRAINT `fk_project_images_project_id` FOREIGN KEY (`project_id`) REFERENCES `projects` (`project_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
