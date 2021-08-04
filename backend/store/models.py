from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from store.managers import CustomManager

STORE_TYPE = (
    ("Hospital Medical Store", "Hospital Medical Store"),
    ("Own Medical Store", "Own Medical Store"),
    ("Chain Pharmacy Outlets", "Chain Pharmacy Outlets")
)

class StoreType(models.Model):
    type_name                   =   models.CharField(max_length=255, default=None, choices=STORE_TYPE)

    class Meta:
        db_table                =   'store_type'
        verbose_name            =   'store_type'
        verbose_name_plural     =   'store_types'

    def __str__(self):
        return str(self.type_name)      

        
class MedicalStore(AbstractBaseUser):
    store_name                  =   models.CharField(max_length=60, default=None)
    username                    =   models.CharField(max_length=45, default=None, unique=True)
    store_email_id              =   models.CharField(max_length=100, null=True, blank=True)
    mobile_number               =   models.CharField(max_length=45, default=None, null=True, blank=True)
    address_1                   =   models.CharField(max_length=100, default=None)
    address_2                   =   models.CharField(max_length=100, default=None, null=True, blank=True)
    store_license               =   models.IntegerField()
    store_type_id               =   models.ForeignKey(to=StoreType, on_delete=models.CASCADE, related_name="stores")
    store_registration_no       =   models.CharField(max_length=60, default=None, null=True, blank=True)
    created_at                  =   models.DateTimeField(auto_now_add=True)
    modified_at                 =   models.DateTimeField(auto_now_add=True)
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []

    objects = CustomManager()

    class Meta: 
        db_table                =   'medical_store'
        verbose_name            =   'medical_store'
        verbose_name_plural     =   'medical_stores'
        ordering                =   ('-id',)


    def __str__(self):
        return str(self.store_name) 





