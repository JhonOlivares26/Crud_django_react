from rest_framework import serializers
from .models import Tarea

class TareasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        #fields = ('titulo', 'descripcion', 'completado')
        fields = "__all__"   #Selecciona todas las columnas de la tabla