from rest_framework import serializers
from .models import JoinForm


class JoinFormSerializer(serializers.ModelSerializer):
    date_submitted = serializers.DateTimeField(read_only=True)
    last_modified = serializers.DateTimeField(read_only=True)
    
    class Meta:
        model = JoinForm
        fields = [
            'id', 'full_name', 'email', 'phone', 'course_interested_in',
            'highest_qualification', 'skills', 'linkedin_profile', 
            'message', 'date_submitted', 'last_modified'
        ]
    
    def validate_full_name(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Full name cannot be blank")
        return value.strip().title()
    
    def validate_email(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Email cannot be blank")
        return value.strip().lower()
    
    def validate_phone(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Phone number cannot be blank")
        return value.strip()
    
    def validate_course_interested_in(self, value):
        if not value:
            raise serializers.ValidationError("Course interest cannot be blank")
        valid_choices = [choice[0] for choice in JoinForm.COURSE_CHOICES]
        if value not in valid_choices:
            raise serializers.ValidationError("Invalid course selection")
        return value
    
    def validate_skills(self, value):
        if not value or not value.strip():
            raise serializers.ValidationError("Skills cannot be blank")
        return value.strip()