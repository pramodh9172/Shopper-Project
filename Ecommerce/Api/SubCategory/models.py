from django.db import models

# Create your models here.

class subcategory(models.Model):
    name=models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
    @property
    def my_model_id(self):
        return self.id