from django.db import models

# Create your models here.

class cart(models.Model):
    userid=models.IntegerField(default=0)
    productid=models.IntegerField(default=0,unique=True)
    quantity=models.IntegerField(default=0)