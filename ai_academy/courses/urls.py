from django.urls import path
from .views import TopicModelViewSet, InstructorViewSet

urlpatterns = [
    path('topics/', TopicModelViewSet.as_view({'get': 'list', 'post': 'create'}), name='topic-list'),
    path('topics/<int:pk>/', TopicModelViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='topic-detail'),
    path('instructors/', InstructorViewSet.as_view({'get': 'list', 'post': 'create'}), name='instructor'),
    path('instructors/<int:pk>/', InstructorViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update', 'delete': 'destroy'}), name='instructor')
]