SET NAMES UTF8;
DROP DATABE hero IF EXISTS;
CREATE DATABASE hero CHARSET=UTF8;
USE hero;

/**用户信息**/
CREATE TABLE hero_user(
uname varchar(16),
upwd INT,

