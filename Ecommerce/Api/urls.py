
# from .Product import views
from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import static



urlpatterns = [
    # path('http://localhost:3001/AddProduct', views.Products),

    path('category/',include('Api.Category.urls')),
    path('login/',include('Api.Login.urls')),
    path('signup/',include('Api.Signup.urls')),
    path('product/',include('Api.Product.urls')),
    path('carts/',include('Api.Carts.urls')),
    path('cart/',include('Api.Cart.urls')),
    # path('cartitem/',include('Api.Cartitem.urls')),
    path('order/',include('Api.Order.urls')),
    path('address/',include('Api.Address.urls')),
    path('profile/',include('Api.Profile.urls')),
    path('subcategory/',include('Api.SubCategory.urls')),
]