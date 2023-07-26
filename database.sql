DROP DATABASE IF EXISTS `university`;

CREATE DATABASE university;
USE university;

CREATE TABLE `faculty` (
	id INT NOT NULL AUTO_INCREMENT,
    fac_name VARCHAR(100) NOT NULL,
    contact VARCHAR(100),
    building VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE `department` (
	id INT NOT NULL AUTO_INCREMENT,
    fac_id INT NOT NULL,
    dept_name VARCHAR(100) NOT NULL,
    contact VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (fac_id) REFERENCES faculty(id)
	-- ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE `instructor` (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
dept_id INT,
inst_name VARCHAR(30) NOT NULL,
contact VARCHAR(50) NOT NULL,
FOREIGN KEY (`dept_id`) REFERENCES `department` (`id`)
-- ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE `subject` (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
fac_id INT,
subj_name VARCHAR(100) NOT NULL,
subj_code VARCHAR(50) NOT NULL,
FOREIGN KEY (`fac_id`) REFERENCES `faculty` (`id`)
ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE TABLE `course` (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
subj_id INT,
inst_id INT,
course_name VARCHAR(100) NOT NULL,
course_code INT NOT NULL,
FOREIGN KEY (`subj_id`) REFERENCES `subject` (`id`),
FOREIGN KEY (`inst_id`) REFERENCES `instructor` (`id`)
-- ON UPDATE CASCADE ON DELETE RESTRICT
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
 
 INSERT INTO `department` (fac_id, dept_name, contact) VALUES 
 (9, "Computer Science", "cmps.okanagan@ubc.ca");

INSERT INTO `instructor` (dept_id, inst_name, contact) VALUES 
(1, "Yong Gao", "phone");

INSERT INTO `subject` (fac_id, subj_name, subj_code) VALUES
(9, "Computer Science", "COSC"),
(2, "Visual Arts", "VISA");

INSERT INTO `course` (subj_id, inst_id, course_name, course_code) VALUES 
(1, 1, "Software Construction", 210),
(2, 1, "Digital Media", 106);

