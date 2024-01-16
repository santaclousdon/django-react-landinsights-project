from django.http import JsonResponse, HttpResponseForbidden
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken

from user.models import User

import requests

@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def GetUser(request):
    user = request.user

    return JsonResponse({
        'email': user.email,
        'company': user.companies.first().id,
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