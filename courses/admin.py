from django.contrib import admin

from .models import Course, Topic, Instructor, Partnership, CoursePage

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "slug", "description", "course_type", "skill_level", "featured_image", "landing_page", "date", "modified")
    list_filter = ("title",)
    search_fields = ("title",)

@admin.register(Topic)
class TopicAdmin(admin.ModelAdmin):
    list_display = ("name", "date_added")
    list_filter = ("name",)
    search_fields = ("name",)

@admin.register(Instructor)
class InstructorAdmin(admin.ModelAdmin):
    list_display = ("name", "date_joined")
    list_filter = ("name",)
    search_fields = ("name",)

@admin.register(Partnership)
class PartnershipAdmin(admin.ModelAdmin):
    list_display = ("name", "date_joined")
    list_filter = ("name",)
    search_fields = ("name",)

@admin.register(CoursePage)
class CoursePageAdmin(admin.ModelAdmin):
    list_display = ("title",)
    list_filter = ("title",)
    search_fields = ("title",)
