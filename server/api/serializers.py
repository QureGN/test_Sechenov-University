from rest_framework import serializers

from .models import *


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = ['id', 'Name','Sex', 'Department', 'Status',]
