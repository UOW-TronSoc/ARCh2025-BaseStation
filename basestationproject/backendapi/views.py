from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serialisers import CommandSerializer



class RoverCommand(APIView):
    def post(self, request):
        serializer = CommandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ArmOverview(APIView):
    def get(self, request):
        data = {
            "arms": [
                {"id": 1, "status": "Active", "position": "Home"},
                {"id": 2, "status": "Inactive", "position": "Extended"},
            ]
        }
        return Response(data)