from django.urls import path
from . import views

urlpatterns = [
    # API endpoint to store mock device data in Redis
    path("api/store-devices", views.store_devices, name="store_devices"),

    # API endpoint to fetch connected devices data from Redis
    path("api/devices", views.get_devices, name="get_devices"),

    # API endpoint to store robo spec (inventory) data in Redis
    path("api/store-specs", views.get_robo_specs, name="store_specs"),

    # API endpoint to fetch robo spec (inventory) data from Redis
    path("api/specs", views.get_specs, name="get_specs"),

    # Optional: Endpoints for connecting and disconnecting the rover
    path("api/connect", views.connect_rover, name="connect_rover"),
    path("api/disconnect", views.disconnect_rover, name="disconnect_rover"),
]
