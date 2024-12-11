from django.db import models

class Command(models.Model):
    command_type = models.CharField(max_length=120)
    value = models.CharField(max_length=120, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.command_type}: {self.value}"