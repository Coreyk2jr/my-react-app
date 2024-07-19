from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import MessageSerializer

class HelloWorldView(APIView):
    def get(self, request):
        data = {'message': 'Every Journey Begins with a Single Step: Embrace the Learning Process'}
        serializer = MessageSerializer(data)
        return Response(serializer.data)

class GoodbyeView(APIView):
    def get(self, request):
        data = {'message': 'Mastery is a Journey Without End: Constant Growth Through Continuous Learning'}
        serializer = MessageSerializer(data)
        return Response(serializer.data)
