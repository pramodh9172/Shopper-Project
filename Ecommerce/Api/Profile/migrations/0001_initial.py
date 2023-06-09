# Generated by Django 4.2 on 2023-05-03 14:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Address', '0002_alter_address_pincode'),
    ]

    operations = [
        migrations.CreateModel(
            name='profilemodel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.IntegerField(default=0, unique=True)),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('phone', models.CharField(max_length=10)),
                ('address', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='Address.address')),
            ],
        ),
    ]
