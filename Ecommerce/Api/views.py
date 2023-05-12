from django.shortcuts import render
from django.http import JsonResponse


def home(request):
    return JsonResponse({'Info':'React & Django project',
                         'name':'Pramodh'})