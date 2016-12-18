
-- USE igo_test;

CREATE TABLE IF NOT EXISTS `requests_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100),
  `created_at` DATETIME,
  `updated_at` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `clients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100),
  `last_name` VARCHAR(100),
  `email` VARCHAR(50),
  `phone` VARCHAR(50),
  `created_at` DATETIME,
  `updated_at` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `agents` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100),
  `login` VARCHAR(100),
  `password` VARCHAR(100),
  `created_at` DATETIME,
  `updated_at` DATETIME,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `clients_requests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `agent_id` INT,
  `client_id` INT,
  `request_type_id` INT,
  `request_text` TEXT,
  `created_at` DATETIME,
  `updated_at` DATETIME,
  FOREIGN KEY (agent_id) REFERENCES agents(id),
  FOREIGN KEY (client_id) REFERENCES clients(id),
  FOREIGN KEY (request_type_id) REFERENCES requests_type(id),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE INDEX index_client_phone ON clients(phone);
