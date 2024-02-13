from django.urls import path

from .views import CreatePostView, ListPostView, RetrievePostView


app_name = 'posts'

urlpatterns = [
    path('get_posts/', ListPostView.as_view(), name='get_posts'),
    path('post_detail/<int:pk>', RetrievePostView.as_view(), name='post_detail'),

    path('create_post/', CreatePostView.as_view(), name='create_post')
]
