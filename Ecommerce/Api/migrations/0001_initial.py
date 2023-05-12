# Generated by Django 4.2 on 2023-05-03 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.IntegerField(default=0)),
                ('productid', models.IntegerField(default=0, unique=True)),
                ('quantity', models.IntegerField(default=0)),
            ],
        ),
    ]
