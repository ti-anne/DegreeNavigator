DROP DATABASE IF EXISTS `university`;

CREATE DATABASE university;
USE university;

CREATE TABLE `faculty` (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    fac_name VARCHAR(100) NOT NULL,
    contact VARCHAR(100),
    building VARCHAR(50) NOT NULL,
    UNIQUE KEY `ix_fac_name` (`fac_name`),
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE `department` (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(100) NOT NULL,
    contact VARCHAR(100) NOT NULL,
    dept_fac VARCHAR(100) NOT NULL,
    UNIQUE KEY `ix_dept_name` (`dept_name`),
    PRIMARY KEY (id),
    FOREIGN KEY (`dept_fac`) REFERENCES `faculty` (`fac_name`)
	ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE `instructor` (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
inst_name VARCHAR(30) NOT NULL,
contact VARCHAR(50) NOT NULL,
inst_dept VARCHAR(100) NOT NULL,
FOREIGN KEY (`inst_dept`) REFERENCES `department` (`dept_name`)
ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE `subject` (
subject_id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
subj_name VARCHAR(100) NOT NULL,
subj_code VARCHAR(50) NOT NULL,
subj_fac VARCHAR(100) NOT NULL,
FOREIGN KEY (`subj_fac`) REFERENCES `faculty` (`fac_name`)
ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;


 
 INSERT INTO `faculty` (fac_name, contact, building) VALUES
 ("Irving K. Barber Faculty of Arts and Social Sciences", "fass.reception.ubco@ubc.ca", "Arts & Sciences Centre"),
 ("Faculty of Creative and Critical Studies", "fccs.ubco@ubc.ca", "Creative and Critical Studies"),
 ("Okanagan School of Education", "education.ubco@ubc.ca", "Engineering, Management & Education"),
 ("School of Engineering", "engineering.okanagan@ubc.ca", "Engineering, Management & Education"),
 ("School of Health and Exercise Sciences", "hes.undergrad@ubc.ca", "Arts"),
 ("School of Nursing", "nursing.info@ubc.ca&", "Arts"),
 ("School of Social Work", "ask.socialwork@ubc.ca", "Arts"),
 ("Faculty of Management", "fom.reception@ubc.ca", "Engineering, Management & Education"),
 ("Irving K. Barber Faculty of Science", "fos.reception.ubco@ubc.ca", "Arts & Sciences Centre"),
 ("Faculty of Medicine Southern Medical Program", "smp.information@ubc.ca", "Reichwald Health Sciences Centre"),
 ("College of Graduate Studies", "https://gradstudies.ok.ubc.ca/resources/forms/contact-us/", "Office Modular 2");
 
 INSERT INTO `department` (dept_name, contact, dept_fac) VALUES 
 ("Computer Science", "cmps.okanagan@ubc.ca", "Irving K. Barber Faculty of Science");

INSERT INTO `instructor` (inst_name, contact, inst_dept) VALUES 
("Yong Gao", "", "Computer Science");

INSERT INTO `subject` (subj_name, subj_code, subj_fac) VALUES
("Computer Science", "COSC", "Irving K. Barber Faculty of Science"),
("Visual Arts", "VISA", "Faculty of Creative and Critical Studies");

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'MYsqlDB!';
flush privileges;

