from django.urls import path

from . import views

app_name = 'courses'

urlpatterns = [
    path('<int:course_pk>/t<int:step_pk>/', views.text_detail, name='text'),
    path('<int:course_pk>/q<int:step_pk>/', views.quiz_detail, name='quiz'),
    path('<int:course_pk>/edit_quiz/<int:quiz_pk>/', views.quiz_edit, name='edit_quiz'),
    path('<int:course_pk>/create_quiz/', views.quiz_create, name='create_quiz'),
    path('<int:quiz_pk>/create_question/<question_type>', views.create_question, name='create_question'),
    path('<int:quiz_pk>/edit_question/<question_pk>', views.edit_question, name='edit_question'),
    path('<int:question_pk>/create_answer/', views.create_answer, name='create_answer'),
    path('by/<teacher>/', views.courses_by_teacher, name='by_teacher'),
    path('search/', views.search, name='search'),
    path('<int:pk>', views.course_detail, name='detail'),
    path('', views.course_list, name='list'),
]
