from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import UserManager
from django.utils import timezone

class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_('first name'), max_length=30, blank=False, null=False)
    last_name = models.CharField(_('last name'), max_length=30, blank=False, null=False)
    email = models.EmailField(_('email address'), unique=True)
    is_staff = models.BooleanField(_('staff status'), default=False)
    is_active = models.BooleanField(_('active'), default=True)
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)
    last_login = models.DateTimeField(_('last login'), blank=True, null=True)
     
    def __str__(self):
        return self.email

    objects = UserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['first_name', 'last_name']
    @property
    def full_name(self):
        return f'{self.first_name} {self.last_name}'
    def short_name(self):
        return self.first_name
    
    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')