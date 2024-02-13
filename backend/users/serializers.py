from rest_framework import serializers

from .models import CustomUser


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.CharField()
    age = serializers.IntegerField()

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'age', 'password', 'first_name', 'last_name']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = CustomUser
        fields = ['id', 'first_name', 'last_name', 'email', 'image', 'user']


class UserUpdatePhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['image']


class UserUpdateEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['email']