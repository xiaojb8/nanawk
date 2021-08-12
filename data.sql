-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-08-12 13:31:02
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `nana`
--

-- --------------------------------------------------------

--
-- 表的结构 `consume`
--

CREATE TABLE `consume` (
  `id` bigint(20) NOT NULL,
  `userid` bigint(20) NOT NULL,
  `targetAgentId` bigint(20) DEFAULT NULL,
  `targetAgentAccount` text,
  `payType` int(11) NOT NULL COMMENT '消费类型(元)',
  `payAmount` decimal(10,2) NOT NULL COMMENT '消费(元)',
  `createTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '消费日期'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `consume`
--

INSERT INTO `consume` (`id`, `userid`, `targetAgentId`, `targetAgentAccount`, `payType`, `payAmount`, `createTime`) VALUES
(1, 1, 2, 'admin', 3, '-1000000.00', '2021-07-28 05:26:22'),
(2, 2, 2, 'admin', 3, '999999.00', '2021-07-28 05:26:22');

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `dictValue` int(11) NOT NULL,
  `dictName` text NOT NULL,
  `multiple` decimal(10,2) NOT NULL,
  `shows` int(11) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`dictValue`, `dictName`, `multiple`, `shows`) VALUES
(1, '超星', '1.00', 1),
(2, '智慧树(维护)', '1.00', 0);

-- --------------------------------------------------------

--
-- 表的结构 `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `userid` bigint(20) DEFAULT NULL,
  `platform` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0排队中 1已登录 2进行中 3考试中  4已完成 5异常',
  `school` text,
  `account` text NOT NULL,
  `password` text NOT NULL,
  `courseid` text NOT NULL,
  `clazzid` text,
  `coursename` text NOT NULL,
  `ms` int(11) NOT NULL DEFAULT '0',
  `cs` int(11) NOT NULL DEFAULT '0',
  `exam` text,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `account` text NOT NULL COMMENT '账号',
  `password` text NOT NULL COMMENT '密码',
  `nickname` text COMMENT '昵称',
  `qq` text COMMENT 'QQ号',
  `phone` text COMMENT '手机号码',
  `school` text COMMENT '学校',
  `price` decimal(10,2) NOT NULL COMMENT '单价',
  `consumed` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '已消费',
  `amount` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '余额',
  `token` text NOT NULL COMMENT 'token',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '状态',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '添加时间',
  `lasttime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '上次活跃时间',
  `levelid` int(11) NOT NULL DEFAULT '0' COMMENT '上家id',
  `permission` int(11) NOT NULL DEFAULT '0' COMMENT '开户权限',
  `remarks` text,
  `agentnum` bigint(20) NOT NULL DEFAULT '0',
  `ordernum` bigint(20) NOT NULL DEFAULT '0',
  `todayordernum` int(11) NOT NULL DEFAULT '0',
  `orderday` date DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `account`, `password`, `nickname`, `qq`, `phone`, `school`, `price`, `consumed`, `amount`, `token`, `status`, `addtime`, `lasttime`, `levelid`, `permission`, `remarks`, `agentnum`, `ordernum`, `todayordernum`, `orderday`) VALUES
(1, 'xiaoba', 'fd60430a95dcc3e08c213fd494752e45', '66', NULL, NULL, NULL, '0.20', '45.01', '8999335.39', '99327d6e7e95646f8ed188c42db250f7', 1, '2021-07-21 09:43:10', '2021-08-12 04:46:16', 0, 1, NULL, 1, 0, 0, NULL),
(2, 'admin', 'a66abb5684c45962d887564f08346e8d', NULL, NULL, NULL, NULL, '0.20', '0.00', '999999.00', '555b5629c5334b99ba22813686c67b50', 1, '2021-07-28 05:21:19', '2021-07-28 05:21:19', 1, 1, NULL, 0, 0, 0, NULL);

--
-- 转储表的索引
--

--
-- 表的索引 `consume`
--
ALTER TABLE `consume`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`dictValue`);

--
-- 表的索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `consume`
--
ALTER TABLE `consume`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `dictValue` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
