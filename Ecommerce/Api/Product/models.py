from django.db import models
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

# Create your models here.

class products(models.Model):
    
    name=models.CharField(default='',max_length=50)
    price=models.IntegerField(default=0)
    details=models.TextField(default='',max_length=100)
    image=models.ImageField(default='',upload_to='uploaded_pics', height_field=None, width_field=None, max_length=None)
    category=models.ForeignKey('Category.category', default="", on_delete=models.CASCADE)
    subcategory=models.ForeignKey('SubCategory.subcategory',default="",on_delete=models.CASCADE)


    def __str__(self):
        return self.name
    
    @property
    def my_model_id(self):
        return self.id