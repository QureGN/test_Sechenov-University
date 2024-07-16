from django.shortcuts import render
from rest_framework.decorators import api_view 
from rest_framework.response import Response 
from api.models import * 
from api.serializers import PatientSerializer
from rest_framework import status
# Create your views here.

@api_view(["GET"]) 
def Patient_Get(request): 
   
    patients = Patients.objects.all().order_by('id') 
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data, status=status.HTTP_201_CREATED) 
 
@api_view(["POST"]) 
def Patient_Post(request): 
    patients = PatientSerializer(data=request.data)
    if patients.is_valid():
        patients.save()
        return Response(patients.data
                    , status=status.HTTP_201_CREATED)
    else:
        return Response(patients.errors, status=status.HTTP_400_BAD_REQUEST)
 