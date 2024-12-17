from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.


@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})


@api_view(['GET'])
def ros_bridge(request):
    # Add your ROS bridge code here
    return Response({'message': 'ROS bridge'})

# backend functional code here or where you will post to
