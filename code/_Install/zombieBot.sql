-- phpMyAdmin SQL Dump
-- version 3.5.8.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 20, 2013 at 04:47 PM
-- Server version: 5.5.32-0ubuntu0.13.04.1
-- PHP Version: 5.4.9-4ubuntu2.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `zombieBot`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'auto incrementing user_id of each user, unique index',
  `user_group` enum('user','dev','admin') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'user',
  `user_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s name',
  `user_password_hash` char(60) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s password in salted and hashed format',
  `user_email` varchar(64) COLLATE utf8_unicode_ci NOT NULL COMMENT 'user''s email',
  `user_active` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'user''s activation status',
  `user_activation_hash` varchar(40) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'user''s email verification hash string',
  `user_password_reset_hash` char(40) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'user''s password reset code',
  `user_password_reset_timestamp` bigint(20) DEFAULT NULL COMMENT 'timestamp of the password reset request',
  `user_rememberme_token` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'user''s remember-me cookie token',
  `user_registration_datetime` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `user_registration_ip` varchar(39) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0.0.0.0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='user data' AUTO_INCREMENT=17 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_group`, `user_name`, `user_password_hash`, `user_email`, `user_active`, `user_activation_hash`, `user_password_reset_hash`, `user_password_reset_timestamp`, `user_rememberme_token`, `user_registration_datetime`, `user_registration_ip`) VALUES
(1, 'user', 'improvshark', '$2y$10$YEthVgSwB0JXcgLYSL3bsusY8.1T8n/snYxM3djErspbMeNBi/.iK', 'moonyou1234321@gmail.com', 1, NULL, NULL, NULL, NULL, '2013-08-30 20:11:57', '127.0.0.1'),
(15, 'dev', 'dev', '$2y$10$9K.tTOQee9i5E.stRyGYq.pDtGCuHKkm2CngE3o04x8mmSCzckJUS', 'email@email.com', 1, '15da19425bead693802dd23d4cff26dbc4795c3d', NULL, NULL, NULL, '2013-09-20 16:34:52', '127.0.0.1'),
(14, 'admin', 'admin', '$2y$10$t.3p1aQxjKS3OH0mNFy0t.fxFFwnBeb6oNY.sgGXxm0XGyeehJySy', 'email@email.com', 1, NULL, NULL, NULL, NULL, '2013-09-20 16:34:15', '127.0.0.1'),
(4, 'dev', 'doug', '', 'email@email.com', 1, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0.0.0.0'),
(6, 'dev', 'apple', '', 'email@email.com', 1, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0.0.0.0'),
(8, 'user', 'pear', '', 'email@email.com', 1, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0.0.0.0'),
(11, 'dev', 'catWoman', '', 'email@email.com', 1, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0.0.0.0'),
(16, 'user', 'user', '$2y$10$prxRt269h1vq8Elujm3G4.e909j9xOCzkxRYkST3f.g4WQjHe/iZi', 'email@email.com', 1, '917dc973e2d754f9bc190885ed61a69a2579c4b5', NULL, NULL, NULL, '2013-09-20 16:35:28', '127.0.0.1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
