from django.urls import path
from . import views

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('ros_bridge/', views.ros_bridge, name='ros_bridge'),
    # pages urls here
]
