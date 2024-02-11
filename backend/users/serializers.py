from rest_framework import serializers

from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'last_name', 'email', 'image', 'user']

    def create(self, validated_data):
        user = validated_data.pop('user')
        instance = super().create(validated_data)

        return instance


class UserUpdatePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['image']


class UserUpdateEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email']