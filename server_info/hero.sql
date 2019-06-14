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
gender INT
);
/**用户信息**/
INSERT INTO hero_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', '0');
/****首页轮播图片****/
CREATE TABLE hero_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页图片****/
CREATE TABLE hero_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  href VARCHAR(128)
);


