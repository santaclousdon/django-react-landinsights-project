# Generated by Django 4.2.7 on 2024-01-08 00:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_region_regionstatistics'),
    ]

    operations = [
        migrations.AddField(
            model_name='savedmarket',
            name='status',
            field=models.CharField(default='Backlog', max_length=1000),
        ),
    ]
