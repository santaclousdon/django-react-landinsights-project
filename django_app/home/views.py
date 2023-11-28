from django.shortcuts import render
from django.http import HttpResponse, HttpResponseForbidden, JsonResponse


def Index(request, param="", param2="", param3="", param4="", param5="", param6=""):
    if "HTTP_HOST" not in request.META:
        return HttpResponseForbidden()

    if request.META["HTTP_HOST"] == "localhost:8000":
        return HttpResponse("You are on development.  Please use localhost:3000")

    return render(request, "index.html", {})
