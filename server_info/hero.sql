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
(NULL,'/image/main_image/bg.jpg'),
(NULL,'/image/main_image/bgc.jpg'),
(NULL,'/image/main_image/banner.png');

-- 商品产品信息
CREATE TABLE hero_shopping_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  new VARCHAR(128),
  pic1 VARCHAR(128),
  pic2 VARCHAR(128),
  details VARCHAR(128),
  price DECIMAL(10,2)
);
INSERT INTO hero_shopping_product VALUES
(NULL,1,'/image/shopping_image/new.png','/image/shopping_image/20180821105814_49552.big.jpg','/image/shopping_image/20180821105850_48074.big.jpg','灌篮高手球衣',499.00),
(NULL,2,'/image/shopping_image/new.png','/image/shopping_image/20180930200625_63096.big.jpg','/image/shopping_image/20180930200627_76295.big.jpg','欢迎来到野区 - 今晚一起狩猎T恤',150.00),
(NULL,3,'/image/shopping_image/new.png','/image/shopping_image/20180930202428_46084.big.jpg','/image/shopping_image/20180930202430_32088.big.jpg','洛与霞口袋T恤',150.00),
(NULL,4,'/image/shopping_image/new.png','/image/shopping_image/20180930213741_46277.big.jpg','/image/shopping_image/20180930213743_70428.big.jpg','布隆插画T恤',299.00),
(NULL,5,'/image/shopping_image/new.png','/image/shopping_image/20180930205317_52590.big.jpg','/image/shopping_image/20181008201420_93875.big.jpg','布里茨插画T恤',150.00),
(NULL,6,'/image/shopping_image/new.png','/image/shopping_image/20181105201119_74031.big.jpg','/image/shopping_image/20181105201121_17451.big.jpg','灌篮高手球衣',150.00),
(NULL,7,'/image/shopping_image/new.png','/image/shopping_image/20181229172247_79396.big.jpg','/image/shopping_image/20181229172250_89450.big.jpg','亚索插画T恤',250.00),
(NULL,8,'/image/shopping_image/new.png','/image/shopping_image/20181229172325_80433.big.jpg','/image/shopping_image/20181229172328_57968.big.jpg','欢迎来到野区 - 和你开个玩笑T恤-',300.00),
(NULL,9,'/image/shopping_image/new.png','/image/shopping_image/20190114180736_68095.big.jpg','/image/shopping_image/20190215000147_16850.big.jpg','K/DA T恤',200.00);

-- 商品详情信息
CREATE TABLE hero_shopping_details(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,
  pic VARCHAR(128)
); 
/**用户订单**/
CREATE TABLE xz_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);
