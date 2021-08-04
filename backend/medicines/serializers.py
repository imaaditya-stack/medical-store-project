from django.db.models import fields
from rest_framework.serializers import ModelSerializer, CharField
from medicines.models import *
from rest_framework import serializers

class MedicineSerializer(ModelSerializer):

    medicine_type_id_label = CharField(source='medicine_type_id.medicine_type_name', read_only=True)
    store_id_label = CharField(source='store_id.store_name', read_only=True)

    class Meta:
        model = MedicineDetail
        fields = '__all__'        

class MedicineTypeSerializer(ModelSerializer):

    class Meta:
        model = MedicineType
        fields = '__all__'