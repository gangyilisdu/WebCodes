-- 创建 users 表
CREATE TABLE IF NOT EXISTS `users` (
  `id`          INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username`    VARCHAR(255)     NOT NULL,
  `password`    VARCHAR(255)     NOT NULL,
  `created_at`  DATETIME(3)      NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at`  DATETIME(3)      NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;