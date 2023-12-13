from django.shortcuts import render
from django.http import HttpResponseForbidden, JsonResponse
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view, permission_classes

from django.conf import settings
import json

import pprint
import os

def Index(request, param="", param2="", param3="", param4="", param5="", param6=""):
    if "HTTP_HOST" not in request.META:
        return HttpResponseForbidden()

    #if request.META["HTTP_HOST"] == "localhost:8000":
    #    return HttpResponse("You are on development.  Please use localhost:3000")

    return render(request, "index.html", {})



@api_view(['POST'])
@permission_classes([AllowAny])
def GetMapRegions(request):
    filter_data = request.data
    pprint.pprint(filter_data)

    file = open(os.path.join(settings.BASE_DIR, 'geojson_data/states.json'))

    region_data = json.load(file)

    file.close()

    for item in region_data['features']:
        print(item['properties']['NAME'])

        print(' ', len(item['geometry']['coordinates']))

    return JsonResponse(region_data)