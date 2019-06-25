SET NAMES UTF8;
DROP DATABASE IF EXISTS hero;
CREATE DATABASE hero CHARSET=UTF8;
USE hero;

/**用户信息**/
CREATE TABLE hero_user(
uid INT PRIMARY KEY AUTO_INCREMENT, 
uname varchar(16),
upwd INT,
email VARCHAR(64),
phone VARCHAR(16),
gender INT DEFAULT 0
);
/**用户信息**/
INSERT INTO hero_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '0');

/****首页图片****/
CREATE TABLE hero_main_image(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(128)
);
INSERT INTO hero_main_image VALUES
(NULL,'./image/main_image/bg.jpg'),
(NULL,'./image/main_image/bgc.jpg'),
(NULL,'./image/main_image/banner.jpg');


