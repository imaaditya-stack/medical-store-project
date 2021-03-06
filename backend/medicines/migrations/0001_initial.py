# Generated by Django 3.2.5 on 2021-08-05 09:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MedicineType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medicine_type_name', models.CharField(default=None, max_length=255)),
                ('description', models.CharField(default=None, max_length=100)),
            ],
            options={
                'verbose_name': 'medicine_type',
                'verbose_name_plural': 'medicine_types',
                'db_table': 'medicine_type',
            },
        ),
        migrations.CreateModel(
            name='MedicineDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('medicine_name', models.CharField(default=None, max_length=60)),
                ('medicine_details', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('medicine_price', models.DecimalField(decimal_places=2, default=None, max_digits=5)),
                ('medicine_quantity', models.IntegerField(blank=True, null=True)),
                ('medicine_expiry_date', models.DateField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now_add=True)),
                ('medicine_type_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='medicines', to='medicines.medicinetype')),
                ('store_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='medicines', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'medicine_detail',
                'verbose_name_plural': 'medicine_details',
                'db_table': 'medicine_detail',
                'ordering': ('-id',),
            },
        ),
    ]
