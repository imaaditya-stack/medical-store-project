from django.db.models import fields
from rest_framework.serializers import ModelSerializer, CharField
from company.models import Company
from rest_framework import serializers


class CompanySerializer(ModelSerializer):

    class Meta:
        model = Company
        fields = '__all__'