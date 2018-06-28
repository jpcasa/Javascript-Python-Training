from django.contrib import admin
from django.urls import include, path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings

from . import views

app_name = 'learning_site'

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.hello_world, name='home'),
    path('courses/', include('courses.urls', namespace='courses')),
    path('suggest/', views.suggestion_view, name='suggestion'),
]

urlpatterns += staticfiles_urlpatterns()

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ]+urlpatterns
