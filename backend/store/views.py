# Django imports
from django.shortcuts import get_object_or_404, render
from django.contrib.auth.hashers import make_password, check_password
from django.contrib.auth import authenticate

# DRF imports
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import serializers, status, exceptions, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication

# Custom imports
from store.models import *
from store.serializers import *


class LoginView(APIView):
    """
    Login View
    Methods --> POST
    """
    def post(self, request, format=None):

        username = request.data.get('username')
        password = request.data.get('password')

        if (username is None) or (password is None):
            raise exceptions.AuthenticationFailed('USERNAME & PASSWORD REQUIRED')

        # authenticate user
        user = authenticate(username=username, password=password)

        if user is not None:

            # generate auth token
            try:
                token = Token.objects.get(user_id=user.id)
            except Token.DoesNotExist:
                token = Token.objects.create(user=user)

            serializer = StoreSerializer(user)
            return Response(data={'token': token.key, 'user': serializer.data}, status=status.HTTP_200_OK)

        else:
            return Response(data={'MSG': 'INVALID CREDENTIALS'}, status=status.HTTP_404_NOT_FOUND)


class AuthView(APIView):
    """
    Check if user is authenticated view by verifying token
    Methods --> GET
    """
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def get(self, request, format=None):
        return Response(data={'MSG': 'AUTHENTICATED USER'}, status=status.HTTP_200_OK)

class Logout(APIView):
    """
    Logout View
    Methods --> GET
    """
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def get(self, request, format=None):
        
        try:
            request.user.auth_token.delete()
        except MedicalStore.DoesNotExist:
            return Response({"MSG":"NO SUCH USER"},status=status.HTTP_400_BAD_REQUEST)
        
        return Response(status=status.HTTP_200_OK)
        

class StoreView(APIView):
    """
    Store View for crud operations
    Methods --> GET, POST, PUT, DELETE
    """
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]

    def get(self, request, format=None):

        stores = MedicalStore.objects.all()
        serializer = StoreSerializer(stores, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):

        serializer = StoreSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data={'RECORD':serializer.data, 'MSG': 'RECORD ADDED SUCCESSFULLY'}, status=status.HTTP_200_OK)
    
    def put(self, request, format=None):

        instance = get_object_or_404(MedicalStore, pk=request.data.get('id'))
        serializer = StoreSerializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data={'RECORD': serializer.data, 'MSG': 'RECORD UPDATED SUCCESSFULLY'}, status=status.HTTP_200_OK)

    
    def delete(self, request, format=None):

        instance = get_object_or_404(MedicalStore, pk=request.data.get('id'))
        instance.delete()
        return Response(data={'MSG': 'RECORD DELETED SUCCESSFULLY'}, status=status.HTTP_200_OK)

        
class StoreTypeListing(ListAPIView):
    """
    Retrieve All Store Types
    Methods --> GET
    """
    queryset = StoreType.objects.all()
    serializer_class = StoreTypeSerializer
    permission_classes = [IsAuthenticated,]
    authentication_classes = [TokenAuthentication,]


def ServeReactFrontend(request):
    return render(request, 'index.html')



