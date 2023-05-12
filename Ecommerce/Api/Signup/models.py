from django.db import models

# Create your models here.
class signup(models.Model):
    name = models.CharField(max_length=40)
    email = models.EmailField(default='', max_length=40)
    password = models.CharField(max_length=50)
    logged = models.BooleanField(default=False)
    superuser = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    def my_model_id(self):
        return self.id