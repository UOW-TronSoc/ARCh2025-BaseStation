from django.core.cache import cache
from django.http import JsonResponse

# View to store device data in Redis
def store_devices(request):
    devices = [
        {"name": "Function", "status": 15},
        {"name": "Function", "status": 63},
        {"name": "Function", "status": 41},
    ]
    cache.set("connected_devices", devices, timeout=None)  # Store in Redis
    return JsonResponse({"message": "Devices stored successfully!"})

# View to retrieve device data from Redis
def get_devices(request):
    devices = cache.get("connected_devices", [])  # Fetch from Redis
    return JsonResponse(devices, safe=False)
