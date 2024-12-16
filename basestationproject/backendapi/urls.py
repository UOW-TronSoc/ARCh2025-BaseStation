from django.urls import path
from .views import store_devices, get_devices

urlpatterns = [
    path("api/devices", get_devices, name="get_devices"),
    path("api/store-devices", store_devices, name="store_devices"),
]
