from django.contrib import admin

from django.urls import include, path, re_path
from home.views import Index, GetMapRegions, ManageMarkets, ManageFilters

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    #
    # Basic views
    path("basics/", include("basics.urls")),

    #
    # User views
    path("user/", include("user.urls")),

    
    path("get_map_regions/", GetMapRegions, name='GetMapRegions'),

    path("api/markets/", ManageMarkets, name='ManageMarkets'),
    path("api/markets/(?P<id>\S+)/", ManageMarkets, name='ManageMarkets'),

    path("api/filters/", ManageFilters, name='ManageFilters'),
    path("api/filters/(?P<id>\S+)/", ManageFilters, name='ManageFilters'),

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
