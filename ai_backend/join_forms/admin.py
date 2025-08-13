from django.contrib import admin
from .models import JoinForm


@admin.register(JoinForm)
class JoinFormAdmin(admin.ModelAdmin):
    list_display = [
        'full_name', 'email', 'course_interested_in', 
        'highest_qualification', 'date_submitted'
    ]
    list_filter = [
        'course_interested_in', 'highest_qualification', 
        'date_submitted', 'last_modified'
    ]
    search_fields = [
        'full_name', 'email', 'course_interested_in', 'skills'
    ]
    readonly_fields = ['date_submitted', 'last_modified']
    ordering = ['-date_submitted']
    
    fieldsets = (
        ('Personal Information', {
            'fields': ('full_name', 'email', 'phone')
        }),
        ('Course Information', {
            'fields': ('course_interested_in', 'highest_qualification', 'skills')
        }),
        ('Additional Information', {
            'fields': ('linkedin_profile', 'message')
        }),
        ('Timestamps', {
            'fields': ('date_submitted', 'last_modified'),
            'classes': ('collapse',)
        }),
    )
