from django.db import models

# Create your models here.
# -- company
# ID
# COMPANY_NAME
# COMPANY_CODE
# COMPANY_WEBSITE
# LOCATION
# Below is the create company table script -
# CREATE TABLE `company` (
# `ID` INT NOT NULL AUTO_INCREMENT,
# `COMPANY_NAME` VARCHAR(60) NOT NULL,
# `COMPANY_CODE` VARCHAR(45) NOT NULL,
# `COMPANY_WEBSITE` VARCHAR(100) NOT NULL,
# `LOCATION` VARCHAR(45) NULL,
# PRIMARY KEY (`ID`),
# UNIQUE INDEX `COMPANY_CODE_UNIQUE` (`COMPANY_CODE` ASC));


class Company(models.Model):
    company_name = models.CharField(max_length=60)
    company_code = models.CharField(max_length=45, unique=True)
    company_website = models.CharField(max_length=100)
    location = models.CharField(max_length=45)

    def __str__(self):
        return str(self.company_name)