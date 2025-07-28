from django.db import models
from django.utils.text import slugify
import uuid

class Topic(models.Model):
    name = models.CharField(max_length=255)
    date_added = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.name:
            self.name = self.name.strip().title()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Instructor(models.Model):
    name = models.CharField(max_length=255)
    date_joined = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.name:
            self.name = self.name.strip().title()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Partnership(models.Model):
    name = models.CharField(max_length=255)
    logo_url = models.URLField()
    date_joined = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.name:
            self.name = self.name.strip().title()
        if self.logo_url:
            self.logo_url = self.logo_url.strip()
        super().save(*args, **kwargs)

class Course(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, unique=True, db_index=True)
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(unique=True, max_length=255, blank=True)
    description = models.TextField()
    course_type = models.CharField(max_length=255)
    skill_level = models.CharField(max_length=255)
    featured_image = models.URLField()
    landing_page = models.URLField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    topics = models.ManyToManyField(Topic, related_name='courses')
    instructors = models.ManyToManyField(Instructor, related_name='courses')
    partners = models.ManyToManyField(Partnership, related_name='courses')

    def save(self, *args, **kwargs):
        if self.title:
            self.title = self.title.strip().title()
        if self.description:
            self.description = self.description.strip()
        if self.course_type:
            self.course_type = self.course_type.strip().title()
        if self.skill_level:
            self.skill_level = self.skill_level.strip().title()
        if self.featured_image:
            self.featured_image = self.featured_image.strip()
        if self.landing_page:
            self.landing_page = self.landing_page.strip()
        if self.slug:
            self.slug = self.slug.strip().lower()
        else:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

class CoursePage(models.Model):
    title = models.CharField(max_length=255)
    featured_courses = models.ManyToManyField(Course, related_name='featured_courses')
    top_rated_courses = models.ManyToManyField(Course, related_name='top_rated_courses')
    date_added = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.title:
            self.title = self.title.strip().title()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title