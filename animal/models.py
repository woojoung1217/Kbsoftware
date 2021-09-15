from django.db import models

class Post(models.Model):
  # 동물 이름
  name = models.CharField(max_length=20)
  # 동물 종
  species = models.CharField(max_length=20)
  # 위치
  location = models.CharField(max_length=30)
  # 해쉬태그
  hash_tag = models.CharField(max_length=30)
  # 사진
  image = models.ImageField(upload_to='post/', blank=True, null=True)
  # 작성자

  def __str__(self):
    return self.name