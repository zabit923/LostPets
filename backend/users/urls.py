from django.urls import path

from .views import CurrentUserView, PhotoUpdateView


app_name = 'users'

urlpatterns = [
    path('account/', CurrentUserView.as_view(), name='account'),
    path('user_photo_update/', PhotoUpdateView.as_view(), name='user_photo_update'),
]
