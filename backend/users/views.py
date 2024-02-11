from rest_framework.generics import RetrieveAPIView, UpdateAPIView
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer, UserUpdatePhotoSerializer
from .models import CustomUser


class CurrentUserView(RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user


class PhotoUpdateView(UpdateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserUpdatePhotoSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
