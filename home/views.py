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

    data_files = {
        'State': 'geojson_data/states.json', 
        'County': 'geojson_data/counties.json',
        'ZIP': 'geojson_data/zips.json',
    }

    file = open(os.path.join(settings.BASE_DIR, data_files[filter_data['geo_scale']]))

    region_data = json.load(file)

    file.close()

    response_features = []
    for item in region_data['features'][:100]:
        if filter_data['geo_scale'] == 'State':
            item['properties']['id'] = item['properties']['STATE']
        elif filter_data['geo_scale'] == 'County':
            item['properties']['id'] = '%s_%s' % (item['properties']['STATE'], item['properties']['COUNTY'])
        elif filter_data['geo_scale'] == 'ZIP':
            item['properties']['id'] = '%s_%s' % (item['properties']['STATEFP10'], item['properties']['ZCTA5CE10'])
        
        response_features.append(item)
        #print(item['properties']['NAME'])
        #print(' ', len(item['geometry']['coordinates']))
        
    region_data['features'] = response_features

    return JsonResponse(region_data)