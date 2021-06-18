from django.db import models, reset_queries
import datetime
# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField(max_length=5000)
    description2  = models.TextField(max_length = 5000,default="")
    image1 = models.ImageField(upload_to="uploads",default="",null=True,blank=True)
    image2 = models.ImageField(upload_to="uploads",default="",null=True,blank=True)
    image3 = models.ImageField(upload_to="uploads",default="",null=True,blank=True)
    image4 = models.ImageField(upload_to="uploads",default="",null=True,blank=True)
    image5 = models.ImageField(upload_to="uploads",default="",null=True,blank=True)
    author = models.CharField(max_length=50)
    authorimage = models.ImageField(upload_to="resources",default="")
    date = models.DateField(default=datetime.date)
    time = models.TimeField(default=datetime.time)
    link1  = models.CharField(max_length=200,default="",null=True,blank=True)
    link2 = models.CharField(max_length=200,default="",null=True,blank=True)
    link3 = models.CharField(max_length=200,default="",null=True,blank=True)
    link4 = models.CharField(max_length=200,default="",null=True,blank=True)
    link5 = models.CharField(max_length=200,default="",null=True,blank=True)



    def __str__(self):
        return self.title