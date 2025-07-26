from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .serializers import TopicSerializer, InstructorSerializer, PartnershipSerializer, CourseSerializer, CoursePageSerializer
from django.contrib.auth.decorators import permission_required
from django.shortcuts import get_object_or_404
from .models import Topic, Instructor, Partnership, Course, CoursePage

class TopicModelViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.queryset, many=True)
        return Response({"success": "Successfully retrieved all topics.",
                         "data": serializer.data}, status=status.HTTP_200_OK)
    
    def retrieve(self, request, *args, **kwargs):
        instance = get_object_or_404(self.queryset, pk=kwargs.get('pk'))
        serializer = self.get_serializer(instance)
        return Response({"success":"Successfully retrieved a topic",
                         "data": serializer.data}, status=status.HTTP_200_OK)

    # @permission_required('user.add_topic', raise_exception=True)
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        topic = serializer.save()
        return Response({"success": "Successfully added new topic.",
                         "data": self.get_serializer(topic).data}, status=status.HTTP_201_CREATED)
    
    # @permission_required('user.change_topic', raise_exception=True)
    def update(self, request, *args, **kwargs):
        instance = get_object_or_404(self.queryset, pk=kwargs.get('pk'))
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        topic = serializer.save()
        return Response({"success": "Successfully updated a topic.",
                        "data":self.get_serializer(topic).data}, status=status.HTTP_200_OK)
    
    # @permission_required('user.delete_topic', raise_exception=True)
    def destroy(self, request, *args, **kwargs):
        instance = get_object_or_404(self.queryset, pk=kwargs.get('pk'))
        instance.delete()
        return Response({"success": "Successfully deleted a topic."}, status=status.HTTP_204_NO_CONTENT)

class InstructorViewSet(viewsets.ModelViewSet):
    authentication_classes = []
    permission_classes = []
    http_method_names = ["get", "post", "put", "patch", "delete"]
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

    def list(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.queryset, many=True)
        return Response({"success": "Successfully retrieved all Instructors",
                        "data": serializer.data}, status=status.HTTP_200_OK)
    
    def retrieve(self, request, *args, **kwargs):
        instructor = get_object_or_404(Instructor, id=kwargs.get('pk'))
        serializer = self.get_serializer(instructor)
        return Response({"success": "Successfully retrieved an Instructor",
                         "data": serializer.data}, status=status.HTTP_200_OK)
    
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"success": "Successfully added new Instructor",
                         "data": serializer.data}, status=status.HTTP_201_CREATED)
    
    # @permission_required()
    def update(self, request, *args, **kwargs):
        instructor = get_object_or_404(Instructor, id=kwargs.get('pk'))
        serializer = self.get_serializer(instance=instructor, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"success": "Successfully updated an Instructor instance",
                         "data": serializer.data}, status=status.HTTP_202_ACCEPTED)
    
    # @permission_required()
    def destroy(self, request, *args, **kwargs):
        instructor = get_object_or_404(Instructor, id=kwargs.get('pk'))
        instructor.delete()
        return Response({"success": "Successfully deleted an Instructor."}, status=status.HTTP_204_NO_CONTENT)
    

    