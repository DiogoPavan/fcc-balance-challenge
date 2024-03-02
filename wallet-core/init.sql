CREATE TABLE IF NOT EXISTS clients (
  id varchar(255) DEFAULT NULL,
  name varchar(255) DEFAULT NULL,
  email varchar(255) DEFAULT NULL,
  created_at date DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS accounts (
  id varchar(255) DEFAULT NULL,
  client_id varchar(255) DEFAULT NULL,
  balance int(11) DEFAULT NULL,
  created_at date DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
  id varchar(255) DEFAULT NULL,
  account_id_from varchar(255) DEFAULT NULL,
  account_id_to varchar(255) DEFAULT NULL,
  amount int(11) DEFAULT NULL,
  created_at date DEFAULT NULL
);

INSERT INTO clients (id,name,email,created_at) VALUES
	('d659652f-1682-420c-a17a-68f70e0d8da2','John Doe','john@j.com','2024-02-27'),
	('e6d12396-c93f-4041-b7ce-13d74398eab3','Jane Doe','jane@j.com','2024-02-27');

INSERT INTO accounts (id,client_id,balance,created_at) VALUES
	('bb903385-ac7c-45ee-a301-8a9a8efda508','d659652f-1682-420c-a17a-68f70e0d8da2',0,'2024-02-27'),
	('f0575e99-4e25-4066-9f26-90ac31563683','e6d12396-c93f-4041-b7ce-13d74398eab3',38,'2024-02-27');

INSERT INTO transactions (id,account_id_from,account_id_to,amount,created_at) VALUES
	('b3ca13e9-8d29-47d4-823c-efb13849263f','bb903385-ac7c-45ee-a301-8a9a8efda508','f0575e99-4e25-4066-9f26-90ac31563683',38,'2024-02-27');
	 
