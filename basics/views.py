import django
from django.http import JsonResponse

def CSRFMiddlewareToken(request):
    # Gather context and send it to React
    csrfmiddlewaretoken = django.middleware.csrf.get_token(request)

    context = {
        'csrfmiddlewaretoken': csrfmiddlewaretoken,
    }

    return JsonResponse(context, status=200)