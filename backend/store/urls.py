from django.urls import path
from store.views import *

urlpatterns = [
    path('login/', LoginView.as_view()),
    path('', StoreView.as_view()),
    path('types/', StoreTypeListing.as_view()),
    path('auth-check/', AuthView.as_view()),
    path('logout/', Logout.as_view())
]
