"""
WSGI config for django_app project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "home.settings")

application = get_wsgi_application()

from whitenoise import WhiteNoise

PROJECT_ROOT = os.path.dirname(os.path.dirname(__file__))
STATIC_ROOT = PROJECT_ROOT + '/static/'

application = WhiteNoise(application, root=STATIC_ROOT)