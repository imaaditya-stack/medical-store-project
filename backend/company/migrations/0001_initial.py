# Generated by Django 3.2.5 on 2021-08-13 09:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=60)),
                ('company_code', models.CharField(max_length=45, unique=True)),
                ('company_website', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=45)),
            ],
        ),
    ]
