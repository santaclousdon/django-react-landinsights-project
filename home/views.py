from django.shortcuts import render
from django.http import HttpResponseForbidden, JsonResponse
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

from home.models import *

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
def GetRegionData(request):
    filter_data = request.data
    pprint.pprint(filter_data)

    region_data = []

    regions = Region.objects.filter(
        active=True,
    ).prefetch_related('statistics')

    for region in regions:
        region_json = region.to_json()

        for stat in region.statistics.all():
            region_json[stat.type] = stat.data

        region_data.append(region_json)

    return JsonResponse(region_data, safe=False)


@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def ManageMarkets(request, id=None):
    json_response = {}
    
    json_response = handle_get_or_set_request(
        request, 
        SavedMarket, 
        id=id,
        many_get_relation=request.user.companies.first().markets.prefetch_related('region', 'region__statistics')
    )

    return JsonResponse(json_response, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def ManageMarketNotes(request, id=None):
    json_response = {}
    
    json_response = handle_get_or_set_request(
        request, 
        SavedMarketNote, 
        id=id,
    )

    return JsonResponse(json_response, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def ManageFilters(request, id=None):
    json_response = {}
    
    json_response = handle_get_or_set_request(
        request, 
        SavedFilters, 
        id=id,
        many_get_relation=request.user.companies.first().filters
    )

    return JsonResponse(json_response, safe=False)



def handle_get_or_set_request(request, model, id=None, many_get_relation=None):

    if request.method == 'GET':
        if id:
            object = model.objects.get(id=id)
            json_response = object.to_json()
        else:
            objects = many_get_relation.filter(active=True)

            json_response = []
            for object in objects.all():
                json_response.append(object.to_json())

    elif request.method == 'POST':
        json_data = request.data
        del json_data['csrfmiddlewaretoken']
        json_data['active'] = True

        pprint.pprint(json_data)

        if id:
            object = model.objects.filter(id=id)
            object.update(**json_data)
            object.first()

        else:
            object = model.objects.create(**json_data)


        json_response = object.to_json()

    elif request.method == 'DELETE':
        object = model.objects.get(id=id)
        object.active = False
        object.save()

        json_response = {}

    return json_response
