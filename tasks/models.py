from django.db import models

class Tarea(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    completado = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.titulo} --- {self.descripcion}"