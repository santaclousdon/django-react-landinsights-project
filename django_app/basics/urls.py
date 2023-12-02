from django.urls import include, path

from basics.views import CSRFMiddlewareToken


urlpatterns = [
    path("csrfmiddlewaretoken/", CSRFMiddlewareToken, name="CSRFMiddlewareToken"),
]
