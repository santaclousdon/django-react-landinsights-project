from django.contrib import admin

from django.urls import include, path, re_path
from home.views import Index

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    #
    # User authentication views
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    #
    # Catch statements for React
    re_path(r"^$", Index, name="index"),
    re_path(r"^(?P<param>\S+)/$", Index, name="index"),
    re_path(r"^(?P<param>\S+)/$", Index, name="index"),
    re_path(r"^(?P<param>\S+)/(?P<param2>\S+)/$", Index, name="index"),
    re_path(r"^(?P<param>\S+)/(?P<param2>\S+)/(?P<param3>\S+)/$", Index, name="index"),
    re_path(
        r"^(?P<param>\S+)/(?P<param2>\S+)/(?P<param3>\S+)/(?P<param4>\S+)/$",
        Index,
        name="index",
    ),
]
