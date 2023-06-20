from rest_framework import serializers
from .models import GoogleUser

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoogleUser
        fields = ('first_name', 'last_name', 'username', 'email') 