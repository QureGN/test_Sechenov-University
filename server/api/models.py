from django.db import models

# Create your models here.

class Patients(models.Model):
    Gender = (
        ('Male', 'Мужской'),
        ('Female', 'Женский'),
    )
     
    Name = models.CharField(max_length=30, verbose_name="Название_пациента")
    Sex = models.CharField(max_length=30, verbose_name=Gender)
    Department = models.CharField(max_length=30, verbose_name="Отдел")
    Status = models.CharField(max_length=30, verbose_name="Статус")
    class Meta:
        managed = True
        db_table = 'patients'
        verbose_name = "Пациент"
        verbose_name_plural = "Пациенты"
