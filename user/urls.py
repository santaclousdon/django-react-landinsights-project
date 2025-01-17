from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from user.views import GetUser, GetUsers, GoogleLogin, RegisterUser

urlpatterns = [
    # User authentication views
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    path("google_login/", GoogleLogin, name="GoogleLogin"),

    path("user/", GetUser, name="GetUser"),
    path("users/", GetUsers, name="GetUsers"),

    path("register/", RegisterUser, name="RegisterUser"),
]
