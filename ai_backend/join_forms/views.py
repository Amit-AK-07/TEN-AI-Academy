from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import JoinForm
from .serializers import JoinFormSerializer


class JoinFormCreateView(generics.CreateAPIView):
    """
    Create a new join form application
    """
    queryset = JoinForm.objects.all()
    serializer_class = JoinFormSerializer
    permission_classes = [AllowAny]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {
                'message': 'Application submitted successfully!',
                'data': serializer.data
            },
            status=status.HTTP_201_CREATED,
            headers=headers
        )
