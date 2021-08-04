from django.urls import path
from medicines.views import *

urlpatterns = [
    path('', MedicineView.as_view()),
    path('types/', MedicineTypeListing.as_view())
]
