
from django.urls import path
from .views import CartView

urlpatterns = [
    path('<int:userid>/', CartView.as_view()),
]