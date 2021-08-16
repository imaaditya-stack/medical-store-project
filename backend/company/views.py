from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.views import APIView

from company.models import Company
from company.serializers import CompanySerializer

class CompanyView(APIView):
    """
    Company View for crud operations
    Methods --> GET, POST, PUT, DELETE
    """
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def get(self, request, format=None):
        meds = Company.objects.all()
        serializer = CompanySerializer(meds, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):

        serializer = CompanySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data={'RECORD':serializer.data, 'MSG': 'RECORD ADDED SUCCESSFULLY'}, status=status.HTTP_200_OK)
    
    def put(self, request, format=None):

        instance = get_object_or_404(Company, pk=request.data.get('id'))
        serializer = CompanySerializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data={'RECORD': serializer.data, 'MSG': 'RECORD UPDATED SUCCESSFULLY'}, status=status.HTTP_200_OK)

    
    def delete(self, request, format=None):

        instance = get_object_or_404(Company, pk=request.data.get('id'))
        instance.delete()
        return Response(data={'MSG': 'RECORD DELETED SUCCESSFULLY'}, status=status.HTTP_200_OK)


