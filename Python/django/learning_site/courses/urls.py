from django.urls import path

from . import views

app_name = 'courses'

urlpatterns = [
    path('<int:course_pk>/<int:step_pk>/', views.step_detail, name='step'),
    path('<int:pk>', views.course_detail, name='detail'),
    path('', views.course_list, name='list'),
]
