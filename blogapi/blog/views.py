from django.shortcuts import render
from rest_framework import viewsets
from .models import Blog
from .serializers import BlogSerializer
from blogapi.permissions import IsAdminorReadonly

# Create your views here.

class BlogViewset(viewsets.ModelViewSet):
    permission_classes =[IsAdminorReadonly]
    serializer_class = BlogSerializer
    queryset = Blog.objects.all()
    filterset_fields = ['title', "id","category"]
    search_fields = ['title']