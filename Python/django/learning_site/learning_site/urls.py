from django.contrib import admin
from django.urls import include, path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from . import views

app_name = 'learning_site'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.hello_world, name='home'),
    path('courses/', include('courses.urls', namespace='courses')),
]

urlpatterns += staticfiles_urlpatterns()
