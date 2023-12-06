import uuid
from django.db import models


class BaseModel(models.Model):
    class Meta:
        abstract = True

    # Standard UUID
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # Soft delete flag
    active = models.BooleanField(default=True)
    # Flags for restricting model access
    GET_STAFF = False
    POST_STAFF = False
    DELETE_STAFF = False
    # Dates
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __init__(self, *args, **kwargs):
        super(BaseModel, self).__init__(*args, **kwargs)

    # Simple stringification
    def __str__(self):
        return "%s : %s" % (
            getattr(self, "name", None),
            getattr(self, "created_at", None),
        )
