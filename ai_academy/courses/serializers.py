from rest_framework import serializers
from django.utils.text import slugify
from .models import Topic, Instructor, Partnership, Course, CoursePage

class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = ['name']

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        
        # Check if the topic name already exists
        if Topic.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("Topic with this name already exists.")       
        return value.strip().title()
    
    def create(self, validated_data):
        # Create a new Topic instance
        return super().create(validated_data)
        
    def update(self, instance, validated_data):
        name = validated_data.get('name', instance.name)
        if name != instance.name:
            if Topic.objects.exclude(id=instance.id).filter(name__iexact=name).exists():
                raise serializers.ValidationError("Topic with this name already exists.")
            instance.name = name
        instance.save()
        return instance
    
class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = ["name"]

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        # Checks if the instructor name already exists
        if Instructor.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("Instructor with this name already exists.")
        return value.strip().title()
    
    def create(self, validated_data):
        # Create a new Instructor instance
        return super().create(validated_data)
        
    def update(self, instance, validated_data):
        name = validated_data.get("name", instance.name)
        if name != instance.name:
            if Instructor.objects.exclude(id=instance.id).filter(name__iexact=name).exists():
                raise serializers.ValidationError("Instructor with this name already exists.")
            instance.name = name
        instance.save()
        return instance

class PartnershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partnership
        fields = ["name", "logo_url"]

    def validate_name(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        
        # Checks if the partnership name already exists
        if Partnership.objects.filter(name__iexact=value).exists():
            raise serializers.ValidationError("Partnership with this name already exists.")
        return value.strip().title()
    
    def validate_logo_url(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        
        # Checks if logo_url starts with http:// or https://
        if not value.startswith("http://") and not value.startswith("https://"):
            raise serializers.ValidationError("logo_url must start with 'http://' or 'https://'.")
        
        # Checks if logo_url ends with a valid image extension
        logo = value.split(".")[-1].lower()
        if logo not in ('png', 'jpg', 'jpeg', 'gif'):
            raise serializers.ValidationError("logo_url must be a valid image URL ending with .png, .jpg, .jpeg, or .gif.")
        
        return value.strip()
      
    def create(self, validated_data):
        # Create a new Partnership instance
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        name = validated_data.get("name", instance.name)
        logo_url = validated_data.get("logo_url", instance.logo_url)
        # Check if the name or logo_url has changed
        if name != instance.name:
            if Partnership.objects.exclude(id=instance.id).filter(name__iexact=name).exists():
                raise serializers.ValidationError("Partner with this name already exists.")
            instance.name = name
        if logo_url != instance.logo_url:
           instance.logo_url = logo_url
        instance.save()
        return instance

class CourseSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    slug = serializers.SlugField(required=False, allow_blank=True)
    landing_page = serializers.URLField(required=False, allow_blank=True)
    topics = TopicSerializer(many=True, read_only=True)
    instructors = InstructorSerializer(many=True, read_only=True)
    partners = PartnershipSerializer(many=True, read_only=True)
    class Meta:
        model = Course
        fields = [
            "id", "title", "slug", "description", "course_type",
            "skill_level", "featured_image", "landing_page", 
            "date", "modified", "topics", "instructors", "partners"
        ]

    def validate_title(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        # Checks if the course title already exists
        if Course.objects.filter(title__iexact=value.strip()).exists():
            raise serializers.ValidationError("Course with this title already exists.")
        return value.strip().title()
    
    def validate_slug(self, value):
        if value:
            slug = slugify(value.strip())
            if Course.objects.filter(slug__iexact=slug).exists():
                raise serializers.ValidationError("Slug with this value already exists.")
        return value.strip().lower()

    def validate_featured_image(self, value):
        if not value:
            raise serializers.ValidationError("This field cannot be blank")
        if not value.startswith("http://") and not value.startswith("https://"):
            raise serializers.ValidationError("featured_image must start with 'http://' or 'https://'.")
        # Checks if featured_image ends with a valid image extension
        image = value.split(".")[-1].lower()
        if image not in ('png', 'jpg', 'jpeg', 'gif'):
            raise serializers.ValidationError("featured_image must be a valid image URL ending with .png, .jpg, .jpeg, or .gif.")
        return value.strip()

    def validate_landing_page(self, value):
        if value and not (value.startswith("http://") or value.startswith("https://")):
            raise serializers.ValidationError("landing_page must start with 'http://' or 'https://'.")
        return value.strip()
    
    def create(self, validated_data):
        topics_data = validated_data.pop('topics', [])
        instructors_data = validated_data.pop('instructors', [])
        partners_data = validated_data.pop('partners', [])
        course = super().create(validated_data)
        # Handle nested relationships
        course.topics.set(topics_data)
        course.instructors.set(instructors_data)
        course.partners.set(partners_data)
        return course
    
    def update(self, instance, validated_data):
        title = validated_data.get('title', instance.title)
        if title != instance.title:
            if Course.objects.exclude(id=instance.id).filter(title__iexact=title).exists():
                raise serializers.ValidationError("Course with this title already exists.")
            instance.title = title.strip().title()
        if 'slug' in validated_data:
            slug = validated_data.get('slug', instance.slug)
            if slug:
                slug = slugify(slug.strip())
                if Course.objects.exclude(id=instance.id).filter(slug__iexact=slug).exists():
                    raise serializers.ValidationError("Slug with this value already exists.")
                instance.slug = slug
        topics_data = validated_data.pop('topics', [])
        instructors_data = validated_data.pop('instructors', [])
        partners_data = validated_data.pop('partners', [])
        course = super().update(instance, validated_data)
        # Handle nested relationships
        course.topics.set(topics_data)
        course.instructors.set(instructors_data)
        course.partners.set(partners_data)
        return course
