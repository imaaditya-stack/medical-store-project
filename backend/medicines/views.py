# Django imports
from django.shortcuts import get_object_or_404
from django.contrib.auth.hashers import make_password, check_password

# DRF imports
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import serializers, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

# Custom imports
from medicines.models import *
from medicines.serializers import *


class MedicineView(APIView):
    """
    Medicine View for crud operations
    Methods --> GET, POST, PUT, DELETE
    """
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def get(self, request, format=None):
        meds = MedicineDetail.objects.all()
        serializer = MedicineSerializer(meds, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):

        serializer = MedicineSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data={'RECORD':serializer.data, 'MSG': 'RECORD ADDED SUCCESSFULLY'}, status=status.HTTP_200_OK)
    
    def put(self, request, format=None):

        instance = get_object_or_404(MedicineDetail, pk=request.data.get('id'))
        serializer = MedicineSerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data={'RECORD': serializer.data, 'MSG': 'RECORD UPDATED SUCCESSFULLY'}, status=status.HTTP_200_OK)

    
    def delete(self, request, format=None):

        instance = get_object_or_404(MedicineDetail, pk=request.data.get('id'))
        instance.delete()
        return Response(data={'MSG': 'RECORD DELETED SUCCESSFULLY'}, status=status.HTTP_200_OK)

        

class MedicineTypeListing(ListAPIView):
    """
    Retrieve All Medicine Types
    Methods --> GET
    """
    queryset = MedicineType.objects.all()
    serializer_class = MedicineTypeSerializer
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]



