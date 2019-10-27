from django.db import models


class Workout(models.Model):
    user = models.CharField(max_length=50)
    discipline = models.CharField(max_length=50)
    distance = models.FloatField()
