from django.contrib import admin
from django.urls import path, include
api_patterns = [
    path('', include('users.urls')),
]
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v0/', include(api_patterns)),
    path('', include('workouts.urls'))
]