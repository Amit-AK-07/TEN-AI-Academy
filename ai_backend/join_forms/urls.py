from django.urls import path
from .views import JoinFormCreateView

urlpatterns = [
    path('submit/', JoinFormCreateView.as_view(), name='join-form-create'),
]