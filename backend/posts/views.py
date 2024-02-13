from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Post
from .serializers import CreatePostSerializer, PostSerializer


class CreatePostView(CreateAPIView):
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticated,]
    serializer_class = CreatePostSerializer


class ListPostView(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class RetrievePostView(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
