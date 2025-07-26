from django.urls import path
from .views import TopicModelViewSet, InstructorViewSet, PartnershipViewSet, CourseViewSet, CoursePageViewSet

urlpatterns = [
    path('topics/', TopicModelViewSet.as_view({'get': 'list', 'post': 'create'}), name='topic-list'),
    path('topic/<int:pk>/', TopicModelViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='topic'),
    path('instructors/', InstructorViewSet.as_view({'get': 'list', 'post': 'create'}), name='instructors'),
    path('instructor/<int:pk>/', InstructorViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update', 'delete': 'destroy'}), name='instructor'),
    path('partners/', PartnershipViewSet.as_view({'get': 'list', 'post': 'create'}), name='partners'),
    path('partner/<int:pk>/', PartnershipViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update', 'delete': 'destroy'}), name='partner'),
    path('courses/', CourseViewSet.as_view({'get': 'list', 'post': 'create'}), name='courses'),
    path('course/<uuid:uuid>/', CourseViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update', 'delete': 'destroy'}), name='course'),
    path('course-pages/', CoursePageViewSet.as_view({'get': 'list', 'post': 'create'}), name='course_pages'),
    path('course-page/<int:pk>/', CoursePageViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'update', 'delete': 'destroy'}), name='course_page'),
]