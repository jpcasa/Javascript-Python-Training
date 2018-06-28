from django.urls import path, include
from django.contrib import admin

from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.HomeView.as_view(), name='home'),
    path('hello/', views.HelloWorldView.as_view(), name='hello'),
    path('teams/', include('teams.urls', namespace='teams')),
]
