from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import action

from .models import signup
from .serializers import signupserializer
from rest_framework.views import APIView

# Create your views here.

# class SignupViewSet(viewsets.ModelViewSet):
#     queryset = signup.objects.all()
#     serializer_class = signupserializer


class signupviewset(APIView):
    # queryset = signup.objects.all()
    # serializer_class = signupserializer

    def get(self,request):
            sign = signup.objects.all()
            serializer = signupserializer(sign, many=True)
            return Response(serializer.data)

    def post(self, request):
        print(request.data.get('name'))
        if request.data.get('name'):
            # ,context={'request': request}
            
            serializer = signupserializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        else :
            print("1")
            # mail = request.POST.get('email')
            # passw = request.POST.get('password')
            # print("email: ",mail, "pass: ",passw)
            # log = signup.objects.filter(email=mail, password=passw).values().first()
            # if log:
            #     data = {
            #             'userid': log.id,
            #             'superuser': log.superuser,
            #         }
            #     print("data: ",data)
            #     return Response(data)
            # return Response("Not found")
            mail = request.data.get('email')
            passw = request.data.get('password')
            print("email:",mail,"pass: ",passw)
            signup_obj = signup.objects.filter(email=mail, password=passw).first()
            print(signup_obj)
            if signup_obj:
                data = {
                    'userid': signup_obj.id,
                    'superuser': signup_obj.superuser,
                }
                # print(data.userid)
                return Response(data)
            return Response("Not found")

        


    # def patch(self, request, loggedid):
    #     log = signup.objects.filter(id=loggedid)
    #     print(log)
    #     serializer = signupserializer(log.first(), request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    def patch(self, request):
        loggedid=request.data.get('id')
        log = signup.objects.filter(id=loggedid).first()
        print("log",log)
        serializer = signupserializer(log, request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)