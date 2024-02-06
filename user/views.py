from django.http import JsonResponse, HttpResponseForbidden
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken

from user.models import User
from home.models import Company

import requests
import datetime
from django.utils.timezone import now

import string
import random
import json
from django.contrib.auth.hashers import make_password

from django.core.validators import validate_email
from django.core.exceptions import ValidationError

@api_view(['GET'])
@permission_classes((IsAuthenticated, ))
def GetUser(request):
    user = request.user

    last_hour = now() - datetime.timedelta(hours=1)

    if not user.last_login or user.last_login < last_hour:
        user.last_login = now()
        user.save()

    return JsonResponse(user.to_json())

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


def generate_random_password(length=12):
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for i in range(length))


@api_view(['POST'])
@permission_classes((AllowAny, ))
def GoogleLogin(request):
    json_data = request.data

    response = requests.get('https://www.googleapis.com/oauth2/v3/userinfo?access_token=%s' % (json_data['access_token']))
    data = response.json()

    raw_password = generate_random_password()

    if 'email' in data:
        try :
            user = User.objects.get(email=data['email'])
            if user:
                return JsonResponse(get_tokens_for_user(user))
        except Exception as e:
            name = data.get('name')
            email = data.get('email')
            password = make_password(raw_password)
            user = User.objects.create(name=name, email=email, password=password)
            user.save()
            return JsonResponse(get_tokens_for_user(user))

    return HttpResponseForbidden()

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

@api_view(['POST'])
@permission_classes((AllowAny, ))
def RegisterUser(request):
    try:
        body_unicode = request.body.decode('utf-8')
        data = json.loads(body_unicode)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')
        company_name = data.get('company_name')

        if not name:
            return JsonResponse({'error': 'Name field is missing'}, status=400)
        
        if not email:
            return JsonResponse({'error': 'Email field is missing'}, status=400)
        
        if not company_name:
            return JsonResponse({'error': 'Company Name field is missing'}, status=400)
        
        if not password:
            return JsonResponse({'error': 'Password field is missing'}, status=400)
        
        try:
            validate_email(email)

        except ValidationError:
            return JsonResponse({'error': 'Enter a valid email address.'}, status=400)

        existing_user = User.objects.filter(email=email).first()

        if existing_user:
            return JsonResponse({'error': 'A user with that email already exists.'}, status=400)

        hashed_password = make_password(password)

        user = User.objects.create(name=name, email=email.lower(), password=hashed_password, last_login=now())

        user.save()

        existing_company = Company.objects.filter(name=company_name).first()

        if existing_company:
            existing_company.members.add(user)
        else:
            company = Company.objects.create(name=company_name, owner=user)

            company.save()

            company.members.add(user)

        return JsonResponse(get_tokens_for_user(user))
    except KeyError as e:
        return JsonResponse({'error': str(e) + ' is required.'}, status=400)
    except Exception as e:
        return JsonResponse({'error': 'Something went wrong during registration.'}, status=500)
