import uuid
from django.db import models
from django.utils import timezone
from django.apps import apps

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password):
        # Creates and saves a User with the given email and password.
        now = timezone.now()
        if not email:
            raise ValueError("The given email address must be set")

        model = apps.get_model(app_label="user", model_name="user")

        user = model(
            email=email,
            is_staff=False,
            last_login=now,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, password, **extra_fields):
        u = self.create_user(email, password, name, **extra_fields)

        u.is_staff = True
        u.is_active = True

        u.save(using=self._db)
        return u


class User(AbstractBaseUser):
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

    name = models.CharField(max_length=120, blank=True, default="")
    email = models.EmailField(
        "email address", max_length=254, unique=True, db_index=True
    )
    is_staff = models.BooleanField("staff status", default=False)
    last_login = models.DateTimeField("last_login", null=True, blank=True)

    forced_password_reset = models.BooleanField(default=False)
    password_reset_code = models.CharField(max_length=40, default=uuid.uuid4)

    lia_member = models.BooleanField(default=False)
    beta = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    slug_field = "email"

    # Only email and password is required to create a user account but this is how you'd require other fields.
    REQUIRED_FIELDS = ["password"]
    REQUIRED_FIELDS = ["name"]


    def get_password_reset_code(self):
        random_string = uuid.uuid4()
        user = User.objects.filter(password_reset_code=random_string).first()
        while user:
            random_string = uuid.uuid4()
            user = User.objects.filter(password_reset_code=random_string).first()

        self.password_reset_code = random_string
        self.save()

        return random_string

    def to_json(self):
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'company': self.companies.first().name,

            'lia_member': self.lia_member,
            'beta': self.beta,

            'created_at': self.created_at.strftime('%m/%d/%Y'),
            'last_login': self.last_login.strftime('%m/%d/%Y'),
        }
    
