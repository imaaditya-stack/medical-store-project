from django.db.models import fields
from rest_framework.serializers import ModelSerializer, CharField
from store.models import *
from rest_framework import serializers
from django.contrib.auth.hashers import make_password

class StoreSerializer(ModelSerializer):

    store_type_label = serializers.CharField(source='store_type_id.type_name', read_only=True)

    class Meta:
        model = MedicalStore
        fields = '__all__' 
        extra_kwargs = {
            'password': {'write_only': True},
        }   
        
    def validate_password(self, value):
        return make_password(value)

class StoreTypeSerializer(ModelSerializer):

    class Meta:
        model = StoreType
        fields = '__all__'