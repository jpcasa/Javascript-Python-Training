# Generated by Django 2.0.6 on 2018-06-20 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0011_course_teacher'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='subject',
            field=models.CharField(default='', max_length=100),
        ),
    ]