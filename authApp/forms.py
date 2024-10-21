from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from authApp.models import User

class CustomUserCreationForm(UserCreationForm):
    
        class Meta(UserCreationForm):
            model = User
            fields = ('first_name', 'last_name', 'email')
            error_classes = {'required': 'This field is required'}

class CustomUserChangeForm(UserChangeForm):
        
        class Meta(UserChangeForm):
            model = User
            fields = ('first_name', 'last_name', 'email')
            error_classes = {'required': 'This field is required'}
            