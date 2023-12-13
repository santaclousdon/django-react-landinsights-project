from django.contrib import admin

from django.urls import include, path, re_path
from home.views import Index, GetMapRegions

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    #
    # Basic views
    path("basic/", include("basics.urls")),

    #
    # User views
    path("user/", include("user.urls")),

    
    path("get_map_regions/", GetMapRegions, name='GetMapRegions'),

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
