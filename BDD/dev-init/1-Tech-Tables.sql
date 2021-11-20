DROP DATABASE IF EXISTS tech;
CREATE DATABASE IF NOT EXISTS tech;
USE tech;

-- -----------------------------------------------------
-- Table user
-- -----------------------------------------------------
CREATE TABLE users (
    id_user INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
    role INT NOT NULL,
    PRIMARY KEY (id_user)
);

-- -----------------------------------------------------
-- Table news
-- -----------------------------------------------------
CREATE TABLE news (
    id_news INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL,
    message VARCHAR(255) NOT NULL,
	date Date NOT NULL,
    PRIMARY KEY (id_news),
	CONSTRAINT fk_user_news
		FOREIGN KEY (id_user)
		REFERENCES users(id_user)
		ON DELETE NO ACTION
);

-- -----------------------------------------------------
-- Table comments
-- -----------------------------------------------------
CREATE TABLE comments (
    id_comment INT NOT NULL AUTO_INCREMENT,
    id_user INT NOT NULL,
    id_news INT NOT NULL,
    message VARCHAR(255) NOT NULL,
	date Date NOT NULL,
    PRIMARY KEY (id_comment),
	CONSTRAINT fk_user_comment
		FOREIGN KEY (id_user)
		REFERENCES users(id_user)
		ON DELETE NO ACTION,
    CONSTRAINT fk_news_comment
		FOREIGN KEY (id_news)
		REFERENCES news(id_news)
		ON DELETE NO ACTION
);

-- -----------------------------------------------------
-- Table marques
-- -----------------------------------------------------
CREATE TABLE marques (
    id_marque INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    date_creation Date NOT NULL,
    PRIMARY KEY (id_marque)
);

-- -----------------------------------------------------
-- Table types_produit
-- -----------------------------------------------------
CREATE TABLE types_produit (
    id_type INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    PRIMARY KEY (id_type)
);

-- -----------------------------------------------------
-- Table produits
-- -----------------------------------------------------
CREATE TABLE produits (
    id_produit INT NOT NULL AUTO_INCREMENT,
    id_marque INT NOT NULL,
    id_type INT NOT NULL,
    nom VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    prix DOUBLE NOT NULL,
    PRIMARY KEY (id_produit),
    	CONSTRAINT fk_marques_produits
		FOREIGN KEY (id_marque)
		REFERENCES marques(id_marque)
		ON DELETE NO ACTION,
    CONSTRAINT fk_types_produits
		FOREIGN KEY (id_type)
		REFERENCES types_produit(id_type)
		ON DELETE NO ACTION
);