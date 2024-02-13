from rest_framework import serializers

from .models import Post


class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'desc', 'image', 'location']

    def create(self, validated_data):
        author = self.context['request'].user
        validated_data['author'] = author

        post = Post.objects.create(**validated_data)

        return post


class PostSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField('get_author')

    class Meta:
        model = Post
        fields = ['id', 'title', 'desc', 'image', 'author', 'location']

    def get_author(self, obj):
        return [obj.author.id, obj.author.username]
