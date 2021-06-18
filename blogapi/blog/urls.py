from django.urls import path,include
from . import views
from rest_framework.routers import DefaultRouter
from .views import BlogViewset

router = DefaultRouter()

router.register('blog',BlogViewset,basename="blogs")

urlpatterns = [
    path('',include(router.urls))
]