from django.contrib import admin
from django.urls import path

from django.conf.urls import include, url
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
    url(r"^$", Index, name="index"),
    url(r"^(?P<param>\S+)/$", Index, name="index"),
    url(r"^(?P<param>\S+)/$", Index, name="index"),
    url(r"^(?P<param>\S+)/(?P<param2>\S+)/$", Index, name="index"),
    url(r"^(?P<param>\S+)/(?P<param2>\S+)/(?P<param3>\S+)/$", Index, name="index"),
    url(
        r"^(?P<param>\S+)/(?P<param2>\S+)/(?P<param3>\S+)/(?P<param4>\S+)/$",
        Index,
        name="index",
    ),
]
