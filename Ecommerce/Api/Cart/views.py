from rest_framework.views import APIView
from rest_framework.response import Response
from .models import cart
from .serializers import CartSerializer

class CartView(APIView):
    def get(self, request, userid):
        carts = cart.objects.filter(userid=userid)
        serializer = CartSerializer(carts, many=True)
        return Response(serializer.data)
    
    def post(self, request, userid):
        serializer = CartSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(userid=userid)
            return Response(serializer.data)
        return Response(serializer.errors)
    
    # def patch(self, request, userid):
    #     carts = cartex.objects.filter(userid=userid)
    #     if not carts.exists():
    #         return Response("not found")

    #     cart = carts.first()
    #     serializer = CartSerializer(cart, data=request.data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    def patch(self, request, userid):
        carts = cart.objects.filter(userid=userid)
        if not carts.exists():
            return Response("not found")

        for cartex in carts:
            serializer = CartSerializer(cartex, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()

        return Response(serializer.data)


    def delete(self, request, userid):
        productid = request.query_params.get('productid', None)
        if not productid:
            return Response("productid is required")

        carts = cart.objects.filter(userid=userid, productid=productid)
        if not carts.exists():
            return Response("not found")

        carts.delete()
        return Response("deleted")