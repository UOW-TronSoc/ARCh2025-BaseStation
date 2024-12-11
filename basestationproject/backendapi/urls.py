from django.contrib import admin
from django.urls import path, include
from .views import RoverCommand, ArmOverview

urlpatterns = [
    path('api/command/', RoverCommand.as_view(), name='rover-command'),
    path('api/arm-overview/', ArmOverview.as_view(), name='rover-arm'),
    path('admin/', admin.site.urls),
]