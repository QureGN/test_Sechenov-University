# Generated by Django 5.0.3 on 2024-07-11 14:18

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="patients",
            old_name="Departments",
            new_name="Department",
        ),
    ]