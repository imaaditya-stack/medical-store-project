# Generated by Django 3.2.5 on 2021-07-31 21:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='StoreType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_name', models.CharField(choices=[('Hospital Medical Store', 'Hospital Medical Store'), ('Own Medical Store', 'Own Medical Store'), ('Chain Pharmacy Outlets', 'Chain Pharmacy Outlets')], default=None, max_length=255)),
            ],
            options={
                'verbose_name': 'store_type',
                'verbose_name_plural': 'store_types',
                'db_table': 'store_type',
            },
        ),
        migrations.CreateModel(
            name='MedicalStore',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('store_name', models.CharField(default=None, max_length=60)),
                ('username', models.CharField(default=None, max_length=45, unique=True)),
                ('store_email_id', models.CharField(blank=True, max_length=100, null=True)),
                ('mobile_number', models.CharField(blank=True, default=None, max_length=45, null=True)),
                ('address_1', models.CharField(default=None, max_length=100)),
                ('address_2', models.CharField(blank=True, default=None, max_length=100, null=True)),
                ('store_license', models.IntegerField()),
                ('store_registration_no', models.CharField(blank=True, default=None, max_length=60, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now_add=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('store_type_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stores', to='store.storetype')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'medical_store',
                'verbose_name_plural': 'medical_stores',
                'db_table': 'medical_store',
            },
        ),
    ]