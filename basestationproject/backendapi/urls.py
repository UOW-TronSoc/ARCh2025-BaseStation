from django.contrib import admin
from django.urls import path
from .views import RoverCommand, ArmOverview, ArmActivate, ArmDeactivate, RoverMove, RoverStart, RoverStop

urlpatterns = [
    path('api/command/', RoverCommand.as_view(), name='rover-command'),
    path('api/arm-overview/', ArmOverview.as_view(), name='rover-arm-overview'),
    path('api/arm/activate/', ArmActivate.as_view(), name='arm-activate'),
    path('api/arm/deactivate/', ArmDeactivate.as_view(), name='arm-deactivate'),
    path('api/rover/move/', RoverMove.as_view(), name='rover-move'),
    path('api/rover/start/', RoverStart.as_view(), name='rover-start'),
    path('api/rover/stop/', RoverStop.as_view(), name='rover-stop'),
]
