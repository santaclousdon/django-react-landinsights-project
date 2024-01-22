from django.http import JsonResponse, HttpResponseForbidden
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken

from user.models import User

import requests
import datetime
from django.utils.timezone import now


@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def GetUser(request):
    user = request.user

    last_hour = now() - datetime.timedelta(hours=1)

    if user.last_login < last_hour:
        user.last_login = now()
        user.save()

    return JsonResponse({
        'email': user.email,
        'is_staff': user.is_staff,
        'company': user.companies.first().id,
    })


@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def GetUsers(request):
    if not request.user.is_staff:
        return HttpResponseForbidden()
    
    user_json = []
    for user in User.objects.order_by('email').all():
        user_json.append(user.to_json())

    return JsonResponse({
        'user_json': user_json,
    })



@api_view(['POST'])
@permission_classes((AllowAny, ))
def GoogleLogin(request):
    json_data = request.data
    print('json_data', json_data)

    response = requests.get('https://www.googleapis.com/oauth2/v3/userinfo?access_token=%s' % (json_data['access_token']))
    data = response.json()
    print(data)

    if 'email' in data:
        user = User.objects.get(email=data['email'])
        if user:
            return JsonResponse(get_tokens_for_user(user))

    return HttpResponseForbidden()


def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }