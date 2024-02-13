from django.db import models

from users.models import CustomUser


class Post(models.Model):
    title = models.CharField('Название', max_length=155)
    desc = models.TextField('Описание')
    location = models.CharField('Локация', max_length=255)
    image = models.CharField('Изображение', max_length=255)
    author = models.ForeignKey(CustomUser, verbose_name='Автор', on_delete=models.CASCADE, related_name='posts')

    def __str__(self):
        return f'{self.title} - {self.author}'

    class Meta:
        verbose_name = 'Публикация'
        verbose_name_plural = 'Публикации'
