from django.urls import path
from company.views import *

urlpatterns = [
    path('', CompanyView.as_view())
]
