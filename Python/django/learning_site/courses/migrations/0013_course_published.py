# Generated by Django 2.0.6 on 2018-06-20 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0012_course_subject'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='published',
            field=models.BooleanField(default=False),
        ),
    ]
