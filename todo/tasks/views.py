from django.http import HttpResponse
from django.shortcuts import render
from .models import Task


def index(request):
    tasks = Task.objects.all()
    context = {"tasks": tasks}
    return render(request, "tasks.html", context)