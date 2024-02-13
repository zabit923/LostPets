from django.urls import path

from .views import CurrentUserView, PhotoUpdateView, UserRegisterView


app_name = 'users'

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('account/', CurrentUserView.as_view(), name='account'),
    path('user_photo_update/', PhotoUpdateView.as_view(), name='user_photo_update'),
]
