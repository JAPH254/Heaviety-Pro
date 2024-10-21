from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _

class UserManager(BaseUserManager):
    @staticmethod
    def email_validator(email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValidationError(_('Invalid email address'))
    def normalize_and_validate_email(self, email):
        if email:
            normalized_email = self.normalize_email(email)
            self.email_validator(normalized_email)
            return normalized_email
        else:
            raise ValidationError(_('Email address is required'))
    @staticmethod
    def validate_password(password):
        if not password:
            raise ValidationError(_('Password is required'))
        return password
    @staticmethod
    def compare_passwords(password1, password2):
        if password1 != password2:
            raise ValidationError(_('Passwords do not match'))
        
    def create_user(self, email, first_name, last_name, password=None, **extra_fields):
        if not first_name:
            raise ValidationError(_('First name is required'))
        if not last_name:
            raise ValidationError(_('Last name is required'))
        email = self.normalize_and_validate_email(email)
        password = self.validate_password(password)
        user = self.model(
            first_name=first_name,
            last_name=last_name,
            email=email,
            **extra_fields
        )
        user.set_password(password)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        
        user.save()

        return user
    
    def create_superuser(self, email, first_name, last_name, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        
        email = self.normalize_and_validate_email(email)
        password = self.validate_password(password)

        if not password:
            raise ValidationError(_('Password is required'))
        
        user = self.create_user(
            email=email,
            first_name=first_name,
            last_name=last_name,
            password=password,
            **extra_fields
        )

        user.save()

        return user

        