from django.urls import path
from .views import orderview

urlpatterns = [
    path('<int:userid>/', orderview.as_view()),
]   