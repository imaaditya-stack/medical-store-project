from django.db import models
from django.utils import timezone
from django.conf import settings
from store.models import MedicalStore
from company.models import Company

class MedicineType(models.Model):
    medicine_type_name          =   models.CharField(max_length=255, default=None)
    description                 =   models.CharField(max_length=100, default=None)

    class Meta:
        db_table                =   'medicine_type'
        verbose_name            =   'medicine_type'
        verbose_name_plural     =   'medicine_types'

    def __str__(self):
        return str(self.medicine_type_name)      

        
class MedicineDetail(models.Model):
    medicine_name               =   models.CharField(max_length=60, default=None)
    medicine_details            =   models.CharField(max_length=100, default=None, null=True, blank=True)
    medicine_price              =   models.DecimalField(max_digits=5, decimal_places=2, default=None)
    medicine_quantity           =   models.IntegerField(null=True, blank=True)
    medicine_expiry_date        =   models.DateField()
    store_id                    =   models.ForeignKey(to=MedicalStore, on_delete=models.SET_NULL, null=True, blank=True, related_name="medicines")
    medicine_type_id            =   models.ForeignKey(to=MedicineType, on_delete=models.CASCADE, related_name="medicines")
    company_id                  =   models.ForeignKey(to=Company, on_delete=models.SET_NULL, related_name="medicines", null=True, blank=True)
    created_at                  =   models.DateTimeField(auto_now_add=True)
    modified_at                 =   models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table                =   'medicine_detail'
        verbose_name            =   'medicine_detail'
        verbose_name_plural     =   'medicine_details'
        ordering                =   ('-id',)


    def __str__(self):
        return str(self.medicine_name) 





